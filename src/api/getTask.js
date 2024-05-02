import axios from "axios";
export async function getTasks() {
  const data = await axios.get(
    "https://task-management-backend-4s7p.onrender.com/api/v1/overview/create-overview"
  );
  return data;
}
