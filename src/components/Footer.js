import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="h-16 py-5 shadow border-t">
      <p className="text-center">© {date} BLOGER, All Rights Reserved</p>
    </div>
  );
};

export default Footer;
