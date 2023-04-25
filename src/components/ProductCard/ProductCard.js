import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import axios from "axios";

import classes from "./ProductCard.module.css";

const ProductCard = ({ product, parent }) => {
  const router = useRouter();
  const backHandler = () => {
    router.push("/products");
  };

  const deleteHandler = async () => {
    try {
      await axios.delete(`http://localhost:4000/products/${product.id}`);
      router.push("/products");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`${classes.content_card} col-4 d-flex justify-content-center`}>
      <div className={`${classes.card_big_shadow}`}>
        <div className={`${classes.card_just_text} card p-4 ${classes.card_size} justify-content-between`}>
          <h6 className={`${classes.category}`}>{product.category}</h6>
          <h4 className={classes.title}>
            <Link className={classes.a} href={`/products/${product._id}`}>
              {product.name}
            </Link>
          </h4>
          <div className={classes.content}>
            <p className={classes.description}>{product.description}</p>
          </div>
          {!parent && (
            <div>
              {/* <Link href="" className="btn btn-dark">
                Update
              </Link> */}
              <button className="btn btn-danger" onClick={deleteHandler}>
                Delete
              </button>
            </div>
          )}
          {parent && (
            <div>
              <button className="btn btn-dark" onClick={backHandler}>
                Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
