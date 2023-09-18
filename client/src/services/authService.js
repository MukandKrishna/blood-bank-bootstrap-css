import store from "../redux/store";
import {
  userLogin,
  userRegister,
  userUpdate,
} from "../redux/features/auth/authActions";

export const handleLogin = (e, email, password) => {
  e.preventDefault();

  try {
    if (!email || !password) {
      return alert("Please Provide All Fields");
    }
    // console.log("login", e, email, password, role);
    store.dispatch(userLogin({ email, password }));
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
        nativetown,
        // organisationName,
        // hospitalName,
      })
    );
  } catch (error) {
    console.log(error);
  }
};

// namehide / or update user page
export const handleUpdate = (
  e,
  name,
  fname,
  email,
  bloodgroup,
  donatedate,
  nukh,
  contact,
  akaah
) => {
  e.preventDefault();
  try {
    store.dispatch(
      userUpdate({
        name,
        fname,
        email,
        bloodgroup,
        donatedate,
        nukh,
        contact,
        akaah,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
