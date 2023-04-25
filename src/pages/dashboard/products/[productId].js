import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const productId = ({ product }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [category, setCategory] = useState(product.category);
  const [description, setDescription] = useState(product.description);
  const router = useRouter();

  const addHandler = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/api/products/${product._id}`, {
      name,
      price,
      category,
      description,
    });
    setName("");
    setPrice("");
    setCategory("");
    setDescription("");
    alert("Product Updated Successfully");
    router.push("/dashboard");
  };

  return (
    <div className="container">
      <form className="row p-5 d-flex justify-content-center">
        <div className="mb-3 col-5">
          <label htmlFor="name" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3 col-5">
          <label htmlFor="price" className="form-label">
            Product Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3 col-5">
          <label htmlFor="category" className="form-label">
            Product Category
          </label>
          <input
            type="text"
            className="form-control"
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="mb-3 col-5">
          <label htmlFor="desc" className="form-label">
            Product Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="my-4 text-center">
          <button type="submit" className="btn btn-dark col-2" onClick={addHandler}>
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default productId;
export async function getServerSideProps(context) {
  const { params } = context;
  const { productId } = params;
  const { data } = await axios.get(`http://localhost:3000/api/products/${productId}`);
  return {
    props: {
      product: data,
    },
  };
}
