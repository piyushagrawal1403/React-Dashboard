import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { CgSortAz } from "react-icons/cg";
import { LuArrowUpDown } from "react-icons/lu";

export default function TableActions({ isDarkMode }) {
  const icons = [
    { icon: <FaPlus />, key: "Plus" },
    { icon: <CgSortAz />, key: "SortAz" },
    { icon: <LuArrowUpDown />, key: "ArrowUpDown" },
  ];

  return (
    <div
      className={`flex flex-wrap items-center justify-between mb-4 rounded-md p-2 ${
        isDarkMode
          ? "bg-zinc-900 text-white"
          : "bg-[#f8f9fb] text-zinc-900"
      }`}
    >
      <div className="flex items-center gap-2">
        {icons.map((item, index) => (
          <div
            key={index}
            className={`p-2 rounded-md cursor-pointer ${
              isDarkMode
                ? "hover:bg-zinc-800 hover:text-yellow-300 duration-300"
                : "hover:bg-zinc-100 hover:text-yellow-300 duration-300"
            }`}
          >
            {item.icon}
          </div>
        ))}
      </div>

      <div className="relative mt-2 sm:mt-0">
        <FaSearch
          className={`absolute top-3 left-2 hover:text-yellow-300 ${
            isDarkMode ? "text-zinc-300" : "text-zinc-400"
          }`}
        />
        <input
          type="text"
          placeholder="Search"
          className={`pl-8 py-2 border rounded-lg w-full sm:w-40 lg:w-52 ${
            isDarkMode
              ? "bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-600"
              : "bg-[#f8f9fb] hover:bg-zinc-200 text-black border-zinc-300"
          }`}
        />
      </div>
    </div>
  );
}


