import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListStyle = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
  margin-left: 1rem;
  margin-right: 2rem;
`;

const TodoList = ({ todos, onRemove, onToggle, onEdit }) => {
  return (
    <TodoListStyle>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </TodoListStyle>
  );
};

export default TodoList;
