import axios from "axios";
export async function deleteTask(id) {
  await axios.delete(
    `http://localhost:8000/api/v1/overview/create-overview/${id}`
  );
}
