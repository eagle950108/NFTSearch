import React, { useEffect, useState } from "react";
import { setDefaultBreakpoints } from "react-socks";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { failedLoadImage } from "../../utils/compre.js";
import style from "./style.js";

setDefaultBreakpoints([{ xs: 0 }, { l: 1199 }, { xl: 1200 }]);

const GlobalStyle = createGlobalStyle`${style}`;

const Header = () => {
  useEffect(() => {
    const header = document.getElementById("myHeader");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        totop.classList.add("show");
      } else {
        header.classList.remove("sticky");
        totop.classList.remove("show");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <header id="myHeader" className="navbar white">
        <div className="container">
          <div className="row w-100-nav">
            <div className="logo px-0">
              <div className="navbar-title navbar-item">
                <Link to="/">
                  <img
                    src="/img/logo-light.png"
                    className="img-fluid d-block light-logo"
                    onError={failedLoadImage}
                    alt="#"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
