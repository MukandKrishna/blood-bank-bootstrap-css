
// import React from "react";
// import Form from "../../components/Shared/Form/Form";
// import styles from "./Register.module.css";

// const Register = () => {
//   return (
//     // <div className={`d-flex vh-100 justify-content-center align-items-center ${styles.scrollboy}`}>
//     <div className={styles.container}>
//       <div className={`card  ${styles.card}`}>
//         <div className={styles["card-content"]}>
//           <Form
//             formTitle={"Registration"}
//             submitBtn={"Submit"}
//             formType={"register"}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Register;


import React from "react";
import Form from "../../components/Shared/Form/Form";
import styles from "./Register.module.css";
import dhat from "./log_reg/lg_reg.jpg";

const Register = () => {
  return (
    <div className={styles.container}>
      <div className={styles["form-container"]}>
        <Form
          formTitle={"Registration"}
          submitBtn={"Submit"}
          formType={"register"}
        />
      </div>
      <div className={styles["image-container"]}>
        <img src={dhat} alt="dhat" className={styles.image} />
      </div>
    </div>
  );
};

export default Register;
