import Link from "next/link";
import { Proudct } from "../../graphql/products";

const ProductItem = ({
  description,
  id,
  title,
  imageUrl,
  price,
  createdAt,
}: Proudct) => (
  <Link href={`/products/${id}`}>
    <li className="product-item">
      <p className="product-item__title">{title}</p>
      <img className="product-item__image" src={imageUrl} />
      <span className="product-item__price">$ {price}</span>
    </li>
  </Link>
);

export default ProductItem;
