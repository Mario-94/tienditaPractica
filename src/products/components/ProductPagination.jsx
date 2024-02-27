const ProductPagination = ({ page, totalPages, setPage }) => {
  const showAdvancedPagination = totalPages > 10 && page > 3;

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

  const handlePreviousPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <nav aria-label="Page navigation ">
      <ul className="pagination justify-content-center textMedia">
        <li className={`page-item ${page === 1 && "disabled"} `}>
          <button className="page-link" onClick={handlePreviousPage}>
            Previous
          </button>
        </li>
        {generatePageNumbers().map((pageNumber, index) => (
          <li
            key={index}
            className={`page-item ${pageNumber === page && "active"}`}
          >
            <button className="page-link" onClick={() => setPage(pageNumber)}>
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
  );
};

export default ProductPagination;
