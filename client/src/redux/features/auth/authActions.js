import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
// import { toast } from "react-toastify";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("/auth/login", { role, email, password });
      //store token
      if (data.success) {
        alert(data.message);
        localStorage.setItem("token", data.token);
        localStorage.setItem("user_id", data.user._id);
        window.location.replace("/namehidingform");
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//register
export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
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
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post("/auth/register", {
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
      });
      if (data?.success) {
        alert("User Registerd Successfully");
        window.location.replace("/login");
        // toast.success("User Registerd Successfully");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// namehide

export const userUpdate = createAsyncThunk(
  "auth/namehidingform",
  async (
    {
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
      hideName
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post(`/auth/namehidingform/${userId}`, {
        name,
        fname,
        password,
        email,
        bloodgroup,
        donatedate,
        nukh,
        contact,
        akaah,
        hideName
      });
      if (data?.success) {
        alert("Form Saved Successfully");
        window.location.replace("/namehidingform");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);



//// profile page : 
export const getUser = createAsyncThunk(
  "auth/getUser",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await API.get("/auth/get-user");
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await API.put("/auth/update-user", userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
