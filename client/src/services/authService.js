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
  role,
  contact,
  nukh,
  akaah,
  currentcity,
  nativetown,
  secretkey,
  organisationName,
  website,
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
        role,
        contact,
        nukh,
        akaah,
        currentcity,
        nativetown,
        secretkey,
        organisationName,
        website,
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
  password,
  email,
  bloodgroup,
  donatedate,
  nukh,
  contact,
  akaah,
  address,
  hideName
) => {
  e.preventDefault();
  const userId =  localStorage.getItem("user_id")
  try {
    store.dispatch(
      userUpdate({
        userId,
        name,
        fname,
        password,
        email,
        bloodgroup,
        donatedate,
        nukh,
        contact,
        akaah,
        address,
        hideName
      })
    );
  } catch (error) {
    console.log(error);
  }
};
