import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminStore from "../../store/AdminStore";
import ValidationHelper from "../../utility/ValidationHelper";
import toast from "react-hot-toast";
import AdminSubmitButton from "../../components/admin/AdminSubmitButton";

function AdminLogin() {
   let navigate = useNavigate();
    const { AdminFormData, AdminFormChange, LoginRequest } = AdminStore();

    const onFormSubmit = async () => {
    if (!ValidationHelper.IsEmail(AdminFormData.email)) {
      toast.error("Valid email address required!");
    } else {
      let res = await LoginRequest(AdminFormData);
      if (res) {
        toast.success("Logged in Successfully");
        navigate("/admin/services");
      } else {
        toast.error("Something went wrong");
      }
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        
        {/* FORM */}
        <div className="w-full max-w-md">
          <div className="bg-white text-gray-500 w-full p-6 sm:p-8 text-left text-sm rounded-xl shadow-xl border border-gray-100">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-800">
              Admin Sign In
            </h2>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                Email
              </label>
              <div className="flex items-center border bg-indigo-50/50 border-gray-200 hover:border-indigo-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 rounded-lg gap-3 px-3 transition-all duration-200">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-400 flex-shrink-0"
                >
                  <path
                    d="m2.5 4.375 3.875 2.906c.667.5 1.583.5 2.25 0L12.5 4.375"
                    stroke="currentColor"
                    strokeOpacity=".7"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.875 3.125h-8.75c-.69 0-1.25.56-1.25 1.25v6.25c0 .69.56 1.25 1.25 1.25h8.75c.69 0 1.25-.56 1.25-1.25v-6.25c0-.69-.56-1.25-1.25-1.25Z"
                    stroke="currentColor"
                    strokeOpacity=".7"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
                <input
                value={AdminFormData.email}
                onChange={(e) => AdminFormChange("email", e.target.value)}
                  className="w-full outline-none bg-transparent py-3 text-gray-800 placeholder-gray-400"
                  type="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label className="block text-xs font-medium text-gray-700 mb-2 uppercase tracking-wide">
                Password
              </label>
              <div className="flex items-center border bg-indigo-50/50 border-gray-200 hover:border-indigo-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-100 rounded-lg gap-3 px-3 transition-all duration-200">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-400 flex-shrink-0"
                >
                  <path
                    d="M11.25 6.875V5a3.75 3.75 0 1 0-7.5 0v1.875"
                    stroke="currentColor"
                    strokeOpacity=".7"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="2.5"
                    y="6.25"
                    width="10"
                    height="6.25"
                    rx="1.25"
                    stroke="currentColor"
                    strokeOpacity=".7"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="7.5"
                    cy="9.375"
                    r=".625"
                    fill="currentColor"
                    fillOpacity=".7"
                  />
                </svg>
                <input
                value={AdminFormData.password}
                onChange={(e) => AdminFormChange("password", e.target.value)}
                  className="w-full outline-none bg-transparent py-3 text-gray-800 placeholder-gray-400"
                  type="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

             <AdminSubmitButton
              onClick={onFormSubmit}
              text="Next"
              className="w-full mb-4 bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 transition-all duration-200 active:scale-[0.98] py-3 rounded-lg text-white font-medium shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-100"
            />
            
             <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link to={"/admin-signin"} className="text-indigo-600 hover:text-indigo-800 font-medium underline transition-colors duration-200">
                Sign Up
              </Link>
            </p>
          </div>
        </div>

        {/* ILLUSTRATION */}
        <div className="w-full max-w-md lg:max-w-lg">
          <div className=" rounded-2xl p-6 sm:p-8 ">
            <img 
              src="/icon/login.svg" 
              alt="Admin signup illustration" 
              className="w-full h-auto "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;