import axios from "axios";
export async function deleteTask(id) {
  await axios.delete(
    `https://task-management-backend-4s7p.onrender.com/api/v1/overview/create-overview/${id}`
  );
}
