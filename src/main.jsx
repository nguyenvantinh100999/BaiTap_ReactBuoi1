import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./BaiTapLayoutComponent/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Body from "./BaiTapLayoutComponent/Body";
import Footer from "./BaiTapLayoutComponent/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Header />
    <Body />
    <Footer />
  </div>
);
