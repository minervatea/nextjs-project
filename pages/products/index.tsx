import { useQuery } from "react-query";
import ProductItem from "../../components/product/item";
import { graphqlFetcher, QueryKeys } from "../react-query";
import GET_PRODUCTS, { Proudcts } from "../../graphql/products";

const ProductListPage = () => {
  const { data } = useQuery<Proudcts>(QueryKeys.PRODUCTS, () =>
    graphqlFetcher(GET_PRODUCTS)
  );

  return (
    <div>
      <ul className="products">
        {data?.products.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductListPage;
