import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import uuid from "react-uuid";

const Tasks = styled.div`
  text-align: end;
  font-size: 0.8rem;
  margin-right: 3rem;
  margin-top: 1rem;
`;

const TaskNumber = styled.span`
  color: skyblue;
`;

function App() {
  const [todos, setTodos] = useState([]);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: uuid(),
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
    },
    [todos]
  );

  useEffect(() => {
    const local_data =
      localStorage.getItem("todo") !== null
        ? JSON.parse(localStorage.getItem("todo"))
        : [];
    setTodos(local_data);
  }, []);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  const onRemove = useCallback((id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  });

  const onEdit = useCallback((id, text) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: text } : todo))
    );
  });

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <Tasks>
          <TaskNumber>{Object.keys(todos).length}</TaskNumber>
          개의 목록
        </Tasks>
        <TodoList
          todos={todos}
          onRemove={onRemove}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      </TodoTemplate>
    </>
  );
}

export default App;
