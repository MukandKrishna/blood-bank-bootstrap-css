
import React from "react";
import Form from "../../components/Shared/Form/Form";
import styles from "./Register.module.css";

const Register = () => {
  return (
    // <div className={`d-flex vh-100 justify-content-center align-items-center ${styles.scrollboy}`}>
    <div className={styles.container}>
      <div className={`card  ${styles.card}`}>
        <div className={styles["card-content"]}>
          <Form
            formTitle={"Registration"}
            submitBtn={"Submit"}
            formType={"register"}
          />
        </div>
      </div>
    </div>
  );
};
export default Register;
