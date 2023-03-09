import { ApolloClient, InMemoryCache } from "@apollo/client";

const clientApolo = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_HYGRAPH_CMS,
  cache: new InMemoryCache(),
});

export default clientApolo
