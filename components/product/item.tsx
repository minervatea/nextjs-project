import Link from "next/link";
import { useMutation } from "react-query";
import { ADD_CART } from "../../graphql/cart";

import { Proudct } from "../../graphql/products";
import { graphqlFetcher, QueryKeys } from "../../pages/react-query";

const ProductItem = ({
  description,
  id,
  title,
  imageUrl,
  price,
  createdAt,
}: Proudct) => {
  const { mutate: addCart } = useMutation((id: string) =>
    graphqlFetcher(ADD_CART, { id })
  );
  return (
    <div className="product-item">
      <Link passHref href={`/products/${id}`}>
        <li>
          <p className="product-item__title">{title}</p>
          <img className="product-item__image" src={imageUrl} />
          <span className="product-item__price">$ {price}</span>
        </li>
      </Link>
      <button className="product-item__add_cart" onClick={() => addCart(id)}>
        add
      </button>
    </div>
  );
};

export default ProductItem;
