import React from "react";

const Privacy = () => {
  return (
    <>
      <div className="bg-[#f4f4f4] pt-24 pb-20">
        <div className="container  mx-auto px-6">
          <h1 className="text-4xl italic font-[Montserrat]  font-bold text-center mb-12">
            PRIVACY POLICY
          </h1>
          <div className="space-y-16 text-lg text-gray-800 leading-relaxed">
            <section>
              <h2 className="text-3xl italic font-[Montserrat] font-semibold mb-4">
                1. Introduction
              </h2>
              <p className=" italic text-base  md:text-xl pl-4">
                This Privacy Policy explains how Miso collects, uses, and
                protects your personal information when you visit our website.
                By using our website, you consent to our privacy practices.
              </p>
            </section>
            <section>
              <h2 className="text-3xl italic font-[Montserrat] font-semibold mb-4">
                2. Information We Collect
              </h2>
              <p className="italic text-base  md:text-xl pl-4">
                We may collect personal information such as your name, email
                address, and contact details when you interact with our website.
                We may also collect non-personal information about your browsing
                activities.
              </p>
            </section>
            <section>
              <h2 className="text-3xl italic font-[Montserrat] font-semibold mb-4">
                3. How We Use Your Information
              </h2>
              <p className="italic text-base  md:text-xl pl-4">
                The information we collect may be used to provide and improve
                our services, respond to your inquiries, and communicate with
                you. We may also use your information for marketing purposes
                with your consent.
              </p>
            </section>
            <section>
              <h2 className="text-3xl italic font-[Montserrat] font-semibold mb-4">
                4. Data Security
              </h2>
              <p className="italic text-base  md:text-xl pl-4">
                We take reasonable measures to protect your personal information
                from unauthorized access, disclosure, or misuse. However, no
                method of transmission over the internet or electronic storage
                is 100% secure.
              </p>
            </section>
            <section>
              <h2 className="text-3xl italic font-[Montserrat] font-semibold mb-4">
                5. Changes to This Policy
              </h2>
              <p className="italic text-base  md:text-xl pl-4">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page, and your continued use of the
                website constitutes your acceptance of the updated policy.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
