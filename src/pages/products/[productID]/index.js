import React from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import axios from "axios";

const productID = ({ product }) => {
  return (
    <div className="container">
      <ProductCard product={product} parent="productID" />
    </div>
  );
};

export default productID;

// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: "blocking",
//   };
// }

// export async function getStaticProps(context) {
//   const { params } = context;
//   console.log(params);
//   const { data } = await axios.get(`http://localhost:4000/products/${params.productID}`);

//   return {
//     props: {
//       product: data,
//     },
// ISR - Incremental Static Regeneration
//     revalidate: 10,
//   };
// }

export async function getServerSideProps(context) {
  const { params } = context;
  const { productID } = params;
  const { data } = await axios.get(`http://localhost:3000/api/products/${productID}`);
  return {
    props: {
      product: data,
    },
  };
}
