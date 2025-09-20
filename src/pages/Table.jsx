import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../Context";
import { orders } from "../data/orders";
import TableActions from "../components/table/TableActions";
import TableRow from "../components/table/TableRow";
import Pagination from "../components/table/Pagination";

const PER_PAGE = 5;

const Table = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { isDarkMode } = useAuth();

  const offset = currentPage * PER_PAGE;
  const currentPageData = orders.slice(offset, offset + PER_PAGE);
  const pageCount = Math.ceil(orders.length / PER_PAGE);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-4 sm:p-6 w-full min-h-screen ${
        isDarkMode
          ? "bg-zinc-900 text-white fade-in"
          : "bg-white text-zinc-900 fade-out"
      }`}
    >
      <h2 className="text-lg sm:text-xl font-bold mb-4">Order List</h2>

      <TableActions isDarkMode={isDarkMode} />

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className={`border-b ${isDarkMode ? "text-white" : "text-black"}`}>
              <th className="p-2">Order ID</th>
              <th className="p-2">User</th>
              <th className="p-2">Project</th>
              <th className="p-2">Address</th>
              <th className="p-2">Date</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentPageData.map((item, index) => (
              <TableRow key={index} item={item} index={index} isDarkMode={isDarkMode} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center sm:justify-end mt-4">
        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} isDarkMode={isDarkMode} />
      </div>
    </motion.div>
  );
};

export default Table;
