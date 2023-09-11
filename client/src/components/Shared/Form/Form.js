import React, { useState } from "react";
import InputType from "./InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authService";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css"; // Import the default styles

const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donar");
  const [name, setName] = useState("");
  const [fname, setfName] = useState("");
  const [dob, setDob] = useState("");
  const [bloodgroup, setBloodGroup] = useState("");

  // const [organisationName, setOrganisationName] = useState("");
  // const [hospitalName, setHospitalName] = useState("");
  const [nukh, setNukh] = useState("");
  const [akaah, setAkaah] = useState("");
  const [contact, setContact] = useState("");
  const [currentcity, setCity] = useState("");
  const [nativetown, setTown] = useState("");

  // Inline style for white text color
  const whiteTextStyle = { color: "white" };
  return (
    <div>
      <form
        onSubmit={(e) => {
          if (formType === "login")
            return handleLogin(e, email, password, role);
          else if (formType === "register")
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
              currentcity,
              nativetown
              // organisationName,
              // hospitalName,
            );
        }}
      >
        <h1 className="text-center">{formTitle}</h1>
        <hr
        // style={{ backgroundColor: "white", height: "2px", border: "none" }}
        />
        <div className="d-flex mb-3">
          {/* <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              name="role"
              id="donarRadio"
              value={"donar"}
              onChange={(e) => setRole(e.target.value)}
              defaultChecked
            />
            <label
              htmlFor="adminRadio"
              className="form-check-label"
              // style={whiteTextStyle}
            >
              Donar
            </label>
          </div> */}
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
              // style={whiteTextStyle}
            >
              Admin
            </label>
          </div>
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
        {/* switch statement */}
        {(() => {
          //eslint-disable-next-line
          switch (true) {
            // case formType === "login": {
            //   return (
            //     <>
            //       <div className="d-flex align-items-center">
            //         <label
            //           htmlFor="forEmail"
            //           className="form-label mr-2"
            //           style={{ ...whiteTextStyle, width: "80px" }}
            //         >
            //           Email:
            //         </label>
            //         <InputType
            //           labelText={""}
            //           labelFor={"forEmail"}
            //           inputType={"email"}
            //           name={"email"}
            //           value={email}
            //           onChange={(e) => setEmail(e.target.value)}
            //         />
            //       </div>
            //       <div className="d-flex align-items-center mb-3">
            //         <label
            //           htmlFor="forPassword"
            //           className="form-label mr-2"
            //           style={{ ...whiteTextStyle, width: "80px" }}
            //         >
            //           Password:
            //         </label>
            //         <InputType
            //           labelText={""}
            //           labelFor={"forPassword"}
            //           inputType={"password"}
            //           name={"password"}
            //           value={password}
            //           onChange={(e) => setPassword(e.target.value)}
            //         />
            //       </div>
            //     </>
            //   );
            // }
            case formType === "login": {
              return (
                <>
                  <label for="">Email</label>
                  <InputType
                    labelText={""}
                    labelFor={"forEmail"}
                    inputType={"email"}
                    name={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label for="">Email</label>
                  <InputType
                    labelText={""}
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
                  {(role === "admin" || role === "donar") && (
                    <InputType
                      labelText={"Name"}
                      labelFor={"forName"}
                      inputType={"text"}
                      name={"name"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
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
                    labelText={"Password"}
                    labelFor={"forPassword"}
                    inputType={"password"}
                    name={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputType
                    labelText={"Father's Name"}
                    labelFor={"forfname"}
                    inputType={"text"}
                    name={"fname"}
                    value={fname}
                    onChange={(e) => setfName(e.target.value)}
                  />
                  <InputType
                    labelText={"Date of Birth"}
                    labelFor={"fordob"}
                    inputType={"date"}
                    name={"dob"}
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                  <InputType
                    labelText={"Blood Group"}
                    labelFor={"forBloodGroup"}
                    inputType={"text"}
                    name={"bloodgroup"}
                    value={bloodgroup}
                    onChange={(e) => setBloodGroup(e.target.value)}
                  />
                  <InputType
                    labelText={"Native Town"}
                    labelFor={"fortown"}
                    inputType={"text"}
                    name={"nativetown"}
                    value={nativetown}
                    onChange={(e) => setTown(e.target.value)}
                  />
                  <InputType
                    labelText={"Current City"}
                    labelFor={"forCity"}
                    inputType={"text"}
                    name={"currentcity"}
                    value={currentcity}
                    onChange={(e) => setCity(e.target.value)}
                  />
                  <InputType
                    labelText={"Nukh"}
                    labelFor={"forNukh"}
                    inputType={"text"}
                    name={"nukh"}
                    value={nukh}
                    onChange={(e) => setNukh(e.target.value)}
                  />
                  <InputType
                    labelText={"Akaah"}
                    labelFor={"forAkaah"}
                    inputType={"text"}
                    name={"akaah"}
                    value={akaah}
                    onChange={(e) => setAkaah(e.target.value)}
                  />
                  <InputType
                    labelText={"Contact"}
                    labelFor={"forContact"}
                    inputType={"text"}
                    name={"contact"}
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                  <InputType
                    labelText={"Email"}
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

        <div className="d-flex flex-row justify-content-between">
          {formType === "login" ? (
            <p style={whiteTextStyle}>
              Not registered yet ? Register
              <Link to="/register"> Here !</Link>
            </p>
          ) : (
            <p>
              ALready a user? Please
              <Link to="/login"> Login !</Link>
            </p>
          )}
        </div>
        <div className="row justify-content-center">
          <button className="btn btn-primary" type="submit">
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
