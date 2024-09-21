import React from "react";

const Internships = () => {
  return (
    <>
      <div className="pt-2 sm:pt-7 pb-2 sm:pb-8">
        <div className="flex justify-center">
          <p className="font-bold text-4xl italic font-[Raleway]">
            Internships
          </p>
        </div>
        <div className="flex flex-col items-center pt-5 px-5 md:px-20">
          <p className="text-base italic sm:text-lg md:text-xl text-justify pl-5 pr-5 mt-6">
            Miso is excited to offer a range of internship opportunities across
            various departments. If you’re passionate about innovation,
            creativity, and learning in a dynamic environment, consider applying
            for one of our internships:
          </p>

          <div className="text-base sm:text-lg md:text-xl text-justify pl-5 pr-5 mt-16">
            <h4 className="font-bold italic text-center">
              Available Internship Positions:
            </h4>
            <ul className="list-disc italic text-base  md:text-xl pl-5 mt-6">
              <li className="mt-2">
                <strong> Digital Marketing Intern:</strong> Contribute to our
                digital marketing efforts and help shape Miso’s online presence.
              </li>
              <li className="mt-2">
                <strong> Content Writer Intern:</strong> Join our team to create
                engaging content and support our storytelling initiatives.
              </li>
              <li className="mt-2">
                <strong> Graphic Design Intern:</strong> Work on designing
                visual content that enhances our brand identity and marketing
                materials.
              </li>
              <li className="mt-2">
                <strong> Web Development Intern:</strong> Assist in building and
                maintaining our website, focusing on both front-end and back-end
                development.
              </li>
              <li className="mt-2">
                <strong> Product Development Intern:</strong> Help in the
                creation and enhancement of Miso’s product offerings.
              </li>
              <li className="mt-2">
                <strong> Sales and Marketing Intern:</strong> Support our sales
                and marketing activities to drive growth and customer
                engagement.
              </li>
            </ul>
          </div>

          <p className="text-base italic sm:text-lg md:text-xl text-justify pl-5 pr-5 mt-16">
            <strong>Why Intern at Miso?</strong>
          </p>
          <ul className="list-disc italic pl-5 text-base sm:text-lg md:text-xl text-justify mt-6">
            <li className="mt-2">
              <strong>Hands-on Experience:</strong> Gain valuable, real-world
              experience in a creative and innovative environment.
            </li>
            <li className="mt-2">
              <strong>Learning Opportunities:</strong> Work closely with
              industry professionals and learn from their expertise.
            </li>
            <li className="mt-2">
              <strong>Creative Freedom:</strong> Contribute your ideas and make
              a tangible impact on our projects.
            </li>
            <li className="mt-2">
              <strong>Flexible Work Arrangements:</strong> Enjoy flexible hours
              and remote work options to fit your schedule.
            </li>
            <li className="mt-2">
              <strong>Career Growth:</strong> Build skills and knowledge that
              will benefit your future career prospects.
            </li>
          </ul>

          <p className="text-base italic sm:text-lg md:text-xl text-justify pl-5 pr-5 mt-10">
            To apply for any of these internship positions, please send your
            resume to{" "}
            <a
              href="mailto:hrmisocreations@gmail.com"
              className="text-blue-600 hover:underline"
            >
              hrmisocreations@gmail.com
            </a>
            . We look forward to welcoming you to the Miso team!
          </p>
        </div>
      </div>
    </>
  );
};

export default Internships;
