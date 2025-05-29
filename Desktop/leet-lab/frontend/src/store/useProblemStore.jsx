import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-hot-toast";

export const useProblemStore = create((set) => ({
  problems: [],
  problem: null,
  solvedProblems: [],
  isProblemsLoading: false,
  isProblemLoading: false,

  getAllProblems: async () => {
    try {
      set({ isProblemsLoading: true });

      const res = await axiosInstance.get("/problem/get-all-problems");

      set({ problems: res.data.problems });
    } catch (error) {
      toast.error("Error in getting problems");
    } finally {
      set({ isProblemsLoading: false });
    }
  },

  getProblemById: async (id) => {
    try {
      set({ isProblemLoading: true });

      const res = await axiosInstance.get(`/problem/get-problem/${id}`);

      set({ problem: res.data.problem });

      toast.success(res.data.message);
    } catch (error) {
      toast.error("Error in getting problems");
    } finally {
      set({ isProblemLoading: false });
    }
  },

  getSolvedProblemByUser: async () => {
    try {
      const res = await axiosInstance.get("/problem/get-solved-problem");

      set({ solvedProblems: res.data.problems });
    } catch (error) {
      toast.error("Error getting solved problems");
    }
  },
}));
