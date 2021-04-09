import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import defaultTheme from "./theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./App.style";
import { ApolloProvider } from "@apollo/client";
import reportWebVitals from "./reportWebVitals";
import client from "./apollo/client";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <App countriesCount={4} />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
