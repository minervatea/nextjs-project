import { useQuery } from "react-query";
import { Product } from "../types";
import { useRouter } from "next/router";
import { fetcher, QueryKeys } from "../react-query";
import ProudctDetail from "../../components/product/detail";

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

  return <ProudctDetail item={data} />;
};

export default ProductDetailPage;
