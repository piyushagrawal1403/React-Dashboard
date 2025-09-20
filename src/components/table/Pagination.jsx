import ReactPaginate from "react-paginate";

export default function Pagination({ pageCount, handlePageClick, isDarkMode }) {
  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
      onPageChange={handlePageClick}
      containerClassName={"pagination flex items-center gap-2"}
      pageClassName={`p-2 font-bold mx-1 sm:mx-2 rounded cursor-pointer ${
        isDarkMode
          ? "hover:bg-zinc-800 text-zinc-100 duration-100"
          : "hover:bg-zinc-200 text-zinc-900 duration-100"
      }`}
      previousClassName={`p-2 font-bold rounded cursor-pointer ${
        isDarkMode
          ? "hover:text-yellow-600 text-zinc-100 duration-100"
          : "hover:text-yellow-300 text-zinc-900 duration-100"
      }`}
      nextClassName={`p-2 font-bold rounded cursor-pointer ${
        isDarkMode
          ? "hover:text-yellow-600 text-zinc-100 duration-100"
          : "hover:text-yellow-300 text-zinc-900 duration-100"
      }`}
      breakClassName={"p-2"}
      activeClassName={`${
        isDarkMode ? "bg-zinc-800 text-zinc-100" : "bg-zinc-100 text-zinc-900"
      }`}
    />
  );
}
