import axios from "axios";
import { create } from "zustand";
import { setEmail, unauthorized } from "../utility/utility";

const BaseURL = "http://localhost:3000/api/v1";

const UserStore = create((set) => ({
  isUser: () => {
    return !!localStorage.getItem("usertoken");
  },

  UserFormData: { nid: "", name: "", email: "", password: "" },
  UserFormChange: (name, value) => {
    set((state) => ({
      UserFormData: {
        ...state.UserFormData,
        [name]: value,
      },
    }));
  },

  LoginFormData: { nid: "", password: "" },
  LoginFormChange: (name, value) => {
    set((state) => ({
      LoginFormData: {
        ...state.LoginFormData,
        [name]: value,
      },
    }));
  },

  UserCreateRequest: async (postBody) => {
    let res = await axios.post(`${BaseURL}/user/registration`, postBody);
    setEmail(postBody.email);
    set((state) => ({
      LoginFormData: { ...state.LoginFormData, email: postBody.email },
    }));
    return res.data.success === true;
  },

  UserLoginRequest: async (postBody) => {
    try {
      let res = await axios.post(`${BaseURL}/user/login`, postBody);
      if (res.data.success) {
        localStorage.setItem("usertoken", res.data.usertoken);
      }
      return res.data;
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.message || "Something went wrong",
      };
    }
  },

  UserLogoutRequest: async () => {
    try {
      // Just call logout, backend will get refreshtoken from cookies
      let res = await axios.post(
        `${BaseURL}/user/logout`,
        {},
        { withCredentials: true }
      );
      return res.data.success === true;
    } catch (e) {
      console.log(e);
      return false;
    }
  },

  PartyDetails: null,
  PartyDetailsRequest: async () => {
    try {
      let res = await axios.get(`${BaseURL}/user/read-party`, {
        headers: {
          usertoken: localStorage.getItem("usertoken"),
        },
      });
      if (res.data["data"].length > 0) {
        set({ PartyDetails: res.data["data"] });
      } else {
        set({ PartyDetails: [] });
      }
    } catch (e) {
      unauthorized(e.response.status);
    }
  },

  PartyListByPosition: null,
  PartyListByPositionRequest: async (position) => {
    try {
      set({ PartyListByPosition: null });
      let res = await axios.get(`${BaseURL}/user/listByPosition/${position}`, {
        headers: {
          usertoken: localStorage.getItem("usertoken"),
        },
      });
      if (res.data.success === true) {
        set({ PartyListByPosition: res.data.parties });
      } else {
        set({ PartyListByPosition: [] });
      }
    } catch (e) {
      console.log(e);
      unauthorized(e.response.status);
    }
  },

  SubmitVoteRequest: async (id, position) => {
    try {
      let res = await axios.post(
        `${BaseURL}/user/submit-vote/${id}/${position}`,
        {},
        {
          headers: {
            usertoken: localStorage.getItem("usertoken"),
          },
        }
      );
      return res.data;
    } catch (e) {
      console.log("Submit vote error:", e);
      if (e.response?.status === 401) {
        unauthorized(e.response.status);
      }
      return {
        success: false,
        message: e.response?.data?.message || "Failed to submit vote",
      };
    }
  },
}));

export default UserStore;
