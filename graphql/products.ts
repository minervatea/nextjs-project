import { gql } from "graphql-tag";

export type Proudct = {
  id: string;
  imageUrl: string;
  price: number;
  title: string;
  description: string;
  createdAt: string;
};

export type Proudcts = {
  products: Proudct[];
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

export const GET_PRODUCT = gql`
  query GET_PRODUCT($id: string) {
    id
    imageUrl
    price
    title
    description
    createdAt
  }
`;

// export const GET_PRODUCT = gql`
//   query GET_PRODUCT($id: ID!) {
//     product(id: $id) {
//       id
//       imageUrl
//       price
//       title
//       description
//       createdAt
//     }
//   }
// `;

export default GET_PRODUCTS;
