import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .header {
    font-size: 20px;
  }

  .nav {
  font-size: 20px;
  font-weight: bold;
  list-style-type: none;
  text-align: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: white;
  border: 1px solid black;
  padding: 20px;

  li {
    display: inline;
    min-width: 5em;
    margin: 0 2em;
    border: none;
    background-color: transparent;
    font-size: 20px;
    font-weight: bold;
    }

    .menuLogo {
      font-size: 25px;
      float: right;
      width: 30px;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .login {
      display: flex;
      justify-content: center;
      align-items: right;
      margin: 0 2em;
      font-size: 15px;
      text-align: center;
      margin-left: 10%;
      padding: 0px;

      .li {
        display: inline;
        margin-right: 0px;
      }
    }
  }

  .logoImg {
  float: left;
  width: 30px;
  height: 30px;
  }

  .menuText {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;