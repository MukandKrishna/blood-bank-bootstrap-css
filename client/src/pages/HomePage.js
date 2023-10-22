import React from "react";
import Layout from "../components/Shared/Layout/Layout";
// import "./HomePage.css"
const HomePage = () => {
  return (
    <Layout>
      <h1 className="homepage">HomePage</h1>
    </Layout>
  );
};

export default HomePage;

//  want to use loading and error feature in this, but showing error here
//  same in login and register page