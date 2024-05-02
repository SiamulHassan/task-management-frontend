import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTasks } from "../api/createTask";
export function useCreateTask() {
  const queryClient = useQueryClient();

  const {
    isLoading,
    data,
    mutate: createTask,
  } = useMutation({
    mutationFn: async (taskData) => await createTasks(taskData),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
      // { active: true }
      //toast.success("form submitted successfully !");
    },
    // onError: (err) => toast.error(err.message),
  });
  console.log("task post route data:", data);
  return { isLoading, createTask, data };
}
