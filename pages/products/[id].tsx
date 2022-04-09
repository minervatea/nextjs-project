import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { graphqlFetcher, QueryKeys } from "../react-query";
import ProudctDetail from "../../components/product/detail";
import { GET_PRODUCT, Proudct } from "../../graphql/products";

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useQuery<Proudct>([QueryKeys.PRODUCT, id], () =>
    graphqlFetcher(GET_PRODUCT, { id })
  );

  if (!data) return null;

  return <ProudctDetail item={data} />;
};

export default ProductDetailPage;
