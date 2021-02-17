import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GlobalStyle } from "./App-style";
import { ApolloProvider } from "@apollo/client";
import reportWebVitals from "./reportWebVitals";
import client from "./apollo/client";

const defaultCountries = ["India", "Australia", "Germany", "Norway"];

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyle theme="dark" />
      <App countryList={defaultCountries} />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
