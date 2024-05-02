import { create } from "zustand";
import { getTasks } from "../api/getTask";
export const useTaskStore = create((set) => ({
  // initial val
  iniCard: [
    {
      id: 0,
      title: "Todo",
      tasks: [],
    },
    {
      id: 1,
      title: "In Progress",
      tasks: [],
    },
    {
      id: 2,
      title: "Done",
      tasks: [],
    },
  ],

  // update initial val
  getManageTask: async () => {
    const allTasks = await getTasks();
    console.log(allTasks.data.task);
    // set((val) => set((val.manageTasks.todo.tasks = allTasks.data.task)));
    set((state) => {
      const updatedIniCard = [...state.iniCard]; // Create a copy of iniCard
      updatedIniCard[0].tasks = allTasks.data.task; // Update the tasks of the first object in iniCard
      return { iniCard: updatedIniCard }; // Return the updated state
    });
  },
}));
