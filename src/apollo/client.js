import { PARAM_GQL_API_URL } from "../utils/constants";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: PARAM_GQL_API_URL,
  cache: new InMemoryCache(),
});
export default client;
