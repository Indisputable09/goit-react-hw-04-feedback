import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  background-color: lightseagreen;
  padding: 10px 0 10px 0;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: lavender;
  border: none;
  border-radius: 5px;
  width: 200px;
  height: 40px;
  cursor: pointer;
  transition: all 250ms linear;

  :hover {
    background-color: goldenrod;
    color: white;
  }
  :active {
    transform: scale(1.1);
  }
`;
