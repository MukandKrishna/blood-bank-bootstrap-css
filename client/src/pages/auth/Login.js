import React from "react";
import Form from "../../components/Shared/Form/Form"; // Import Form from Form.js
// import { useSelector } from "react-redux"; // Import useSelector from react-redux
// import Spinner from "../../components/Shared/Spinner";
import styles from "./Login.module.css"; // Import the CSS module
const Login = () => {
  return (
    <div className={styles.loginRoot}>
      <div class={styles.box}>
        <div class={styles.image}>
          <Form formTitle={"Login"} submitBtn={"Login"} formType={"login"} />
        </div>
      </div>
    </div>
  );
};

export default Login;
