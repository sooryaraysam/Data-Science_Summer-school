import React from "react";
import web from "../src/images/img2.jpg";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name="Grow your skillset with"
        imgsrc={web}
        visit="/services"
        btname="Get Started"
      />
    </>
  );
};

export default Home;

