import "./styles/productos.css";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchProductosLocal } from "./service/api";
import ProductPagination from "./components/ProductPagination";

const Products = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);

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
      {console.log(data)}
      <div className="container-fluid">
        <h1 className="container text-center">Productos</h1>
        <div className="cardContent">
          <div className="card card-body rouded-0 cardBody">
            <h2>lorem</h2>

            <span>Poner una carrusel de marcas</span>
          </div>
        </div>
        <h2 className="container text-center">Todos los productos 🛒</h2>
        <div className="container productContent ">
          <div className=" row productsContainer ">
            {productos.map((producto) => (
              <div
                className="card card-body rouded-0 productsHeigh"
                key={producto._id}
              >
                <h2> {producto.desc_prod}</h2>
                <img
                  src="https://picsum.photos/640/360"
                  className=""
                  alt="prueba-img"
                />
                <span>unidad {producto.unidad}</span>
                <span>${producto.precio}</span>
              </div>
            ))}
          </div>
        </div>
        <section className="paginationProducts">
          <ProductPagination
            page={page}
            totalPages={totalPages}
            setPage={setPage}
          />
        </section>
      </div>
    </>
  );
};
export default Products;
