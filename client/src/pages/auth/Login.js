// <div
//   className="d-flex vh-100 justify-content-center align-items-center"
//   style={{
//     backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/banner2.jpg)`,
//     backgroundSize: "100% 100%",
//     backgroundPosition: "center",
//   }}
// >

import React from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Form from "../../components/Shared/Form/Form"; // Import Form from Form.js
// import { useSelector } from "react-redux"; // Import useSelector from react-redux
// import Spinner from "../../components/Shared/Spinner";

const Login = () => {
  return (
    <div
      className="d-flex vh-100 justify-content-center align-items-center"
      style={{
        backgroundColor: "pink",
        position: "relative",
      }}
    >
      <div className="card p-4">
        <Form formTitle={"Login Page"} submitBtn={"Login"} formType={"login"} />
      </div>
    </div>
  );
};

export default Login;
