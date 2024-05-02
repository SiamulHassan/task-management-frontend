import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "../api/deleteTask";
export function useDeleteTask() {
  const queryClient = useQueryClient();
  const { isLoading, mutate: delTask } = useMutation({
    mutationFn: async (id) => await deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["tasks"],
      });
    },
  });
  return { isLoading, delTask };
}
