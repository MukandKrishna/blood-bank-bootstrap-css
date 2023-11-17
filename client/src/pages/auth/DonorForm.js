// import "./style.css";
// import React, { useEffect, useState } from "react";
// import { handleUpdate } from "../../services/authService";
import "./donor.css";

export const DonorForm = () => {
  return (
    <div className="edit-profile-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="edit-profile-section">
              <div className="home">
                <img
                  className="home-icon"
                  alt="Home icon"
                  src="home-icon.png"
                />
                <div className="text-wrapper-3">Home</div>
              </div>
              <div className="donor-icon">
                <img
                  className="donar-search"
                  alt="Donar search"
                  src="donar-search.png"
                />
                <div className="text-wrapper">Find Donor</div>
              </div>
              <div className="request">
                <img className="vector" alt="Vector" />
                <div className="div">Request</div>
              </div>
              <div className="donor-icon-2">
                <img
                  className="donar-search"
                  alt="Donar search"
                  src="image.png"
                />
                <div className="text-wrapper">Find Donor</div>
              </div>
              <div className="profile">
                <img className="img" alt="Vector" />
                <div className="text-wrapper-2">Profile</div>
              </div>
            </div>
            <div className="form-section">
              <div className="overlap-2">
                <div className="overlap-3">
                  <div className="name-hide">
                    <div className="overlap-group-2">
                      <div className="ellipse" />
                      <div className="ellipse-2" />
                      <p className="name-hide-request">
                        Name Hide Request: Yes&nbsp;&nbsp;&nbsp;&nbsp; No
                      </p>
                    </div>
                  </div>
                  <button className="submit-button">
                    <div className="overlap-4">
                      <div className="text-wrapper-4">Submit</div>
                      <img
                        className="check-circle"
                        alt="Check circle"
                      />
                    </div>
                  </button>
                </div>
                <div className="email">
                  <div className="overlap-5">
                    <div className="number" />
                    <div className="text-wrapper-5">
                      Enter your email address
                    </div>
                  </div>
                  <div className="text-wrapper-6">Email</div>
                </div>
                <div className="contact">
                  <div className="overlap-6">
                    <div className="number" />
                    <div className="text-wrapper-5">
                      Enter your phone number
                    </div>
                  </div>
                  <div className="text-wrapper-7">Contact</div>
                </div>
                <div className="last-donation-date">
                  <div className="div-2">
                    <div className="text-wrapper-8">Donation Date</div>
                  </div>
                  <div className="text-wrapper-9">Last Donation Date</div>
                </div>
                <div className="akaah">
                  <div className="overlap-7">
                    <div className="div-2" />
                    <div className="text-wrapper-10">Enter your Akaah</div>
                    <div className="text-wrapper-11">Akaah</div>
                  </div>
                </div>
                <div className="nukh">
                  <div className="div-2">
                    <div className="text-wrapper-12">Enter your Nukh</div>
                  </div>
                  <div className="text-wrapper-13">Nukh</div>
                </div>
                <div className="blood-group">
                  <div className="div-2">
                    <div className="text-wrapper-14">
                      Enter your blood group
                    </div>
                  </div>
                  <div className="text-wrapper-13">Select Blood Group</div>
                </div>
                <div className="password">
                  <div className="overlap-8">
                    <div className="div-2" />
                    <div className="text-wrapper-15">
                      Want to update password?
                    </div>
                    <div className="text-wrapper-16">Password</div>
                  </div>
                </div>
                <div className="phone-number">
                  <div className="overlap-8">
                    <div className="div-2" />
                    <div className="text-wrapper-17">
                      Enter your phone number
                    </div>
                    <div className="text-wrapper-16">Father Name</div>
                  </div>
                </div>
                <div className="name">
                  <div className="div-wrapper">
                    <div className="text-wrapper-18">Enter your full name</div>
                  </div>
                  <p className="p">
                    <span className="span">Name</span>
                    <span className="text-wrapper-19">&nbsp;</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="edit-profile-section-2">
            <div className="overlap-group-3">
              <div className="text-wrapper-20">Hello Mr, Mukand</div>
              <img className="vector-2" alt="Vector" src="vector.png" />
            </div>
            <div className="overlap-9">
              <img className="line" alt="Line" src="line-1.png" />
              <div className="text-wrapper-21">Profile</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorForm;
