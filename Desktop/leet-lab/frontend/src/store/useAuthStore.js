import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { CHECK_URL, LOGIN_URL, LOGOUT_URL, REGISTER_URL } from "../constant/urls";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingUp: false,
  isCheckingAuth: false,
}));

checkAuth: async () => {
  set({ isCheckingAuth: true });
  try {
    const res = await axiosInstance.get(CHECK_URL);
    console.log("Auth res", res.data);

    set({ authUser: res.data.user });
  } catch (error) {
    console.log("error in auth");
    set({ authUser: null });
  } finally {
    set({ isCheckingAuth: false });
  }
};
