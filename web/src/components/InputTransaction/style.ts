import styled, { css } from "styled-components";
import { Tooltip } from "../Tooltip";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #e8e8e8;
  border-radius: 10px;
  padding: 6px;
  width: 100%;

  border: 2px solid #e8e8e8;
  color: #000;
  transition: border 0.4s;
  
  display: flex;
  align-items: center;
  
  ${props => props.isErrored && css`
    border: 2px solid #c53030;
  ` }

  ${props => props.isFocused && css`
    border: 2px solid #9933FF;
    color: #9933FF;
  ` }

  ${props => props.isFilled && css`
    color: #9933FF;
  ` }

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #9933FF;

    ::placeholder {
      color: #000;
    }
  }
  svg{
    margin-right: 16px
  }
`;

export const Error = styled(Tooltip)`

  height: 20px;
  margin-left: 16px;

  svg{
    margin: 0;
  }

  span {
    background: #c53030;
    color: #F4EDE8; 
    &::before{
      border-color: #c53030 transparent;
    }
  }
`;