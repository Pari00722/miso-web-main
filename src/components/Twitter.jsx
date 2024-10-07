import React from "react";
import { auth } from "../Firebase";
import { TwitterAuthProvider, signInWithPopup } from "firebase/auth";

const Twitter = () => {
  const signInWithTwitter = () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(auth, provider)
      .then((rel) => {
        alert(re);
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <>
      <button onClick={signInWithTwitter}>Sign In with Twitter</button>
    </>
  );
};

export default Twitter;
