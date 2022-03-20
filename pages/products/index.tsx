import { useQuery } from "react-query";
import ProductItem from "../../components/product/item";
import { fetcher, QueryKeys } from "../react-query";
import { Product } from "../../components/types";

const ProductListPage = () => {
  const { data } = useQuery<Product[]>(QueryKeys.PRODUCTS, () =>
    fetcher({
      method: "GET",
      path: "/products",
    })
  );

  return (
    <div>
      <ul className="products">
        {data?.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductListPage;
