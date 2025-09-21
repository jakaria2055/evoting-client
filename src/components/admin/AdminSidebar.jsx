import { NavLink } from "react-router-dom";

function AdminSidebar() {
  return (
    <div className="text-sm w-full p-3 bg-white border border-gray-500/30 text-gray-800/80 rounded-md font-medium">
      <ul className="flex flex-col gap-px">
        <NavLink
          title="Add NID"
          to={"/admin/add-nid"}
          className="flex items-center justify-between gap-3 cursor-pointer px-3 py-2 rounded hover:bg-gray-500/20 transition"
        >
          <p className="hidden sm:block">Add NID</p>
          <img src="/icon/registration.svg" alt="" />
        </NavLink>
        <NavLink
          title="Get NID"
          to={"/admin/get-nid"}
          className="flex items-center justify-between gap-2 cursor-pointer px-3 py-2 rounded hover:bg-gray-500/20 transition"
        >
          <p className="-mr-px hidden sm:block">Get NID</p>
          <img src="/icon/Signin.svg" alt="" />
        </NavLink>
        <div className="w-full h-px bg-gray-300/70 my-2"></div>
        <NavLink
          title="NID Registration"
          to={"/admin/add-parties"}
          className="flex items-center justify-between gap-3 cursor-pointer px-3 py-2 rounded hover:bg-gray-500/20 transition"
        >
          <p className="hidden sm:block">Add Parties</p>
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
        <NavLink
          title="Submit Vote"
          to={"/admin/get-parties"}
          className="flex items-center justify-between gap-3 cursor-pointer px-3 py-2 rounded hover:bg-gray-500/20 transition"
        >
          <p className="hidden sm:block">Get Parties</p>
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
        <div className="w-full h-px bg-gray-300/50 my-2"></div>
      </ul>
    </div>
  );
}

export default AdminSidebar;
