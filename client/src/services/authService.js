import store from "../redux/store";
import { userLogin, userRegister } from "../redux/features/auth/authActions";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();

  try {
    if (!role || !email || !password) {
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
  email,
  password,
  role,
  contact,
  organisationName,
  hospitalName,
  nukh,
  bloodgroup,
  akaah
) => {
  e.preventDefault();
  try {
    store.dispatch(
      userRegister({
        name,
        email,
        password,
        role,
        contact,
        organisationName,
        hospitalName,
        nukh,
        bloodgroup,
        akaah,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
