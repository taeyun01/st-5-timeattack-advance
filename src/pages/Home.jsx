import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <>
      <h2>서버통신 투두리스트 by useState</h2>
      <TodoForm />
      <TodoList />
    </>
  );
}
