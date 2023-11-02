import styled from 'styled-components';

export const Btn = styled.button`
  background-color: azure;
  border-radius: 12px;
  border: 2px solid gray;
  &:not(last-child) {
    margin-right: 20px;
  }
  &:hover,
  &:focus {
    background-color: lightblue;
  }
`;
