/*
import React, { useState } from "react";

const HidingForm = () => {
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    setIsSuccessPopupOpen(true);
  };

  return (
    <div
      className="d-flex vh-100 justify-content-center align-items-center"
      style={{
        backgroundColor: 'blue', // Set the solid blue background color
      }}
    >
      <div className="card p-4">
        <form onSubmit={handleSubmit}>
          <h2 className="text-left mb-4">Name Hiding Form</h2>
          <hr className="mb-2" />
          <div className="scrollable-form">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name<span className="text-danger">*</span>
              </label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" required/>
            </div>
            <div className="mb-3">
              <label htmlFor="fatherName" className="form-label">
                F/Name<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="fatherName"
                placeholder="Enter your father's name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bloodGroup" className="form-label">
                Blood Group<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="bloodGroup"
                placeholder="Enter your blood group"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nukh" className="form-label">
                Nukh<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="nukh"
                placeholder="Enter your nukh"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="akkah" className="form-label">
                Akkah<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                id="akkah"
                placeholder="Enter your akkah"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contact" className="form-label">
                Contact<span className="text-danger">*</span>
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
                Email<span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {isSuccessPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <p>Record added successfully!</p>
            <button
              className="btn btn-primary"
              onClick={() => setIsSuccessPopupOpen(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HidingForm;
*/

import React, { useState } from "react";

const App = () => {
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    setIsSuccessPopupOpen(true);
  };

  return (
    <div
      className="d-flex vh-100 justify-content-center align-items-center scrollboy"
      style={{
      //   backgroundColor: "pink",
        position: "relative",
      }}
    >
      <div
        className="card p-4"
        style={{
          maxWidth: "450px",
          maxHeight: "300px",
          width: "100%",
          overflow: "auto",
        }}
      >
        <form onSubmit={handleSubmit}>
          <h2 className="text-left mb-4">Name Hiding Form</h2>
          <hr className="mb-2" />
          <div className="scrollable-form">
            <div className="mb-3 d-flex align-items-center">
              <label htmlFor="name" className="form-label mr-2" style={{ width: "80px" }}>
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
            <div className="mb-3 d-flex align-items-center">
              <label htmlFor="name" className="form-label mr-2" style={{ width: "180px" }}>
                <span className="text-danger">*</span>Father's Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your father's name"
                required
              />
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label htmlFor="name" className="form-label mr-2" style={{ width: "155px" }}>
                <span className="text-danger">*</span>Blood Group:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your blood group"
                required
              />
            </div>

            <div className="mb-3 d-flex align-items-center">
              <label htmlFor="nukh" className="form-label mr-2" style={{ width: "80px" }}>
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
            <div className="mb-3 d-flex align-items-center">
              <label htmlFor="akkah" className="form-label mr-2" style={{ width: "80px" }}>
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
            <div className="mb-3 d-flex align-items-center">
              <label htmlFor="contact" className="form-label mr-2" style={{ width: "85px" }}>
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
            <div className="mb-3 d-flex align-items-center">
              <label htmlFor="email" className="form-label mr-2" style={{ width: "80px" }}>
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
          </div>
          <div className="row justify-content-center">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* {isSuccessPopupOpen && (
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
      )} */}
    </div>
  );
};

export default App;
