import styled from "styled-components";

export const Wrapper= styled.div`
  background: ${({ value }) => value < 0 ? 'yellow':'white'};
  border: 2px solid chartreuse;
  border-radius: 5px ;
  padding: 5px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
Wrapper.displayName='TransactionWrapper'

export const TransactionDate = 'TransactionDate';

export const Value = styled.div`
  flex-grow: 1;
`;
Value.displayName = 'Value'

export const Comment = styled.div`
  flex-grow: 1;
`;
Value.displayName = 'Comment'
