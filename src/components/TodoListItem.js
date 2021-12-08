import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { BiTrash } from "react-icons/bi";
import cn from "classnames";

const TodoListItemStyle = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background: #f8f9fa;
  }
`;

const Checkbox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
  &.checked {
    svg {
      color: #22b8cf;
    }
    .text {
      color: #adb5bd;
      text-decoration: line-through;
    }
  }
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const Text = styled.div`
  display: flex;
  margin-left: 0.5rem;
  flex: 1;
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

const Input = styled.input`
  flex: 1;
  height: 100%;
`;

const TodoListItem = ({ todo, onRemove, onToggle, onEdit }) => {
  const { id, text, checked } = todo;
  const [edited, setEdited] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const editInputRef = useRef(null);

  const onChangeEditInput = (e) => {
    setNewText(e.target.value);
  };

  useEffect(() => {
    if (edited) {
      editInputRef.current.focus();
    }
  }, [edited]);

  return (
    <TodoListItemStyle>
      <Checkbox className={cn("checkbox", { checked })}>
        {checked ? (
          <MdCheckBox onClick={() => onToggle(id)} />
        ) : (
          <MdCheckBoxOutlineBlank onClick={() => onToggle(id)} />
        )}
        {edited ? (
          <Text>
            <form onSubmit={() => (onEdit(id, newText), setEdited(false))}>
              <Input
                value={newText}
                onChange={onChangeEditInput}
                ref={editInputRef}
              ></Input>
            </form>
          </Text>
        ) : (
          <Text className="text" onClick={() => setEdited(true)}>
            {text}
          </Text>
        )}
      </Checkbox>
      <Remove onClick={() => onRemove(id)}>
        <BiTrash />
      </Remove>
    </TodoListItemStyle>
  );
};

export default React.memo(TodoListItem);
