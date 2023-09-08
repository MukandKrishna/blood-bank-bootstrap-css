/*
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// const Registration = () => {
//   return (
//     <
//       className="d-flex vh-100 justify-content-center align-items-center"
//       style={{
//         backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/banner1.jpg)`,
//         backgroundSize: "100% 100%",
//         backgroundPosition: "center",
//       }}
*/
/*
import React from "react";
import Form from "../../components/Shared/Form/Form"; // Import Form from Form.js
import './style.css';
const Register = () => {
  return (
    <div
    className="d-flex vh-100 justify-content-center align-items-center scrollboy"
      style={{ backgroundColor: "pink", position: "relative" }}
    >
      <div className="card p-4" style={{maxWidth: "500px", width: "100%",  maxHeight: "375px", overflow: "auto" }}>
        <Form
          formTitle={"Registration Page"}
          submitBtn={"Submit"}
          formType={"register"}
        />
      </div>
    </div>
  );
};
export default Register;   

*/

import React from "react";
import Form from "../../components/Shared/Form/Form"; // Import Form from Form.js
import "./style.css";
const Register = () => {
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center scrollboy">
      <div className="container">
        <div className="image">
        <div className="form-box">
          <Form
          formTitle={"Registration Page"}
          submitBtn={"Submit"}
          formType={"register"}
        />
        </div>
      </div>
      </div>
    </div>
  );
};
export default Register;
