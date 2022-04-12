import { gql } from "graphql-tag";

export type Cart = {
  id: string;
  imageUrl: string;
  price: string;
  title: string;
  amount: number;
};

export const GET_CART = gql`
  query GET_CART {
    id
    imageUrl
    price
    title
    amount
  }
`;

export const ADD_CART = gql`
mutation ADD_CART($id: string)
id
imageUrl
price
title
amount
`;
