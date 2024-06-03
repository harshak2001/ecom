import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout title={"About"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/AboutUs.jpg"
            alt="contactus"
            style={{ width: "100%", height: "300px", boxShadow: "10px grey" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <p className="text-justify mt-2">
            At Stuti, we're dedicated to bringing beauty, art, and creativity
            into the lives of our customers. We're a passionate team of artists,
            designers, and artisans who believe in the power of self-expression
            and the magic of artistic creations. Stuti is not just a brand; it's
            a celebration of individuality, craftsmanship, and the
            extraordinary.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
