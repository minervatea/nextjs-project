import Link from "next/link";
import { selectorFamily, useRecoilState, useRecoilValue } from "recoil";

import { Proudct } from "../../graphql/products";
import { cartItemSelector } from "../../recoils/cart";

const ProductItem = ({
  description,
  id,
  title,
  imageUrl,
  price,
  createdAt,
}: Proudct) => {
  const [cartAmount, setCartAmount] = useRecoilState(cartItemSelector(id));
  const addToCart = () => setCartAmount((cartAmount || 0) + 1);

  return (
    <div className="product-item">
      <Link passHref href={`/products/${id}`}>
        <li>
          <p className="product-item__title">{title}</p>
          <img className="product-item__image" src={imageUrl} />
          <span className="product-item__price">$ {price}</span>
        </li>
      </Link>
      <button onClick={addToCart} className="product-item__add_cart">
        add
      </button>
      <span>{cartAmount || 0}</span>
    </div>
  );
};

export default ProductItem;
