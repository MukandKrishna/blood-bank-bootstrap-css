// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getUser, updateUser } from "../../redux/features/auth/authActions"; // Adjust the import path accordingly

// const App = () => {
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.auth.user); // Adjust the state shape if needed
//   const [userData, setUserData] = useState({ ...user });
//   const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

//   useEffect(() => {
//     dispatch(getUser());
//   }, [dispatch]);

//   useEffect(() => {
//     setUserData({ ...user });
//   }, [user]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(updateUser(userData));
//   };

//   return (
//     <div className="d-flex vh-100 justify-content-center align-items-center">
//       <div className="card p-4" style={{ width: "100vw" }}>
//         <h2 className="text-left mb-4">Name Hiding Form</h2>
//         <hr className="mb-2" />
//         <form onSubmit={handleSubmit}>
//           <div className="d-flex justify-content-evenly">
//             <div className="column">
//               {/* ... other fields ... */}
//               <div className="mb-3" style={{ width: "300px" }}>
//                 <label htmlFor="bloodgroup" className="form-label">
//                   <span className="text-danger"></span>Blood Group:
//                 </label>
//                 <select
//                   className="form-control"
//                   id="bloodgroup"
//                   name="bloodgroup"
//                   value={userData.bloodgroup || ""}
//                   onChange={handleChange}
//                   required
//                 >
//                   <option value="">Select Blood Group</option>
//                   {bloodGroups.map((group) => (
//                     <option key={group} value={group}>
//                       {group}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               {/* ... other fields ... */}
//             </div>
//             {/* ... Second Column ... */}
//           </div>
//           <button className="button" type="submit">
//             Save
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default App;

// import React from "react";
// // import { Link } from "react-router-dom";
// import { handleUpdate } from "../../services/authService";

// const App = () => {
//   const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleUpdate(
//       e,
//       e.target.name.value,
//       e.target.fname.value,
//       e.target.password.value,
//       e.target.email.value,
//       e.target.bloodgroup.value,
//       e.target.donatedate.value,
//       e.target.nukh.value,
//       e.target.contact.value,
//       e.target.akaah.value,
//       e.target.hideName.value
//     );
//   };
//   return (
//     <div className="d-flex vh-100 justify-content-center align-items-center">
//       <div className="card p-4" style={{ width: "100vw" }}>
//         <h2 className="text-left mb-4">Name Hiding Form</h2>
//         <hr className="mb-2" />

//         <form onSubmit={handleSubmit}>
//           <div className="d-flex justify-content-evenly">
//             {/* First Column */}
//             <div className="column">
//               <div className="mb-3" style={{ width: "300px" }}>
//                 <label htmlFor="name" className="form-label">
//                   <span className="text-danger"></span>Name:
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="name"
//                   placeholder="Enter your name"
//                   required
//                 />
//               </div>
//               <div className="mb-3" style={{ width: "300px" }}>
//                 <label htmlFor="fname" className="form-label">
//                   <span className="text-danger"></span>Father's Name:
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="fname"
//                   placeholder="Enter your father's name"
//                   required
//                 />
//               </div>
//               <div className="mb-3" style={{ width: "300px" }}>
//                 <label htmlFor="password" className="form-label">
//                   <span className="text-danger"></span>Password:
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   placeholder="Want to update password?"
//                   required
//                 />
//               </div>
//               <div className="mb-3" style={{ width: "300px" }}>
//                 <label htmlFor="bloodgroup" className="form-label">
//                   <span className="text-danger"></span>Blood Group:
//                 </label>
//                 <select
//                   className="form-control"
//                   id="bloodgroup"
//                   name="bloodgroup"
//                   required
//                 >
//                   <option value="">Select Blood Group</option>
//                   {bloodGroups.map((group) => (
//                     <option key={group} value={group}>
//                       {group}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="mb-3" style={{ width: "300px" }}>
//                 <label htmlFor="nukh" className="form-label">
//                   <span className="text-danger"></span>Nukh:
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="nukh"
//                   placeholder="Enter your nukh"
//                   required
//                 />
//               </div>
//               {/* </form> */}
//             </div>

//             {/* Second Column */}
//             <div className="column">
//               {/* <form onSubmit={handleSubmit}> */}
//               <div className="mb-3" style={{ width: "300px" }}>
//                 <label htmlFor="akkah" className="form-label">
//                   <span className="text-danger"></span>Akkah:
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="akaah"
//                   placeholder="Enter your akkah"
//                   required
//                 />
//               </div>
//               <div className="mb-3" style={{ width: "300px" }}>
//                 <label htmlFor="donateDate" className="form-label">
//                   <span className="text-danger"></span>Blood Donated Date:
//                 </label>
//                 <input
//                   type="date"
//                   className="form-control"
//                   id="donatedate"
//                   placeholder="Enter the donated date"
//                   required
//                 />
//               </div>
//               <div className="mb-3" style={{ width: "300px" }}>
//                 <label htmlFor="contact" className="form-label">
//                   <span className="text-danger"></span>Contact:
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="contact"
//                   placeholder="Enter your contact"
//                   required
//                 />
//               </div>
//               <div className="mb-3" style={{ width: "300px" }}>
//                 <label htmlFor="email" className="form-label">
//                   <span className="text-danger"></span>Email:
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   placeholder="Enter your email"
//                   required
//                 />
//               </div>

//               <div className="mb-3" style={{ width: "300px" }}>
//                 <div className="d-flex align-items-center mb-2">
//                   <label className="mr-3">Name hide request:</label>
//                   <input
//                     type="radio"
//                     id="hideYes"
//                     name="hideName"
//                     value="yes"
//                   />
//                   <label className="mr-2 ml-2" htmlFor="hideYes">
//                     Yes
//                   </label>
//                   <input type="radio" id="hideNo" name="hideName" value="no" />
//                   <label className="ml-2" htmlFor="hideNo">
//                     No
//                   </label>
//                 </div>
//                 <button className="button" type="submit">
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { handleUpdate } from "../../services/authService";
import styles from "./name.module.css";

const App = () => {
  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(
      e,
      e.target.name.value,
      e.target.fname.value,
      e.target.password.value,
      e.target.email.value,
      e.target.bloodgroup.value,
      e.target.donatedate.value,
      e.target.nukh.value,
      e.target.contact.value,
      e.target.akaah.value,
      e.target.hideName.value
    );
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.card}>
        <h2 className="text-left mb-4">Name Hiding Form</h2>
        <hr className="mb-2" />

        <form onSubmit={handleSubmit} className={styles.formMobile}>
          <div className="d-flex flex-wrap justify-content-evenly">
            {/* First Column */}
            <div className="column">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  <span className="text-danger">*</span>Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fname" className="form-label">
                  <span className="text-danger">*</span>Father's Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fname"
                  placeholder="Enter your father's name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  <span className="text-danger">*</span>Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Want to update password?"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="bloodgroup" className="form-label">
                  <span className="text-danger">*</span>Blood Group:
                </label>
                <select
                  className="form-control"
                  id="bloodgroup"
                  name="bloodgroup"
                  required
                >
                  <option value="">Select Blood Group</option>
                  {bloodGroups.map((group) => (
                    <option key={group} value={group}>
                      {group}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="nukh" className="form-label">
                  <span className="text-danger">*</span>Nukh:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nukh"
                  placeholder="Enter your nukh"
                  required
                />
              </div>
            </div>

            {/* Second Column */}
            <div className="column">
              <div className="mb-3">
                <label htmlFor="akkah" className="form-label">
                  <span className="text-danger">*</span>Akkah:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="akaah"
                  placeholder="Enter your akkah"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="donatedate" className="form-label">
                  <span className="text-danger">*</span>Blood Donated Date:
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="donatedate"
                  placeholder="Enter the donated date"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contact" className="form-label">
                  <span className="text-danger">*</span>Contact:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contact"
                  placeholder="Enter your contact"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  <span className="text-danger">*</span>Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <div className="d-flex align-items-center mb-2">
                  <span className="mr-3">Name hide request:</span>
                  <input
                    type="radio"
                    id="hideYes"
                    name="hideName"
                    value="yes"
                  />
                  <label className="mr-2 ml-2" htmlFor="hideYes">
                    Yes
                  </label>
                  <input type="radio" id="hideNo" name="hideName" value="no" />
                  <label className="ml-2" htmlFor="hideNo">
                    No
                  </label>
                </div>
                <button className={styles.button} type="submit">
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
