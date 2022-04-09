import { GET_PRODUCT } from "./../graphql/products";
import { QueryKeys } from "./../pages/react-query";
import { graphql } from "msw";
import { v4 as uuid } from "uuid";
import GET_PRODUCTS from "../graphql/products";

const mockProducts = Array.from({ length: 20 }).map((_, i) => ({
  id: uuid(),
  imageUrl: `https://placeimg.com/200/150/${i + 1}`,
  price: 80,
  title: `product${i + 1}`,
  description: `product description ${i + 1}`,
  createdAt: new Date(1611173995077 + i * 1000 * 60 * 60 * 24),
}));

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
];
