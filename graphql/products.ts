import { gql } from "graphql-tag";

export type Product = {
  id: string;
  imageUrl: string;
  price: number;
  description: string;
  createdAt: string;
};

const GET_PRODUCTS = gql`
  query GET_PRODUCTS {
    id
    imageUrl
    price
    title
    description
    createdAt
  }
`;

export default GET_PRODUCTS;
