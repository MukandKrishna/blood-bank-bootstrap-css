
// import React from "react";

// const Login = () => {
//   return (
//     <div
//       className="d-flex vh-100 justify-content-center align-items-center"
//       style={{
//         backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/banner2.jpg)`,
//         backgroundSize: "100% 100%",
//         backgroundPosition: "center",
//       }}
//     >
      // <div className="card p-4">
      //   <form>
      //     <div className="row mb-3">
      //       <div className="col">
      //         <label htmlFor="name" className="form-label">
      //           Name <span className="text-danger">*</span>:
      //         </label>
      //         <input type="text" className="form-control" id="name" required />
      //       </div>
      //       <div className="col">
      //         <label htmlFor="fatherName" className="form-label">
      //           Father's Name <span className="text-danger">*</span>:
      //         </label>
      //         <input type="text" className="form-control" id="fatherName" required />
      //       </div>
      //     </div>
      //     <div className="row mb-3">
      //       <div className="col">
      //         <label htmlFor="nukh" className="form-label">
      //           Nukh <span className="text-danger">*</span>:
      //         </label>
      //         <input type="text" className="form-control" id="nukh" required />
      //       </div>
      //       <div className="col">
      //         <label htmlFor="akkah" className="form-label">
      //           Akkah <span className="text-danger">*</span>:
      //         </label>
      //         <input type="text" className="form-control" id="akkah" required />
      //       </div>
      //     </div>
      //     <div className="row mb-3">
      //       <div className="col">
      //         <label htmlFor="contact" className="form-label">
      //           Contact <span className="text-danger">*</span>:
      //         </label>
      //         <input type="text" className="form-control" id="contact" required />
      //       </div>
      //       <div className="col">
      //         <label htmlFor="bloodGroup" className="form-label">
      //           Blood Group <span className="text-danger">*</span>:
      //         </label>
      //         <input type="text" className="form-control" id="bloodGroup" required />
      //       </div>
      //     </div>
      //     <div className="row mb-3">
      //       <div className="col">
      //         <label htmlFor="email" className="form-label">
      //           Email:
      //         </label>
      //         <input type="email" className="form-control" id="email" />
      //       </div>
      //       <div className="col">
      //         <label htmlFor="password" className="form-label">
      //           Password <span className="text-danger">*</span>:
      //         </label>
      //         <input type="password" className="form-control" id="password" required
      //         />
      //       </div>
      //     </div>
      //     <div className="row justify-content-center">
      //       <div className="col-auto">
      //         <button type="submit" className="btn btn-primary">
      //           Submit
      //         </button>
      //       </div>
      //     </div>
      //   </form>
      // </div>
//     </div>
//   );
// };

// export default Login;



import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Login = () => {
  return (
    <div
      className="d-flex vh-100 justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/banner2.jpg)`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
      }}
    >
      <div className="card p-4">
        <form>
        <h2 className="text-left">Login</h2>
        <hr className="mb-2" /> {/* Add a separating line */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input type="password" className="form-control" id="password" required />
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </div>
          </div>
          <div className="text-center mt-3">
            {/* Link to the registration page */}
            <Link to="/register">Don't have an account? Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
