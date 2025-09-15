import { create } from "zustand";
import Cookies from "js-cookie";
import axios from "axios";
import { setEmail } from "../utility/utility";

// const BaseURL = "https://evoting-server-pi.vercel.app/api/v1";

const BaseURL = "http://localhost:3000/api/v1";

const AdminStore = create((set, get) => ({
  //   isAdmin: () => {
  //     return !!Cookies.get("accesstoken");
  //   },

  isAdmin: () => {
    return !!localStorage.getItem("accesstoken");
  },

  AdminFormData: { email: "", password: "" },
  AdminFormChange: (name, value) => {
    set((state) => ({
      AdminFormData: {
        ...state.AdminFormData,
        [name]: value,
      },
    }));
  },

  VerifyFormData: { email: "", otp: "" },
  VerifyFormChange: (name, value) => {
    set((state) => ({
      VerifyFormData: {
        ...state.VerifyFormData,
        [name]: value,
      },
    }));
  },

  isFormSubmit: false,
  AdminCreateRequest: async (postBody) => {
    set({ isFormSubmit: true });
    let res = await axios.post(`${BaseURL}/admin/registration`, postBody);
    setEmail(postBody.email);
    set((state) => ({
      VerifyFormData: { ...state.VerifyFormData, email: postBody.email },
    }));

    set({ isFormSubmit: false });
    return res.data.success === true;
  },

  VerifyOTPRequest: async (postBody) => {
    set({ isFormSubmit: true });
    let res = await axios.post(`${BaseURL}/admin/verify`, postBody);
    set({ isFormSubmit: false });
    return res.data.success === true;
  },

  LoginRequest: async (postBody) => {
    set({ isFormSubmit: true });
    let res = await axios.post(`${BaseURL}/admin/login`, postBody);
    set({ isFormSubmit: false });
    localStorage.setItem("accesstoken", res.data.accesstoken);
    return res.data.success === true;
  },

  UserLogoutRequest: async () => {
    set({ isFormSubmit: true });
    try {
      // Just call logout, backend will get refreshtoken from cookies
      let res = await axios.post(
        `${BaseURL}/admin/logout`,
        {},
        { withCredentials: true }
      );
      set({ isFormSubmit: false });
      return res.data.success === true;
    } catch (e) {
      set({ isFormSubmit: false });
      return false;
    }
  },




   // Static positions
  availablePositions: ["Member", "AGS", "GS", "Chairman", "VP"],

  // Form state
  PartyFormData: {
    name: "",
    sign: "",
    positions: [],
  },

  // Form change
  PartyFormChange: (name, value) =>
    set((state) => ({
      PartyFormData: {
        ...state.PartyFormData,
        [name]: value,
      },
    })),

  // Reset form
  ResetPartyForm: () =>
    set({
      PartyFormData: { name: "", sign: "", positions: [] },
    }),

  // Toggle position
  TogglePartyPosition: (position) =>
    set((state) => {
      const positions = state.PartyFormData.positions.includes(position)
        ? state.PartyFormData.positions.filter((p) => p !== position)
        : [...state.PartyFormData.positions, position];
      return {
        PartyFormData: { ...state.PartyFormData, positions },
      };
    }),

  // API state
  isCreatingParty: false,
  partyCreateResult: null,

  // Create party API
  AddPartyRequest: async (partyData) => {
    set({ isCreatingParty: true, partyCreateResult: null });

    try {
      const res = await axios.post(`${BaseURL}/admin/add-party`, partyData, {
        headers: {
          accesstoken: localStorage.getItem("accesstoken"),
          "Content-Type": "application/json",
        },
      });

      // Success
      if (res.data.success) {
        get().ResetPartyForm();
        set({
          isCreatingParty: false,
          partyCreateResult: {
            success: true,
            message: res.data.message || "Party created successfully",
          },
        });
      } else {
        set({
          isCreatingParty: false,
          partyCreateResult: {
            success: false,
            message: res.data.message || "Failed to create party",
          },
        });
      }
    } catch (err) {
      set({
        isCreatingParty: false,
        partyCreateResult: {
          success: false,
          message: err.response?.data?.message || "Something went wrong",
        },
      });
    }
  },

  // Clear API result
  ClearPartyCreateResult: () => set({ partyCreateResult: null }),


}));

export default AdminStore;
