import { useNavigate, useParams } from "react-router-dom";
import { useGetTodoDtail } from "../querys/useTodosQureys";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // TODO: useQuery 로 리팩터링 하세요.

  const { data: todo, isPending, error } = useGetTodoDtail(id);

  if (isPending) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다: {error.message}</div>;

  return (
    <div>
      <button onClick={() => navigate("/")}>홈으로 이동</button>
      <p>제목: {todo.title}</p>
      <p>내용: {todo.contents}</p>
      <p>작성일자: {new Date(todo.createdAt).toDateString()}</p>
    </div>
  );
}
