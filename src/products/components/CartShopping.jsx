import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchProductosLocal } from "./hooks/api";
import ProductPagination from "./ProductPagination";

const CartShooping = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(200);

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["projects", page],
    queryFn: () => fetchProductosLocal(page, perPage),
    placeholderData: keepPreviousData,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error fetching Products! {error.message}</div>;
  }
  if (isFetching) {
    return <div>Loading...</div>;
  }

  const { info, data: productos } = data;
  const { totalPages } = info;

  return (
    <>
      <section className="container">
        <h1 className="text-center">Productos</h1>
        <ul>
          {productos.slice(0, 10).map((producto) => (
            <li className="container border" key={producto._id}>
              {producto.desc_prod}
            </li>
          ))}
        </ul>
        <ProductPagination
          page={page}
          totalPages={totalPages}
          setPage={setPage}
        />
        <span>Current Page: {page}</span>
      </section>
    </>
  );
};

export default CartShooping;
