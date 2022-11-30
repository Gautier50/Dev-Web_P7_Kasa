import Navigation from "components/Navigation/Navigation";
import React from "react";
import api from "../../components/RecupData";

const Home = () => {
  return (
    <div>
      <Navigation />
      <api />
      <Home />
    </div>
  );
};

export default Home;
