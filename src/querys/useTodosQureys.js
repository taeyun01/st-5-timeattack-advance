import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "./constantsQueryKey";
import { fetchTodos, getDtail, todoApi } from "../api/todos";

export const useGetTodos = () => {
  return useQuery({
    queryKey: QUERY_KEY.TODOS(),
    queryFn: () => fetchTodos(),
  });
};

export const useGetTodoDtail = (id) => {
  return useQuery({
    queryKey: QUERY_KEY.TODOID(id),
    queryFn: () => getDtail(id),
  });
};

export const useAddTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newTodo) => todoApi.post("/todos", newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries(["todo"]);
      alert("작성이 완료되었습니다.");
    },
  });
};
