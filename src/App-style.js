import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const dark = {
  fg: "white",
  bg: "rgb(31, 30, 30)",
};
const light = {
  fg: dark.bg,
  bg: dark.fg,
};
const theme = {
  light,
  dark,
};
export const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => theme[props.theme].bg};
    color: ${(props) => theme[props.theme].fg};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  }
`;
export const Container = styled.section`
  display: flex;
  margin-top: 20px;
  margin-left: 20px;
  flex-direction: column;
`;

export const table = `{
    width: 50vw
}`;

export const Pre = styled.pre`
  display: inline;
`;

export const SelecteIds = styled.div`
  margin-top: 20px;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
