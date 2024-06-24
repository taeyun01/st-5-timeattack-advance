import { useState } from "react";
import { todoApi } from "../api/todos";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function TodoForm({ fetchData }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const queryClient = useQueryClient();

  const { mutate: addTodoMutation } = useMutation({
    mutationFn: handleAddTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      alert("작성이 완료되었습니다.");
    },
  });

  const handleAddTodo = async (e) => {
    e.preventDefault();
    await addTodoMutation({
      id: Date.now().toString(),
      title,
      contents,
      isCompleted: false,
      createdAt: Date.now(),
    });
    await fetchData();
  };

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor="title">제목:</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label htmlFor="contents">내용:</label>
      <input
        id="contents"
        name="contents"
        value={contents}
        onChange={(e) => setContents(e.target.value)}
        required
      />
      <button type="submit">추가하기</button>
    </form>
  );
}
