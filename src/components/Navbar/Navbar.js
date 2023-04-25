import React from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import classes from "./Navbar.module.css";
import { useRouter } from "next/router";

const Navbar = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className={`${classes.nav_bar}`}>
        <nav className={`navbar navbar-expand-lg bg-body-tertiary container`}>
          <div className="container-fluid px-0">
            <Link className="navbar-brand" href="/">
              <img src="/imgs/logo.png" width="60" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" href="/products">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" href="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" href="" onClick={() => signOut()}>
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <div className={`${classes.nav_bar}`}>
        <nav className={`navbar navbar-expand-lg bg-body-tertiary container`}>
          <div className="container-fluid px-0">
            <Link className="navbar-brand" href="/">
              <img src="/imgs/logo.png" width="60" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" href="/products">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" href="/signin">
                    Sign in
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
};

export default Navbar;
