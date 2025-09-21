import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import AdminLogin from "./pages/Admin_Pages/AdminLogin";
import AdminSignIn from "./pages/Admin_Pages/AdminSignIn";
import AdminOTP from "./pages/Admin_Pages/AdminOTP";
import UserHome from "./pages/UserHome";
import UserSignup from "./pages/User_Pages/UserSignup";
import UserLogin from "./pages/User_Pages/UserLogin";
import NIDReg from "./pages/User_Pages/NIDReg";
import SubmitVote from "./pages/User_Pages/SubmitVote";
import AdminParties from "./pages/Admin_Pages/AdminServices";
import GetParties from "./pages/Admin_Pages/GetParties";
import AdminServices from "./pages/Admin_Pages/AdminServices";
import AddParties from "./pages/Admin_Pages/AddParties";
import AddNID from "./pages/Admin_Pages/AddNID";
import GetNID from "./pages/Admin_Pages/GetNID";

function App() {
  return (
    <>
      <Toaster />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-signin" element={<AdminSignIn />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/otp" element={<AdminOTP />} />
        <Route path="/user-home" element={<UserHome />} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/user/signin" element={<UserLogin />} />
        <Route path="/user/nid-reg" element={<NIDReg />} />
        <Route path="/user/submit-vote" element={<SubmitVote />} />
        <Route path="/admin/services" element={<AdminServices />} />
        <Route path="/admin/get-parties" element={<GetParties />} />
        <Route path="/admin/add-parties" element={<AddParties />} />
        <Route path="/admin/add-nid" element={<AddNID />} />
        <Route path="/admin/get-nid" element={<GetNID />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
