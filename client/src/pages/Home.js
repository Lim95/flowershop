import React from "react";
import CategoryMenu from "../components/CategoryMenu";
import CarouselPage from "../components/CarouselPage";
import Popular from "../components/Popular";

const Home = () => {
  return (
    <div className="container">
      <CategoryMenu />
      <CarouselPage />
      <Popular/>
    </div>
  );
};

export default Home;
