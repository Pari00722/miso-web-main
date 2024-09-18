import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import teamData from "./team"; // Import the teamData from team.jsx
import Footer from "./Footer";

// ProfileCard Component
const ProfileCard = ({ image, name, linkedin }) => {
  return (
    <div className="border-4 border-black rounded-lg p-8 flex flex-col bg-[#efebe7f7] items-center w-72 sm:w-96">
      {" "}
      {/* Increase the width */}
      <img
        src={image}
        alt={name}
        className="h-56 w-auto rounded-md" // Increase the image size
      />
      <h2 className="mt-5 text-xl font-bold">{name}</h2>{" "}
      {/* Increase font size */}
      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-3xl text-blue-600 ease-in-out hover:text-4xl mt-4" // Increase font size and add color
      >
        <IoLogoLinkedin />
      </a>
    </div>
  );
};

// Function to sort and filter team data
const sortTeamData = (data) => {
  const roleOrder = [
    "HR Team",
    "Web Development",
    "Content Writing",
    "Marketing Team",
    "Data Analytics",
    "Product Development Team",
  ];
  return data.sort(
    (a, b) => roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role)
  );
};

// OurTeam Component
const OurTeam = () => {
  // Sort team data based on roles
  const sortedTeamData = sortTeamData(teamData);

  return (
    <div className="bg-[#ac83b9]">
      <div className="flex justify-center sm:py-10 py-5 px-5">
        <p className="font-bold text-center text-4xl">OUR INTERN TEAM</p>
      </div>

      {/* Map through each role and display corresponding team members */}
      {[
        "HR Team",
        "Web Development",
        "Content Writing",
        "Marketing Team",
        "Data Analytics",
        "Product Development Team",
      ].map((role) => (
        <div key={role} className="mb-10">
          <p className="text-center text-2xl sm:text-3xl px-5 pt-5 pb-7 sm:pb-10 mt-2 font-bold">
            {role.toUpperCase()}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {sortedTeamData
              .filter((member) => member.role === role)
              .map((member) => (
                <ProfileCard
                  key={member.name}
                  image={member.image}
                  name={member.name}
                  linkedin={member.linkedin}
                />
              ))}
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
};

export default OurTeam;
