import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import UserStore from "../../store/UserStote";

function Sidebar() {
  const navigate = useNavigate();
  const { UserLogoutRequest } = UserStore();

  const onLogout = async () => {
    await UserLogoutRequest();
    sessionStorage.clear();
    localStorage.clear();
    navigate("/user-home");
  };
  return (
    <div className="text-sm w-full p-3 bg-white border border-gray-500/30 text-gray-800/80 rounded-md font-medium">
      <ul className="flex flex-col gap-px">
        <NavLink
          title="Sign UP"
          to={"/user/signup"}
          className="flex items-center justify-between gap-3 cursor-pointer px-3 py-2 rounded hover:bg-gray-500/20 transition"
        >
          <p className="hidden sm:block">Sign UP</p>
          <img src="/icon/registration.svg" alt="" />
        </NavLink>
        <NavLink
          title="Sign IN"
          to={"/user/signin"}
          className="flex items-center justify-between gap-2 cursor-pointer px-3 py-2 rounded hover:bg-gray-500/20 transition"
        >
          <p className="-mr-px hidden sm:block">Sign IN</p>
          <img src="/icon/Signin.svg" alt="" />
        </NavLink>
        <div className="w-full h-px bg-gray-300/70 my-2"></div>
        <NavLink
          title="NID Registration"
          to={"/user/nid-reg"}
          className="flex items-center justify-between gap-3 cursor-pointer px-3 py-2 rounded hover:bg-gray-500/20 transition"
        >
          <p className="hidden sm:block">NID REGISTRATION</p>
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m6.669 13.167 3.333 3.333m0 0 3.334-3.333M10.002 16.5V9m7.4 5.075a4.166 4.166 0 0 0-2.4-7.575h-1.05a6.667 6.667 0 1 0-11.45 6.075"
              stroke="#1F2937"
              strokeOpacity="0.8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavLink>
        <NavLink
          title="Submit Vote"
          to={"/user/submit-vote"}
          className="flex items-center justify-between gap-3 cursor-pointer px-3 py-2 rounded hover:bg-gray-500/20 transition"
        >
          <p className="hidden sm:block">SUBMIT VOTE</p>
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.167 1.667H2.5a.833.833 0 0 0-.833.833v11.667a.833.833 0 0 1-1.667 0V2.5A2.5 2.5 0 0 1 2.5 0h11.667a.833.833 0 0 1 0 1.667M10 8.333a.833.833 0 1 1 1.667 0V10h1.666a.833.833 0 1 1 0 1.667h-1.666v1.666a.833.833 0 1 1-1.667 0v-1.666H8.333a.833.833 0 0 1 0-1.667H10z"
              fill="#1F2937"
              fillOpacity=".8"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.836 3.333a2.5 2.5 0 0 1 2.5 2.5v10a2.5 2.5 0 0 1-2.5 2.5h-10a2.5 2.5 0 0 1-2.5-2.5v-10a2.5 2.5 0 0 1 2.5-2.5zm0 1.667c.46 0 .833.373.833.833v10c0 .46-.373.834-.833.834h-10a.833.833 0 0 1-.833-.834v-10c0-.46.373-.833.833-.833z"
              fill="#1F2937"
              fillOpacity=".8"
            />
          </svg>
        </NavLink>
        <div className="w-full h-px bg-gray-300/50 my-2"></div>
        <NavLink
        onClick={onLogout}
          title="Sign Out"
          className="flex items-center text-red-600/80 justify-between gap-3 cursor-pointer px-3 py-2 rounded hover:bg-red-600/20 transition"
        >
          <p className="hidden sm:block">Sign Out</p>
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 3.833h17m-4.25 0-.287-.766c-.28-.744-.419-1.115-.677-1.39a2.1 2.1 0 0 0-.852-.546C11.559 1 11.118 1 10.237 1H8.763c-.881 0-1.322 0-1.697.131a2.1 2.1 0 0 0-.852.546c-.258.275-.398.646-.676 1.39l-.288.766m10.625 0v9.634c0 1.586 0 2.38-.347 2.986a3.04 3.04 0 0 1-1.393 1.238c-.682.309-1.575.309-3.36.309h-2.55c-1.785 0-2.678 0-3.36-.309a3.04 3.04 0 0 1-1.393-1.238c-.347-.606-.347-1.4-.347-2.986V3.833m8.5 3.778v6.611m-4.25-6.61v6.61"
              stroke="#DC2626"
              strokeOpacity=".8"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </NavLink>
      </ul>
    </div>
  );
}

export default Sidebar;
