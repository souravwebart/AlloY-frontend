import type { NextPage } from "next";
import Approach from "../Component/HomeComponent/Approach";
import Expert from "../Component/HomeComponent/Expert";
import FirstApproach from "../Component/HomeComponent/FirstApproach";
import GetinTouch from "../Component/HomeComponent/GetinTouch";
import HeroSection from "../Component/HomeComponent/HeroSection";

const Home: NextPage = () => {
  return (
    <div className="home-main">
      <HeroSection />
      <Expert />
      <Approach />
      <FirstApproach />
      <GetinTouch />
    </div>
  );
};

export default Home;
