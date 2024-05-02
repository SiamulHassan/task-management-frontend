import { create } from "zustand";
import { getTasks } from "../api/getTask";
export const useTaskStore = create((set) => ({
  // initial val
  manageTasks: [],

  // update initial val
  getManageTask: async () => {
    const allTasks = await getTasks();
    console.log(allTasks.data.task);
    // set((val) => set((val.manageTasks.todo.tasks = allTasks.data.task)));
    set((state) => (state.manageTasks = allTasks.data.task));
  },
}));
