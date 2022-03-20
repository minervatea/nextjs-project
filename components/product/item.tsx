import Link from "next/link";
import { Product } from "../types";

const ProductItem = ({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
}: Product) => (
  <Link href={`/products/${id}`}>
    <li className="product-item">
      <p className="product-item__category">{category}</p>
      <p className="product-item__title">{title}</p>
      <img className="product-item__image" src={image} />
      <span className="product-item__price">$ {price}</span>
      <span className="product-item__rating">{rating.rate}</span>
    </li>
  </Link>
);

export default ProductItem;
