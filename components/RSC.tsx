import "server-only";
import { use } from "react";
import { sleep } from "@/utils/sleep";

type Todo = {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
};

const fetchTodos = async () => {
  await sleep(3);
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();
  return todos;
};

export const ReactServerComponent = () => {
  const todos = use(fetchTodos());

  return (
    <>
      {todos.slice(0, 5).map((todo) => (
        <ul key={todo.id}>
          <li>id: {todo.userId}</li>
          <li>userId: {todo.userId}</li>
          <li>title: {todo.title}</li>
          <li>completed: {todo.completed}</li>
        </ul>
      ))}
    </>
  );
};
