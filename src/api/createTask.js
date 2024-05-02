import axios from "axios";
export async function createTasks(taskData) {
  const data = await axios.post(
    "http://localhost:8000/api/v1/overview/create-overview",
    taskData
  );

  return data;
}
