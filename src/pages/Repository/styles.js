import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #ffffffc7;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #fff;
  list-style: none;

  li {
    margin-top: 25px;
    display: flex;
    padding: 15px 10px;
    border: 1px solid #ffffff54;
    border-radius: 4px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #0000000f;
      background: #fff;
    }

    div {
      flex: 1;
      margin-left: 15px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #fff;
          transition: 0.3s;

          &:hover {
            color: #ffffffc7;
            transition: 0.3s;
          }
        }

        span {
          background: #fff;
          color: #333;
          border-radius: 2px;
          font-size: 12px;
          font-weight: 600;
          height: 20px;
          padding: 3px 4px;
          margin-left: 10px;
        }
      }

      p {
        margin-top: 5px;
        font-size: 12px;
        color: #ffffffc7;
      }
    }
  }
`;

export const IssueTitle = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 15px;
  color: #fff;
  text-transform: uppercase;
`;

export const IssueSelection = styled.div`
  display: flex;
  justify-content: center;

  div {
    margin: 0 5px;

    button {
      background: transparent;
      border: 0;
      border-bottom: 1px solid #fff;
      padding: 10px;
      border-radius: 0px;
      color: #fff;
      font-size: 14px;
      text-transform: uppercase;
    }

    &:nth-child(${props => props.active + 1}) {
      background: #fff;
      border-radius: 4px;

      button {
        border-bottom: 0;
        color: #f15b85;
      }
    }
  }
`;

export const PageActions = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: #fff;
    font-weight: bold;
  }

  button {
    transition: opacity 0.25s ease-out;
    border-radius: 40px;
    outline: 0;
    border: 0;
    padding: 10px 10px;
    background: #fff;

    &:disabled {
      opacity: 0.35;
      cursor: not-allowed;
    }

    svg {
      margin: 0;
      display: flex;
      align-self: center;
      justify-self: center;
    }
  }
`;
