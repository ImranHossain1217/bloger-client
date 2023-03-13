import React from "react";
import Carousel from "react-multi-carousel";
import client1 from "../assets/images/client-1.png";
import client2 from "../assets/images/client-2.png";
import client3 from "../assets/images/client-3.png";
import client4 from "../assets/images/client-4.png";
import client5 from "../assets/images/client-5.png";
import client6 from "../assets/images/client-6.png";
import client7 from "../assets/images/client-7.png";
import client8 from "../assets/images/client-8.png";
import client9 from "../assets/images/client-9.png";

const OurSponsor = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };
  const clients = [
    {
      id: 1,
      icon: client1,
    },
    {
      id: 2,
      icon: client2,
    },
    {
      id: 3,
      icon: client3,
    },
    {
      id: 4,
      icon: client4,
    },
    {
      id: 5,
      icon: client5,
    },
    {
      id: 6,
      icon: client6,
    },
    {
      id: 7,
      icon: client7,
    },
    {
      id: 8,
      icon: client8,
    },
    {
      id: 9,
      icon: client9,
    },
  ];
  return (
    <div className="my-5">
      <h2 className="text-2xl tracking-widest uppercase font-serif text-center mb-8">
        Our Sponsor
      </h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        removeArrowOnDeviceType={["tablet", "desktop", "mobile"]}
        className="md:ml-20 py-5"
      >
        {clients.map((client) => (
          <img key={client.id} src={client.icon} alt="client" />
        ))}
      </Carousel>
    </div>
  );
};

export default OurSponsor;
