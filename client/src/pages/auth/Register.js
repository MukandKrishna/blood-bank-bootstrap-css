// import React from 'react'

// const Register = () => {
//   return (
//     <div>
//       <h1>Register Page</h1>
//     </div>
//   )
// }

// export default Register

// import React from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom

// const Registration = () => {
//   return (
//     <div
//       className="d-flex vh-100 justify-content-center align-items-center"
//       style={{
//         backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/banner1.jpg)`,
//         backgroundSize: "100% 100%",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="card p-4">
//         <form>
//         <h2 className="text-left mb-4">Register</h2>
//         <hr className="mb-2" /> {/* Add a separating line */}
//           <div className="row mb-3">
//             <div className="col">
//               <label htmlFor="name" className="form-label">
//                 Name<span className="text-danger">*</span>
//               </label>
//               <input type="text" className="form-control" id="name" required />
//             </div>
//             <div className="col">
//               <label htmlFor="fatherName" className="form-label">
//                 Father's Name<span className="text-danger">*</span>
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="fatherName"
//                 required
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <div className="col">
//               <label htmlFor="nukh" className="form-label">
//                 Nukh<span className="text-danger">*</span>
//               </label>
//               <input type="text" className="form-control" id="nukh" required />
//             </div>
//             <div className="col">
//               <label htmlFor="akkah" className="form-label">
//                 Akkah<span className="text-danger">*</span>
//               </label>
//               <input type="text" className="form-control" id="akkah" required />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <div className="col">
//               <label htmlFor="contact" className="form-label">
//                 Contact<span className="text-danger">*</span>
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="contact"
//                 required
//               />
//             </div>
//             <div className="col">
//               <label htmlFor="bloodGroup" className="form-label">
//                 Blood Group<span className="text-danger">*</span>
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="bloodGroup"
//                 required
//               />
//             </div>
//           </div>
//           <div className="row mb-3">
//             <div className="col">
//               <label htmlFor="email" className="form-label">
//                 Email<span className="text-danger">*</span>
//               </label>
//               <input type="email" className="form-control" id="email" required />
//             </div>
//             <div className="col">
//               <label htmlFor="password" className="form-label">
//                 Password<span className="text-danger">*</span>
//               </label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 required
//               />
//             </div>
//           </div>
//           <div className="row justify-content-center">
//             <div className="col-auto">
//               <button type="submit" className="btn btn-primary">
//                 Register
//               </button>
//             </div>
//           </div>
//           <div className="text-center mt-3">
//             {/* Link to the login  page */}
//             <Link to="/login">Already have an account? Login</Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Registration;

import React, { useState } from "react";

const Registration = () => {
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    setIsSuccessPopupOpen(true);
  };

  return (
    <div
      className="d-flex vh-100 justify-content-center align-items-center"
      style={{
        backgroundColor: "pink",
        position: "relative",
      }}
    >
      <div className="card p-4">
        <form onSubmit={handleSubmit}>
          <h2 className="text-left mb-4">Registeration form</h2>
          <hr className="mb-2" />
          <div className="row mb-3">
            <div className="col-6">
              <label htmlFor="name" className="form-label">
                Name<span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="col-6">
              <label htmlFor="fatherName" className="form-label">
                Father's Name<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="fatherName"
                required
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-6">
              <label htmlFor="dob" className="form-label">
                Date of Birth<span className="text-danger">*</span>
              </label>
              {/* Use a calendar widget here */}
              <input type="date" className="form-control" id="dob" required />
            </div>
            <div className="col-6">
              <label htmlFor="bloodGroup" className="form-label">
                Blood Group<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="bloodGroup"
                required
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
      {isSuccessPopupOpen && (
        <div
          className="popup"
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            background: "white",
            padding: "20px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <p>Record added successfully!</p>
          <button
            className="btn btn-primary"
            onClick={() => setIsSuccessPopupOpen(false)}
          >
            OK
          </button>
        </div>
      )}
    </div>
  );
};

export default Registration;
