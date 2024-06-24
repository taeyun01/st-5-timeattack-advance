import axios from "axios";

export const todoApi = axios.create({
  baseURL: "http://localhost:4000",
});

export const fetchTodos = async () => {
  const response = await todoApi.get("/todos?_sort=-createdAt");
  return response.data;
};

export const getDtail = async (id) => {
  console.log(id);

  const response = await todoApi(`/todos/${id}`);
  return response.data;
};
