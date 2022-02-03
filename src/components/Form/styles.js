import styled from 'styled-components';

export const Wrapper = styled.div`
    background: #fff;
    border: 1px solid #dbdbdb;
    border-radius: 3px;
    padding: 5px;
    margin-bottom: 10px;
    max-width: 420px;
`;
Wrapper.displayName= 'Wrapper'

export const Input = styled.input`
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  padding: 0 5px;
  min-width: 180px;
  margin-bottom: 10px;
  margin-right: 10px;
  height: 40px;
  outline: none;
`
Input.displayName = 'Input';

export const Row = styled.div`
    display: flex;
  align-items: center;
  justify-content: space-around;
`
Row.displayName = 'Row';

export const Button = styled.button`
  border: 1px solid #dbdbdb;
  height: 40px;
  border-radius: 3px;
  padding: 0 5px;
  box-sizing: border-box;
  background-color: rgba(108, 211, 168, 0.61);
  color: rgba(0, 0, 0, 0.87);
  font-size: 18px;
  margin-right: 10px;
  outline: none;
  min-width: 205px;

  &:hover {
    cursor: pointer;
  }
`
Button.displayName = 'Button';

export const Comment = styled.textarea`
  min-height: 40px;
  line-height: 1.5;
  box-sizing: border-box;
  padding: 5px;
  border-radius: 3px;
  margin: 0;
  height: 40px;
  min-width: 200px;
  border: 1px solid #dbdbdb;
  outline: none;
`;
Comment.displayName = 'Comment'





