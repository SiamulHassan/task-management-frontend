import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../api/getTask";
export function useTask() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => await getTasks(),
  });

  return { isLoading, data, error };
}
