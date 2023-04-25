import Link from "next/link";
import React from "react";

const error = () => {
  return (
    <div className="text-center m-5">
      <div>
        <img src="imgs/error404.gif" className="w-50" />
      </div>
      <Link href="/" className="btn btn-dark">
        Home
      </Link>
    </div>
  );
};

export default error;
error.getLayout = (page) => {
  return <>{page}</>;
};
