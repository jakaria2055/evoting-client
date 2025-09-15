import React from "react";
import UserStore from "../../store/UserStote";
import { useNavigate } from "react-router-dom";
import ValidationHelper from "../../utility/ValidationHelper";
import toast from "react-hot-toast";

function UserSignup() {
  let navigate = useNavigate();
  const { UserFormData, UserFormChange, UserCreateRequest } = UserStore();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (!ValidationHelper.IsEmail(UserFormData.email)) {
      toast.error("Valid Email Required!");
    } else {
      let res = await UserCreateRequest(UserFormData);
      if (res) {
        UserStore.getState().LoginFormChange("nid", UserFormData.nid);
        navigate("/user/signin");
        toast.success("Registration Completed.");
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className="flex flex-col items-center text-sm text-slate-800"
    >
      <h1 className="text-4xl font-bold py-4 text-center">Sign UP</h1>
      <p className="max-md:text-sm text-gray-500 pb-5 text-center">
        if there any problem please mail to{" "}
        <a href="#" className="text-indigo-600 hover:underline">
          hello@prebuiltui.com
        </a>
      </p>

      <div className="max-w-96 w-full px-4 mb-5">
        <label htmlFor="name" className="font-medium">
          Registered ID
        </label>
        <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
          <img src="/icon/digit.svg" alt="" />
          <input
            value={UserFormData.nid}
            onChange={(e) => UserFormChange("nid", e.target.value)}
            type="text"
            className="h-full px-2 w-full outline-none bg-transparent"
            placeholder="Enter your registered ID"
            required
          />
        </div>

        <label htmlFor="name" className="font-medium">
          Full Name
        </label>
        <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.311 16.406a9.64 9.64 0 0 0-4.748-4.158 5.938 5.938 0 1 0-7.125 0 9.64 9.64 0 0 0-4.749 4.158.937.937 0 1 0 1.623.938c1.416-2.447 3.916-3.906 6.688-3.906 2.773 0 5.273 1.46 6.689 3.906a.938.938 0 0 0 1.622-.938M5.938 7.5a4.063 4.063 0 1 1 8.125 0 4.063 4.063 0 0 1-8.125 0"
              fill="#475569"
            />
          </svg>
          <input
            value={UserFormData.name}
            onChange={(e) => UserFormChange("name", e.target.value)}
            type="text"
            className="h-full px-2 w-full outline-none bg-transparent"
            placeholder="Enter your full name"
            required
          />
        </div>

        <label htmlFor="email-address" className="font-medium mt-4">
          Email Address
        </label>
        <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 3.438h-15a.937.937 0 0 0-.937.937V15a1.563 1.563 0 0 0 1.562 1.563h13.75A1.563 1.563 0 0 0 18.438 15V4.375a.94.94 0 0 0-.938-.937m-2.41 1.874L10 9.979 4.91 5.313zM3.438 14.688v-8.18l5.928 5.434a.937.937 0 0 0 1.268 0l5.929-5.435v8.182z"
              fill="#475569"
            />
          </svg>
          <input
            value={UserFormData.email}
            onChange={(e) => UserFormChange("email", e.target.value)}
            type="email"
            className="h-full px-2 w-full outline-none bg-transparent"
            placeholder="Enter your email address"
            required
          />
        </div>

        <label htmlFor="email-address" className="font-medium mt-4">
          Password
        </label>
        <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
          <img src="/icon/password.svg" alt="" />
          <input
            value={UserFormData.password}
            onChange={(e) => UserFormChange("password", e.target.value)}
            type="password"
            className="h-full px-2 w-full outline-none bg-transparent"
            placeholder="Password"
            required
          />
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-1 mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 w-full rounded-full transition"
        >
          Submit Form
          <svg
            className="mt-0.5"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33"
              fill="#fff"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default UserSignup;
