import axios from "axios";
export async function getTasks() {
  const data = await axios.get(
    "http://localhost:8000/api/v1/overview/create-overview"
  );
  return data;
}
