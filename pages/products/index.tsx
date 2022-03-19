import { useQuery } from "react-query";
import ProductItem from "../../components/product/item";
import { fetcher, QueryKeys } from "../react-query";
import { Product } from "../types";

const ProductListPage = () => {
  const { data } = useQuery<Product[]>(QueryKeys.PRODUCTS, () =>
    fetcher({
      method: "GET",
      path: "/products",
    })
  );

  console.log(data);
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
