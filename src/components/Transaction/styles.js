import styled from "styled-components";

export const Wrapper= styled.div`
  
  background: ${({ value }) => value < 0 ? 'yellow':'white'};
  border: 2px solid chartreuse;
  border-radius: 5px ;
  padding: 5px;
  margin-bottom: 10px;
`;
Wrapper.displayName='TransactionWrapper'

