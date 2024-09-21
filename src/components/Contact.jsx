import React from "react";

const Contact = () => {
  return (
    <>
      <div className="bg-[#f4f4f4] pt-24 pb-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-[Raleway] font-bold text-center mb-12">
            Contact Us
          </h1>
          <p className=" italic text-base  md:text-xl text-gray-800 leading-relaxed text-center mb-8">
            We value your feedback and are here to assist you with any questions
            or concerns. Whether you have inquiries about our products, need
            support, or simply want to get in touch, feel free to contact us
            through the following channels:
          </p>
          <div className="text-center">
            <p className="text-xl mb-4">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:hellomiso21@gmail.com"
                className="text-[#ac83a9] underline"
              >
                hellomiso21@gmail.com
              </a>
            </p>
            <p className="text-xl mb-4">
              <strong>Phone:</strong>{" "}
              <a
                href="telno:+91 9119733531"
                className="text-[#ac83a9] underline"
              >
                +91 9119733531
              </a>
            </p>
            <p className="text-xl">
              <strong>Address:</strong> Meerut, Uttar Pradesh
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
