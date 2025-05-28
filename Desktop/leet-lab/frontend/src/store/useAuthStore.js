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


signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post(REGISTER_URL, data);
  
      set({ authUser: res.data.user });
  
      toast.success(res.data.message);
    } catch (error) {
      console.log("error in signing up");
      toast.error("Error in signing up");
    } finally {
      set({ isSigningUp: false });
    }
  };
  
  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axios.post(LOGIN_URL, data);
  
      set({ authUser: res.data.user });
  
      toast.success(res.data.user);
    } catch (error) {
      console.log("error in loging in");
      toast.error("Error in login");
    } finally {
      set({ isLoggingIn: false });
    }
  };