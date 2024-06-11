import { Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import VerifyOTP from "./pages/auth/verifyOTP";

import NameHidingForm from "./pages/auth/NameHidingForm";
import Request from "./pages/auth/Request";

import RegisteredUsers from "./pages/Admin/RegisteredUsers";
import Inventory from "./pages/Admin/Inventory";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// import ProtectedRoute from "./components/routes/ProtectedRoute";

// react-router-dom is used for routing

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/LandingPage" element={<LandingPage />} />
        
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        
        <Route path="/RegisteredUsers" element={<RegisteredUsers />} />
        <Route path="/Inventory" element={<Inventory />} />
        {/* <Route
          path="/NameHidingForm"
          element={
            <ProtectedRoute>
            <NameHidingForm />
            </ProtectedRoute>
            }
            /> */}
        <Route path="/NameHidingForm" element={<NameHidingForm />} />
        <Route path="/Request" element={<Request />} />
      </Routes>
    </>
  );
}
// basic routing is done here
// empty and fragment tags are used to wrap the routes

export default App;
