import { Proudct } from "../../graphql/products";

const ProudctDetail = ({
  item: { title, description, imageUrl, price },
}: {
  item: Proudct;
}) => (
  <div className="product-detail">
    <p className="product-detail__title">{title}</p>
    <p className="product-detail__description">{description}</p>
    <img className="product-detail__image" src={imageUrl} />
    <span className="product-detail__price">$ {price}</span>
  </div>
);

export default ProudctDetail;
