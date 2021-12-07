import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";

const Form = styled.form`
  display: flex;
`;

const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  border-bottom: black;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  &::placeholder {
    color: gray;
  }
  flex: 1;
  margin-top: 1rem;
  margin-left: 2rem;
  border-bottom: 0.1rem solid skyblue;
`;

const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  background: white;
  color: skyblue;
  padding-left: 1rem;
  margin-right: 3rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  &:hover {
    color: lightskyblue;
  }
  border-bottom: 0.1rem solid skyblue;
`;

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      if (value) {
        onInsert(value);
        setValue("");
        e.preventDefault();
      } else {
        alert("내용을 입력해주세요");
      }
    },
    [onInsert, value]
  );
  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input
          placeholder="할 일을 입력하세요"
          value={value}
          onChange={onChange}
        ></Input>
        <Button type="submit">
          <MdAdd />
        </Button>
      </Form>
    </>
  );
};

export default TodoInsert;
