import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchProductosLocal } from "./hooks/api";

const CartShooping = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(200);

  const { isLoading, error, data, isPlaceholderData, isFetching } = useQuery({
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

  // Determinar si debemos mostrar la paginación simple o la avanzada
  const showAdvancedPagination = totalPages > 10 && page > 3;

  // Función para generar los números de página
  const generatePageNumbers = () => {
    const pageNumbers = [];

    if (showAdvancedPagination) {
      pageNumbers.push(1, 2, 3, "...");

      for (let i = page - 1; i <= page + 1; i++) {
        pageNumbers.push(i);
      }

      pageNumbers.push("...", totalPages - 2, totalPages - 1, totalPages);
    } else {
      for (let i = 1; i <= Math.min(totalPages, 10); i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  // Manejadores de página
  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

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
        <br />
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className={`page-item ${page === 1 && "disabled"}`}>
              <button className="page-link" onClick={handlePreviousPage}>
                Previous
              </button>
            </li>
            {generatePageNumbers().map((pageNumber, index) => (
              <li
                key={index}
                className={`page-item ${pageNumber === page && "active"}`}
              >
                <button
                  className="page-link"
                  onClick={() => setPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              </li>
            ))}
            <li className={`page-item ${page === totalPages && "disabled"}`}>
              <button className="page-link" onClick={handleNextPage}>
                Next
              </button>
            </li>
          </ul>
        </nav>
        <span>Current Page: {page}</span>
      </section>
    </>
  );
};

export default CartShooping;

/*   <span>Current Page: {page}</span>
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Previous Page
        </button>
        <button
          onClick={handleNextPage}
          // Disable the Next Page button until we know a next page is available
          disabled={isPlaceholderData || data?.hasMore}
        >
          Next Page
        </button> */
