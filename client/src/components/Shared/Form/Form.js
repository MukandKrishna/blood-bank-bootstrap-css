import React, { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authService";

const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [fname, setfName] = useState("");
  const [dob, setDob] = useState("");
  const [bloodgroup, setBloodGroup] = useState("");
  const [secretkey, setSecretKey] = useState("");

  // const [organisationName, setOrganisationName] = useState("");
  // const [hospitalName, setHospitalName] = useState("");
  const [nukh, setNukh] = useState("");
  const [akaah, setAkaah] = useState("");
  const [contact, setContact] = useState("");
  const [nativetown, setTown] = useState("");

  // Inline style for white text color
  const whiteTextStyle = { color: "black" };
  const bloodGroups = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"];
  return (
    <div>
      <form
        onSubmit={(e) => {
          // Check for empty fields
          e.preventDefault();
          let emptyFields = [];

          if (formType === "login") {
            // For login form, check only email and password
            emptyFields = [
              { label: "Email", value: email.trim() },
              { label: "Password", value: password.trim() },
            ];
          } else if (formType === "register") {
            // For register form, check all fields
            emptyFields = [
              { label: "Name", value: name.trim() },
              { label: "Father's Name", value: fname.trim() },
              { label: "Date of Birth", value: dob.trim() },
              { label: "Blood Group", value: bloodgroup.trim() },
              { label: "Email", value: email.trim() },
              { label: "Password", value: password.trim() },
              { label: "Role", value: role.trim() },
              { label: "Nukh", value: nukh.trim() },
              { label: "Contact", value: contact.trim() },
              { label: "Akaah", value: akaah.trim() },
              { label: "Native Town", value: nativetown.trim() },
              // { label: "Secret Key", value: secretkey.trim() },
            ];
          }

          // Filter empty fields
          emptyFields = emptyFields.filter((field) => field.value === "");

          if (emptyFields.length > 0) {
            // Show alert for empty fields
            const fieldsList = emptyFields
              .map((field) => field.label)
              .join(", ");
            alert(`Please fill in the following fields: ${fieldsList}`);
            return;
          }

          if (role === "admin" && secretkey !== "DMYF") {
            alert("Invalid Admin! Enter the right key.");
          } else {
            if (formType === "login") {
              e.preventDefault();
              return handleLogin(e, email, password);
            } else if (formType === "register") {
              e.preventDefault();
              return handleRegister(
                e,
                name,
                fname,
                dob,
                bloodgroup,
                email,
                password,
                role,
                nukh,
                contact,
                akaah,
                nativetown,
                secretkey
                // hospitalName,
                // organisationName
              );
            }
          }
        }}
      >
        <h1 className="text-left" style={whiteTextStyle}>
          {formTitle}
        </h1>
        <hr
          style={{ backgroundColor: "white", height: "2px", border: "none" }}
        />
        {formType === "register" && (
          <div className="d-flex mb-3">
            {
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  name="role"
                  id="userRadio"
                  value={"user"}
                  onChange={(e) => setRole(e.target.value)}
                  defaultChecked
                />
                <label
                  htmlFor="userRadio"
                  className="form-check-label"
                  style={whiteTextStyle}
                >
                  User
                </label>
              </div>
            }
            {
              <div className="form-check ms-2">
                <input
                  type="radio"
                  className="form-check-input"
                  name="role"
                  id="adminRadio"
                  value={"admin"}
                  onChange={(e) => setRole(e.target.value)}
                />
                <label
                  htmlFor="adminRadio"
                  className="form-check-label"
                  style={whiteTextStyle}
                >
                  Admin
                </label>
              </div>
            }
            {/* <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="hospitalRadio"
              value={"hospital"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="hospitalRadio" className="form-check-label">
              Hospital
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="organisationRadio"
              value={"organisation"}
              onChange={(e) => setRole(e.target.value)}
            />
            <label htmlFor="organisationRadio" className="form-check-label">
              Organisation
            </label>
          </div> */}
          </div>
        )}
        {/* switch statement */}
        {(() => {
          //eslint-disable-next-line
          switch (true) {
            case formType === "login": {
              return (
                <>
                  {/* <label for="" style={whiteTextStyle}>Email</label> */}
                  <InputType
                    labelText={""}
                    placeHolder={"Enter your Email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {/* <label for="" style={whiteTextStyle}>Password</label> */}
                  <InputType
                    labelText={""}
                    placeHolder={"Enter your Password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            }
            case formType === "register": {
              return (
                <>
                  {/* {(role === "admin") && ( */}
                  {role === "admin" && (
                    <InputType
                      labelText={""}
                      placeHolder={"Enter Secret Key"}
                      labelFor={"forkey"}
                      inputType={"text"}
                      name={"name"}
                      value={secretkey}
                      onChange={(e) => setSecretKey(e.target.value)}
                    />
                  )}

                  {/* {role === "organisation" && (
                    <InputType
                      labelText={"Organisation Name"}
                      labelFor={"fororganisationName"}
                      inputType={"text"}
                      name={"organisationName"}
                      value={organisationName}
                      onChange={(e) => setOrganisationName(e.target.value)}
                    />
                  )}
                  {role === "hospital" && (
                    <InputType
                      labelText={"Hospital Name"}
                      labelFor={"forHospitalName"}
                      inputType={"text"}
                      name={"hospitalName"}
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
                    /> }
                  )*/}
                  <InputType
                    labelText={""}
                    placeHolder={"Enter your Name"}
                    labelFor={"forName"}
                    inputType={"text"}
                    name={"name"}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <InputType
                    labelText={""}
                    placeHolder={"Enter your Father's Name"}
                    labelFor={"forfname"}
                    inputType={"text"}
                    name={"fname"}
                    value={fname}
                    onChange={(e) => setfName(e.target.value)}
                  />
                  <InputType
                    labelText={""}
                    placeHolder={"Enter your Password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputType
                    labelText={"Enter your Date of Birth:"}
                    placeHolder={"MM/DD/YYYY"}
                    labelFor={"fordob"}
                    inputType={"date"}
                    name={"dob"}
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                  <div className="inputtype">
                    <select
                      id="forBloodGroup"
                      name="bloodgroup"
                      value={bloodgroup}
                      onChange={(e) => setBloodGroup(e.target.value)}
                      className="form-control"
                    >
                      <option value="">Select Blood Group</option>
                      {bloodGroups.map((group) => (
                        <option key={group} value={group}>
                          {group}
                        </option>
                      ))}
                    </select>
                  </div>
                  <InputType
                    labelText={""}
                    placeHolder={"Enter your Native Town"}
                    labelFor={"fortown"}
                    inputType={"text"}
                    name={"nativetown"}
                    value={nativetown}
                    onChange={(e) => setTown(e.target.value)}
                  />
                  <InputType
                    labelText={""}
                    placeHolder={"Enter your Nukh"}
                    labelFor={"forNukh"}
                    inputType={"text"}
                    name={"nukh"}
                    value={nukh}
                    onChange={(e) => setNukh(e.target.value)}
                  />
                  <InputType
                    labelText={""}
                    placeHolder={"Enter your Akaah"}
                    labelFor={"forAkaah"}
                    inputType={"text"}
                    name={"akaah"}
                    value={akaah}
                    onChange={(e) => setAkaah(e.target.value)}
                  />
                  <InputType
                    labelText={""}
                    placeHolder={"Enter your Contact"}
                    labelFor={"forContact"}
                    inputType={"text"}
                    name={"contact"}
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                  <InputType
                    labelText={""}
                    placeHolder={"Enter your Email"}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </>
              );
            }
          }
        })()}

        <div
          className="d-flex flex-row justify-content-between align-items-center"
          style={{ gap: "5px" }}
        >
          {formType === "login" ? (
            <p style={{ ...whiteTextStyle, fontSize: "12px", margin: "0" }}>
              Not registered yet?
              <Link
                to="/register"
                style={{
                  color: "rgba(106, 11, 55, 0.7)",
                  textDecoration: "None",
                  fontSize: "12px",
                  marginLeft: "5px",
                }}
              >
                Register Here!
              </Link>
            </p>
          ) : (
            <p style={{ ...whiteTextStyle, fontSize: "12px", margin: "0" }}>
              Already a user? Please
              <Link
                to="/login"
                style={{
                  color: "rgba(106, 11, 55, 0.7)",
                  textDecoration: "none",
                  fontSize: "12px",
                  marginLeft: "5px",
                }}
              >
                Login!
              </Link>
            </p>
          )}
          <button type="submit">{submitBtn}</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
