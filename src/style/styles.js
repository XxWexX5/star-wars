import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    } 

    body {
      font-family: Arial, Helvetica, sans-serif;
      color: #333333;
      width: 100%;
      height: 100%;
      background: #DA4453;
      background: -webkit-linear-gradient(to right, #89216B, #DA4453);
      background: linear-gradient(to right, #89216B, #DA4453);
    }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const ImageBottom = styled.div`
  @keyframes animation-show {
    0% {
      opacity: 0;
      transform: translate3d(0, -50px, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  @media screen and (max-width: 950px) {
    right: 15px;
    bottom: unset;
    top: 15px;

    img {
      width: 100px;
    }
  }

  cursor: pointer;
  position: absolute;
  bottom: 50px;
  right: 50px;
  transition: all 0.3s ease-in-out;
  animation: 1.3s animation-show;
  animation-delay: 0.3s;

  &:hover {
    opacity: 0.7;
    transform: translate3d(0, -20px, 0);
  }
`;

export const CardStyle = styled.div`
  @keyframes animation-show {
    0% {
      opacity: 0;
      transform: translate3d(0, -50px, 0);
    }
    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  width: 100%;
  max-width: 450px;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  animation: 1s animation-show forwards;

  .circle {
    display: inline-block;
    padding: 25px 35px;
    border-radius: 100%;
    border: solid 4px ${props => props.borderColor};
    background-color: ${props => props.color};
    margin: 25px 0;

    img {
      object-fit: contain;
      vertical-align: middle;
    }
  }

  .title {
    font-size: 2em;
    font-weight: bold;
    margin: 10px 0 25px;
    color: ${props => props.color};

    &:after {
      content: "";
      width: 35px;
      height: 3px;
      display: block;
      margin: 5px auto;
      background-color: ${props => props.color};
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    font-size: 1.5rem;
    line-height: 1.3em;

    strong {
      font-weight: normal;
      color: ${props => props.color};
    }
  }

  .content-link {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    align-self: flex-end;
    position: relative;

    svg {
      width: 42px;
      top: -15px;
      right: 0;
      position: absolute;

      polyline,
      polygon {
        fill: ${props => props.color} !important;
      }
    }

    a.button {
      font-weight: bold;
      text-decoration: none;
      border: 2px solid ${props => props.color};
      color: ${props => props.color};
      padding: 5px 10px;
      border-radius: 3px;
      margin: 30px 0 10px;

      @keyframes animation-move {
        0% {
          transform: translate3d(0, 0, 0);
        }
        100% {
          transform: translate3d(20px, -15px, 0);
        }
      }

      &:hover {
        background-color: ${props => props.color};
        color: #ffffff;

        svg {
          animation: 0.3s animation-move forwards;
        }
      }
    }
  }
`;
