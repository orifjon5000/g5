import styled from "styled-components";

const getSize = (size) => {
  switch (size) {
    case "id":
      return 1;
    case "action":
      return 2;
    default:
      return 4;
  }
};

export const Container = styled.div`
  display: flex;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 8px;
  height: 60px;
  align-content: center;
  padding-left: 18px;
`;

export const User = styled.div``;

User.Title = styled.div`
  display: flex;
  align-items: center;
  flex: ${({ size }) => getSize(size)};
  font-family: SFProDisplay;
  font-size: 13px;
  line-height: 15px;
  color: #2d3a45;
  height: 100%;
  padding-left: 10px;
  border-left: 1px solid black;
  border-right: 1px solid whitesmoke;
  justify-content: ${({ size }) => size === "action" && "space-around"};
  :nth-child(1) {
    border-left: none;
  }
`;
