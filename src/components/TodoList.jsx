import { useNavigate } from "react-router-dom";
import { useGetTodos } from "../querys/useTodosQureys";

export default function TodoList() {
  const navigate = useNavigate();

  const { data: todos, isPending, error } = useGetTodos();

  if (isPending) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다: {error.message}</div>;

  return (
    <ul style={{ listStyle: "none", width: 250 }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{todo.title}</h3>
          <button onClick={() => navigate(`/detail/${todo.id}`)}>
            내용보기
          </button>
        </li>
      ))}
    </ul>
  );
}
