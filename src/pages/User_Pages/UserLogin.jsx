import UserStore from "../../store/UserStote";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function UserLogin() {
  const navigate = useNavigate();
  const { LoginFormData, LoginFormChange, UserLoginRequest } = UserStore();
  const onFormSubmit = async (e) => {
    e.preventDefault();
    let res = await UserLoginRequest(LoginFormData);

    if (res.success) {
      toast.success(res.message || "Logged in Successfully");
      navigate("/user-home");
    } else {
      toast.error(res.message || "Login failed");
    }
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className="flex flex-col items-center text-sm text-slate-800"
    >
      <h1 className="text-4xl font-bold py-4 text-center">Sign IN</h1>
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
            value={LoginFormData.nid}
            onChange={(e) => LoginFormChange("nid", e.target.value)}
            type="text"
            className="h-full px-2 w-full outline-none bg-transparent"
            placeholder="Enter your registered ID"
            required
          />
        </div>

        <label htmlFor="email-address" className="font-medium mt-4">
          Password
        </label>
        <div className="flex items-center mt-2 mb-4 h-10 pl-3 border border-slate-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-400 transition-all overflow-hidden">
          <img src="/icon/password.svg" alt="" />
          <input
            value={LoginFormData.password}
            onChange={(e) => LoginFormChange("password", e.target.value)}
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
          Log IN
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

export default UserLogin;
