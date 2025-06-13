import React from "react";
import Footer from "../component/Footer";
import HomeFeature from "../component/HomeFeature";
import HomeHero from "../component/HomeHero";
import HomeReview from "../component/HomeReview";
import StepProcess from "../component/HomeStepProcess";
import HomeTrial from "../component/HomeTrial";

function Home() {
  return (
    <div>
      <HomeHero />
      <StepProcess />
      <HomeFeature />
      <HomeTrial />
      <HomeReview />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
