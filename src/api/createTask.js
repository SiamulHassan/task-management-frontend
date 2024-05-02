import axios from "axios";
export async function createTasks(taskData) {
  const data = await axios.post(
    "https://task-management-backend-4s7p.onrender.com/api/v1/overview/create-overview",
    taskData
  );

  return data;
}
