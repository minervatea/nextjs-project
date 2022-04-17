import { CartType, GET_CART_ITEM } from "./../graphql/cart";
import GET_PRODUCTS, { GET_PRODUCT } from "./../graphql/products";
import { graphql } from "msw";
import { GET_CART, ADD_CART } from "../graphql/cart";

const mockProducts = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1 + "",
  imageUrl: `https://placeimg.com/200/150/${i + 1}`,
  price: 80,
  title: `product${i + 1}`,
  description: `product description ${i + 1}`,
  createdAt: new Date(1611173995077 + i * 1000 * 60 * 60 * 24),
}));

let cartData: { [key: string]: CartType } = {};

export const handlers = [
  graphql.query(GET_PRODUCTS, (req, res, ctx) => {
    return res(
      ctx.data({
        products: mockProducts,
      })
    );
  }),

  graphql.query(GET_PRODUCT, (req, res, ctx) => {
    const found = mockProducts.find((item) => item.id === req.variables.id);
    if (found) return res(ctx.data(found));
    return res();
  }),

  graphql.query(GET_CART, (req, res, ctx) => {
    return res(ctx.data(cartData));
  }),

  graphql.query(GET_CART_ITEM, (req, res, ctx) => {
    const targetProduct = cartData[req.variables.id];
    if (targetProduct) return res(ctx.data(targetProduct));
    return res();
  }),

  graphql.mutation(ADD_CART, (req, res, ctx) => {
    const newCartData = { ...cartData };
    const id = req.variables.id;
    const targetProduct = mockProducts.find(
      (item) => item.id === req.variables.id
    );

    if (!targetProduct) {
      throw new Error("no such proudct exists");
    }

    const newItem = {
      ...targetProduct,
      amount: (newCartData[id]?.amount || 0) + 1,
    };
    newCartData[id] = newItem;
    cartData = newCartData;

    return res(ctx.data(newItem));
  }),
];
