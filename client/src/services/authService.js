import store from "../redux/store";
import { userLogin, userRegister } from "../redux/features/auth/authActions";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();

  try {
    if (!email || !password) {
      return alert("Please Privde All Feilds");
    }
    // console.log("login", e, email, password, role);
    store.dispatch(userLogin({ role, email, password }));
  } catch (err) {
    console.log(err);
  }
};

export const handleRegister = (
  e,
  name,
  fname,
  dob,
  bloodgroup,
  email,
  password,
  // role,
  nukh,
  contact,
  akaah,
  currentcity,
  nativetown
  // organisationName,
  // hospitalName,
) => {
  e.preventDefault();
  try {
    store.dispatch(
      userRegister({
        name,
        fname,
        dob,
        bloodgroup,
        email,
        password,
        // role,
        nukh,
        contact,
        akaah,
        currentcity,
        nativetown
        // organisationName,
        // hospitalName,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
