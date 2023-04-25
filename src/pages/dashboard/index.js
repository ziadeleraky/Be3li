import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { getSession, signIn } from "next-auth/react";

const dashboard = ({ products }) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        router.push("/");
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);

  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);
      alert("Product Deleted Successfully");
      router.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  if (loading)
    return (
      <div className="text-center">
        <div class="spinner-border my-5" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  return (
    <div className="container ">
      <h1 className="my-3 text-center">Dashboard</h1>
      <div className="big_actions my-3 row">
        <Link className="btn btn-success col-3 m-auto" href="/dashboard/products/add">
          Add Product
        </Link>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Category</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product._id}>
                <th>{product.name}</th>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.description}</td>
                <td>
                  <i
                    className="fa-solid fa-trash text-danger mx-2"
                    onClick={() => {
                      deleteHandler(product._id);
                    }}
                    style={{ cursor: "pointer" }}
                  ></i>
                  <Link href={`/dashboard/products/${product._id}`}>
                    <i className="fa-solid fa-pen text-primary"></i>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default dashboard;
export async function getServerSideProps() {
  const { data } = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      products: data,
    },
  };
}
