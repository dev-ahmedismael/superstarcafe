import React from "react";
import HomeSecEight from "@/components/homepage/home-sec-eight/HomeSecEight";
import HomeSecEleven from "@/components/homepage/home-sec-eleven/HomeSecEleven";
import HomeSecFive from "@/components/homepage/home-sec-five/HomeSecFive";
import HomeSecFour from "@/components/homepage/home-sec-four/HomeSecFour";
import HomeSecNine from "@/components/homepage/home-sec-nine/HomeSecNine";
import HomeSecOne from "@/components/homepage/home-sec-one/HomeSecOne";
import HomeSecSeven from "@/components/homepage/home-sec-seven/HomeSecSeven";
import HomeSecSix from "@/components/homepage/home-sec-six/HomeSecSix";
import HomeSecTen from "@/components/homepage/home-sec-ten/HomeSecTen";
import HomeSecThree from "@/components/homepage/home-sec-three/HomeSecThree";
import HomeSecTwo from "@/components/homepage/home-sec-two/HomeSecTwo";

const HomePage = () => {
  return (
    <>
      <HomeSecOne />
      <HomeSecTwo />
      <HomeSecThree />
      <HomeSecFour />
      <HomeSecFive />
      <HomeSecSix />
      <HomeSecSeven />
      <HomeSecEight />
      <HomeSecNine />
      <HomeSecTen />
      <HomeSecEleven />
    </>
  );
};

export default HomePage;
