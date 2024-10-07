import React from "react";
import { getDatabase } from "firebase/database";
import { app } from "../Firebase";

const StarMaps = () => {
  const db = getDatabase(app);

  return (
    <>
      <h1>Star Maps</h1>
    </>
  );
};

export default StarMaps;
