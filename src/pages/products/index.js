import ProductCard from "../../components/ProductCard/ProductCard";
import React from "react";
import axios from "axios";
import classes from "./products.module.css";

const Products = ({ products }) => {
  return (
    <div className={classes.background__color}>
      <div className="container">
        <div className="row g-5 mt-2">
          {products.map((product) => {
            return <ProductCard product={product} key={product._id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
// Static Site Generation (SSG)
// export async function getStaticProps() {
//   const { data } = await axios.get("http://localhost:4000/products");
//   return {
//     props: {
//       products: data,
//     },
//   };
// }

// Server Side Rendering (SSR)
export async function getServerSideProps() {
  const { data } = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      products: data,
    },
  };
}
