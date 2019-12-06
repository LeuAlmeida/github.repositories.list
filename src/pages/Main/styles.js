import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  /* background: #ffffff29; */
  border-radius: 4px;
  /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); */
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
    color: #fff;
  }

  svg {
    margin-right: 10px;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    /* border: 1px solid #eee; */
    border: 0px;
    border-bottom: 1px solid #ffffff69;
    background: transparent;
    padding: 10px 15px;
    /* border-radius: 4px; */
    font-size: 16px;
    color: #fff;
  }

  input::placeholder {
    color: #ffffffa1;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'button',
})`
  background: #fff;
  border: 0;
  padding: 0 14px;
  margin-left: 10px;
  border-radius: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 0px;
  }
`;
