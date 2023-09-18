import React, { useState } from "react";

const App = () => {
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    setIsSuccessPopupOpen(true);
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="card p-4" style={{ width: "100vw" }}>
        <h2 className="text-left mb-4">Name Hiding Form</h2>
        <hr className="mb-2" />

        <div className="d-flex justify-content-evenly">
          {/* First Column */}
          <div className="column">
            <form onSubmit={handleSubmit}>
              <div className="mb-3" style={{ width: "300px" }}>
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
              <div className="mb-3" style={{ width: "300px" }}>
                <label htmlFor="fatherName" className="form-label">
                  <span className="text-danger">*</span>Father's Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fatherName"
                  placeholder="Enter your father's name"
                  required
                />
              </div>
              <div className="mb-3" style={{ width: "300px" }}>
                <label htmlFor="bloodGroup" className="form-label">
                  <span className="text-danger">*</span>Blood Group:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bloodGroup"
                  placeholder="Enter your blood group"
                  required
                />
              </div>
              <div className="mb-3" style={{ width: "300px" }}>
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
            </form>
          </div>

          {/* Second Column */}
          <div className="column">
            <form onSubmit={handleSubmit}>
              <div className="mb-3" style={{ width: "300px" }}>
                <label htmlFor="akkah" className="form-label">
                  <span className="text-danger">*</span>Akkah:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="akkah"
                  placeholder="Enter your akkah"
                  required
                />
              </div>
              <div className="mb-3" style={{ width: "300px" }}>
                <label htmlFor="donatedDate" className="form-label">
                  <span className="text-danger">*</span>Donated Date:
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="donatedDate"
                  placeholder="Enter the donated date"
                  required
                />
              </div>
              <div className="mb-3" style={{ width: "300px" }}>
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
              <div className="mb-3" style={{ width: "300px" }}>
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
            </form>
          </div>
        </div>

        {/* <div className="row justify-content-center"> */}
        <button className="button" type="submit">
          Save
        </button>
        {/* </div> */}
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

export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form submission logic here
//     setIsSuccessPopupOpen(true);
//   };

//   return (
//     <div
//       className="d-flex vh-100 justify-content-center align-items-center scrollboy"
//       style={{
//       //   backgroundColor: "pink",
//         position: "relative",
//       }}
//     >
//       <div
//         className="card p-4"
//         style={{
//           maxWidth: "450px",
//           maxHeight: "300px",
//           width: "100%",
//           overflow: "auto",
//         }}
//       >
//         <form onSubmit={handleSubmit}>
//           <h2 className="text-left mb-4">Name Hiding Form</h2>
//           <hr className="mb-2" />
//           <div className="scrollable-form">
//             <div className="mb-3 d-flex align-items-center">
//               <label htmlFor="name" className="form-label mr-2" style={{ width: "80px" }}>
//                 <span className="text-danger">*</span>Name:
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>
//             <div className="mb-3 d-flex align-items-center">
// <label htmlFor="name" className="form-label mr-2" style={{ width: "180px" }}>
//   <span className="text-danger">*</span>Father's Name:
// </label>
// <input
//   type="text"
//   className="form-control"
//   id="name"
//   placeholder="Enter your father's name"
//   required
// />
//             </div>
//             <div className="mb-3 d-flex align-items-center">
//   <label htmlFor="name" className="form-label mr-2" style={{ width: "155px" }}>
//     <span className="text-danger">*</span>Blood Group:
//   </label>
//   <input
//     type="text"
//     className="form-control"
//     id="name"
//     placeholder="Enter your blood group"
//     required
//   />
// </div>

//             <div className="mb-3 d-flex align-items-center">
// <label htmlFor="nukh" className="form-label mr-2" style={{ width: "80px" }}>
//   <span className="text-danger">*</span>Nukh:
// </label>
// <input
//   type="text"
//   className="form-control"
//   id="nukh"
//   placeholder="Enter your nukh"
//   required
// />
//             </div>
//             <div className="mb-3 d-flex align-items-center">
//   <label htmlFor="akkah" className="form-label mr-2" style={{ width: "80px" }}>
//     <span className="text-danger">*</span>Akkah:
//   </label>
//   <input
//     type="text"
//     className="form-control"
//     id="akkah"
//     placeholder="Enter your akkah"
//     required
//   />
// </div>
//             <div className="mb-3 d-flex align-items-center">
// <label htmlFor="contact" className="form-label mr-2" style={{ width: "85px" }}>
//   <span className="text-danger">*</span>Contact:
// </label>
// <input
//   type="text"
//   className="form-control"
//   id="contact"
//   placeholder="Enter your contact"
//   required
// />
//             </div>
//             <div className="mb-3 d-flex align-items-center">
// <label htmlFor="email" className="form-label mr-2" style={{ width: "80px" }}>
//   <span className="text-danger">*</span>Email:
// </label>
// <input
//   type="email"
//   className="form-control"
//   id="email"
//   placeholder="Enter your email"
//   required
// />
//             </div>
//           </div>
//           <div className="row justify-content-center">
//             <button className="btn btn-primary" type="submit">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//       {isSuccessPopupOpen && (
//         <div
//           className="popup"
//           style={{
//             position: "absolute",
//             top: 0,
//             left: "50%",
//             transform: "translateX(-50%)",
//             background: "white",
//             padding: "20px",
//             boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <p>Record added successfully!</p>
//           <button
//             className="btn btn-primary"
//             onClick={() => setIsSuccessPopupOpen(false)}
//           >
//             OK
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import InputType from "../../components/Shared/Form/InputType";
// import "react-datepicker/dist/react-datepicker.css";
// import styles from "./namehide.module.css";

// const NameHidingForm = () => {
//   const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
//   const [name, setName] = useState("");
//   const [fatherName, setFatherName] = useState("");
//   const [bloodGroup, setBloodGroup] = useState("");
//   const [nukh, setNukh] = useState("");
//   const [akkah, setAkkah] = useState("");
//   const [contact, setContact] = useState("");
//   const [email, setEmail] = useState("");
//   const [donatedDate, setDonatedDate] = useState(null); // Initialize with null for DatePicker

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSuccessPopupOpen(true);
//   };

//   return (
//     <div
//       className={`${styles.dFlex} container-fluid vh-100 justify-content-center align-items-center`}
//       style={{
//         background: "white",
//         width: "100vw",
//         height: "100vh",
//         padding: -5,
//       }}
//     >
//       <div className="card p-4">
//         <form onSubmit={handleSubmit}>
//           <h2 className={`${styles.textLeft} mb-4`}>Name Hiding Form</h2>
//           <hr className="mb-2" />
//           <div className="row">
//             {/* Column 1 */}
//             <div className="col-md-6">
//               <label for="">
//                 <span className={`${styles.textDanger}`}>*</span>
//                 Name
//               </label>
//               <InputType
//                 labelText="Enter your Name"
//                 labelFor="name"
//                 inputType="text"
//                 name="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <label for="">
//                 <span className={`${styles.textDanger}`}>*</span>Father Name
//               </label>
//               <InputType
//                 labelText="Enter your Father's name"
//                 labelFor="fatherName"
//                 inputType="text"
//                 name="fatherName"
//                 value={fatherName}
//                 onChange={(e) => setFatherName(e.target.value)}
//               />
//               <label for="">
//                 <span className={`${styles.textDanger}`}>*</span>Blood Group
//               </label>
//               <InputType
//                 labelText="Enter your Blood Group"
//                 labelFor="bloodGroup"
//                 inputType="text"
//                 name="bloodGroup"
//                 value={bloodGroup}
//                 onChange={(e) => setBloodGroup(e.target.value)}
//               />
//               <label for="">
//                 <span className={`${styles.textDanger}`}>*</span>Nukh
//               </label>
//               <InputType
//                 labelText="Enter your Nukh"
//                 labelFor="nukh"
//                 inputType="text"
//                 name="nukh"
//                 value={nukh}
//                 onChange={(e) => setNukh(e.target.value)}
//               />
//             </div>

//             {/* Column 2 */}
//             <div className="col-md-6">
//               <label for="">
//                 <span className={`${styles.textDanger}`}>*</span>Akaah
//               </label>
//               <InputType
//                 labelText="Enter your Akkah"
//                 labelFor="akkah"
//                 inputType="text"
//                 name="akkah"
//                 value={akkah}
//                 onChange={(e) => setAkkah(e.target.value)}
//               />
//               <label for="">
//                 <span className={`${styles.textDanger}`}>*</span>Contact Number
//               </label>
//               <InputType
//                 labelText="Enter your Contact Number"
//                 labelFor="contact"
//                 inputType="text"
//                 name="contact"
//                 value={contact}
//                 placeHolder={""}
//                 onChange={(e) => setContact(e.target.value)}
//               />
//               <label for="">
//                 <span className={`${styles.textDanger}`}>*</span>Email
//               </label>
//               <InputType
//                 labelText="Enter your Email"
//                 labelFor="email"
//                 inputType="email"
//                 name="email"
//                 value={email}
//                 placeHolder={"Enter your Email"}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <label for="">
//                 <span className={`${styles.textDanger}`}>*</span>Blood Donated
//                 Date
//               </label>
//               <InputType
//                 labelText=""
//                 labelFor="donatedDate"
//                 inputType="date"
//                 name="donatedDate"
//                 value={donatedDate}
//                 onChange={(e) => setDonatedDate(e.target.value)}
//               />
//             </div>
//           </div>
//           {/* Submit Button */}
//           <div className="row justify-content-center">
//             <div className="col-auto">
//               <button type="submit" className="btn btn-primary">
//                 Save
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>

//       {isSuccessPopupOpen && (
//         <div
//           className="popup"
//           style={{
//             position: "absolute",
//             top: 0,
//             left: "50%",
//             transform: "translateX(-50%)",
//             background: "white",
//             padding: "20px",
//             boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <p>Record added successfully!</p>
//           <button
//             className="btn btn-primary"
//             onClick={() => setIsSuccessPopupOpen(false)}
//           >
//             OK
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NameHidingForm;
