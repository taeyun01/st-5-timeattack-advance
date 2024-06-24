import { useState } from "react";
import { useAddTodo } from "../querys/useTodosQureys";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const { mutate: addTodoMutation } = useAddTodo();

  const handleAddTodo = async (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now().toString(),
      title,
      contents,
      isCompleted: false,
      createdAt: Date.now(),
    };
    await addTodoMutation(newTodo);

    setTitle("");
    setContents("");
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
