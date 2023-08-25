// import React from "react";

// const Login = () => {
//   return (
//     <>
//       <div className="row">
//       <div className="flex h-screen items-center justify-center" style={{ backgroundColor: 'blue' }}>
//           {/* <img src="./assets/images/banner1.jpg" alt="LoginImage" /> */}
//         </div>
//         <div className="flex flex-col items-center justify-center">
//           <form>
//             <div className="mb-3">
//               <label htmlFor="exampleInputEmail1" className="form-label">
//                 Email address
//               </label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="exampleInputEmail1"
//                 aria-describedby="emailHelp"
//               />
//               <div id="emailHelp" className="form-text">
//                 We'll never share your email with anyone else.
//               </div>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="exampleInputPassword1" className="form-label">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="exampleInputPassword1"
//               />
//             </div>
//             <div className="mb-3 form-check">
//               <input
//                 type="checkbox"
//                 className="form-check-input"
//                 id="exampleCheck1"
//               />
//               <label className="form-check-label" htmlFor="exampleCheck1">
//                 Check me out
//               </label>
//             </div>
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

import React from "react";

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
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="name" className="form-label">
                Name <span className="text-danger">*</span>:
              </label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="col">
              <label htmlFor="fatherName" className="form-label">
                Father's Name <span className="text-danger">*</span>:
              </label>
              <input type="text" className="form-control" id="fatherName" required />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="nukh" className="form-label">
                Nukh <span className="text-danger">*</span>:
              </label>
              <input type="text" className="form-control" id="nukh" required />
            </div>
            <div className="col">
              <label htmlFor="akkah" className="form-label">
                Akkah <span className="text-danger">*</span>:
              </label>
              <input type="text" className="form-control" id="akkah" required />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="contact" className="form-label">
                Contact <span className="text-danger">*</span>:
              </label>
              <input type="text" className="form-control" id="contact" required />
            </div>
            <div className="col">
              <label htmlFor="bloodGroup" className="form-label">
                Blood Group <span className="text-danger">*</span>:
              </label>
              <input type="text" className="form-control" id="bloodGroup" required />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="col">
              <label htmlFor="password" className="form-label">
                Password <span className="text-danger">*</span>:
              </label>
              <input type="password" className="form-control" id="password" required />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
