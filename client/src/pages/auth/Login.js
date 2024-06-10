// import React from "react";
// import Form from "../../components/Shared/Form/Form"; // Import Form from Form.js
// // import { useSelector } from "react-redux"; // Import useSelector from react-redux
// // import Spinner from "../../components/Shared/Spinner";
// import styles from "./Login.module.css"; // Import the CSS module
// const Login = () => {
//   return (
//     <div className={styles.loginRoot}>
//       <div class={styles.box}>
//         <div class={styles.image}>
//           <Form formTitle={"Login"} submitBtn={"Login"} formType={"login"} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import Form from "../../components/Shared/Form/Form";
import styles from "./Login.module.css";
import dhat from "./log_reg/lg_reg.jpg";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles["form-container"]}>
        <Form formTitle={"Login"} submitBtn={"Login"} formType={"login"} />
      </div>
      <div className={styles["image-container"]}>
        <img src={dhat} alt="dhat" className={styles.image} />
      </div>
    </div>
  );
};

export default Login;
