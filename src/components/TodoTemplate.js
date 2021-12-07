import React from "react";
import styled from "styled-components";
import "../index.css";

const TodoTemplateStyle = styled.div`
  width: 512px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 6rem;
  border-radius: 4px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0px 0px 50px #50a5ba;
`;

const AppTitle = styled.div`
  background: white;
  height: 5rem;
  font-size: 2.5rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-weight: 500;
  background-color: #373737;
  color: white;
  font-family: "Roboto", sans-serif;
`;
const Content = styled.div`
  background: white;
`;

const Day = styled.span`
  height: 3rem;
  font-size: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-weight: 500;
  background-color: #373737;
  color: gray;
`;

const TodoTemplate = ({ children }) => {
  const today = new Date();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = today.getDay();
  const dayArr = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  return (
    <TodoTemplateStyle className="TodoTemplate">
      <AppTitle className="app-title">TO DO LIST</AppTitle>
      <Day>{`${month}월 ${date}일 ${dayArr[day]}`}</Day>
      <Content className="content">{children}</Content>
    </TodoTemplateStyle>
  );
};

export default TodoTemplate;
