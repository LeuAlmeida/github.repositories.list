import styled from 'styled-components';

export const Footer = styled.div`
  position: fixed;
  bottom: 0;
  background: #ffffff38;
  width: 100%;
  text-align: center;
  padding: 15px 0;

  span {
    font-family: 'Raleway', cursive;
    font-size: 14px;
    color: #fff;

    a {
      font-weight: bold;
      text-decoration: none;
      color: #fff;
      transition: 0.2s;

      &:hover {
        color: #ffffff96;
        transition: 0.2s;
      }
    }
  }
`;
