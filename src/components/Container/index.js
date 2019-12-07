import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  border-radius: 4px;
  padding: 30px;
  margin: 20px auto;

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
    color: #fff;
    font-family: 'Raleway', cursive;
    text-transform: uppercase;
  }

  svg {
    margin-right: 10px;
  }
`;

export default Container;
