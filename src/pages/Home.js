import React from "react";
import Banner from "../components/Banner";
import ContactUs from "../components/ContactUs";
import LatestPost from "../components/LatestPost";
import OurSponsor from "../components/OurSponsor";
import PopularPost from "../components/PopularPost";

const Home = () => {
  return (
    <div className="md:px-10">
      <Banner />
      <LatestPost />
      <PopularPost />
      <OurSponsor />
      <ContactUs />
    </div>
  );
};

export default Home;
