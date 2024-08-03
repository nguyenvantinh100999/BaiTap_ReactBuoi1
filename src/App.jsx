import React from "react";
import Header from "./BaiTapLayoutComponent/Header";
import Banner from "./BaiTapLayoutComponent/Banner";
import Body from "./BaiTapLayoutComponent/Body";
import Footer from "./BaiTapLayoutComponent/Footer";
import ModalWallet from "./BaiTap_Lifting_StateUp/ModalWallet";
import MyWallet from "./BaiTap_Lifting_StateUp/MyWallet";
import TestApp from "./BaiTap_Lifting_StateUp/TestApp";

const App = () => {
  return (
    <div>
      {/* <Header />
      <Banner />
      <Body />
      <Footer /> */}
      <MyWallet />
      {/* <TestApp /> */}
    </div>
  );
};

export default App;
