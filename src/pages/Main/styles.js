import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 0px;
    border-bottom: 1px solid #ffffff69;
    ${props => (props.error ? 'border: 1px solid #fff;' : '')}
    background: transparent;
    padding: 10px 15px;
    font-size: 16px;
    color: #fff;
    ${props => (props.error ? 'border-radius: 30px;' : '')}
  }

  input::placeholder {
    color: #ffffffa1;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #fff;
  border: 0;
  padding: 0 14px;
  margin-left: 10px;
  border-radius: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  svg {
    margin-right: 0px;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const CleanButton = styled.button.attrs(props => ({
  type: 'button',
  disabled: props.loading,
}))`
  background: #fff;
  border: 0;
  padding: 0 14px;
  margin-left: 10px;
  border-radius: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  svg {
    margin-right: 0px;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    text-transform: capitalize;

    span {
      padding-left: 15px;
      flex: 1;
    }

    & + li {
      border-top: 1px solid #fff6;
    }

    a {
      color: #fff;
      text-decoration: none;
    }

    button {
      background: transparent;
      border: 0;
    }
  }
`;

export const ErrorMessage = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  justify-content: center;
  padding-top: 20px;

  span {
    font-family: 'Raleway', cursive;
    color: #fff;
    font-weight: bold;
  }
`;
