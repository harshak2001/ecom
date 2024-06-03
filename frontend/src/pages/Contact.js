import React from "react";
import Layout from "../components/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout title={"Contact"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactUs.jpg"
            alt="contactus"
            style={{ width: "100%", height: "300px", boxShadow: "10px grey" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            We're here to make your world more beautiful and artistic. Feel free
            to reach out to us for inquiries, custom orders, or just to say
            hello. Stuti is more than a brand; it's a community of art lovers
            and creative minds. Join us on this artistic journey and discover
            the magic of Stuti. Thank you for your support and for being a part
            of our creative family.
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.dummy@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 8767xxxx37
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
