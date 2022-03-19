import { useQuery } from "react-query";
import { Product } from "../types";
import { useRouter } from "next/router";
import { fetcher, QueryKeys } from "../react-query";

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useQuery<Product>([QueryKeys.PRODUCTS, id], () =>
    fetcher({
      method: "GET",
      path: `/products/${id}`,
    })
  );

  if (!data) return null;

  const {
    category,
    title,
    description,
    image,
    price,
    rating: { rate },
  } = data;

  return (
    <div className="product-detail">
      <p className="product-detail__category">{category}</p>
      <p className="product-detail__title">{title}</p>
      <p className="product-detail__description">{description}</p>
      <img className="product-detail__image" src={image} />
      <span className="product-detail__price">$ {price}</span>
      <span className="product-detail__rating">{rate}</span>
    </div>
  );
};

export default ProductDetailPage;
