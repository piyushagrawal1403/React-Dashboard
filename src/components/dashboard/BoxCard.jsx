import { Link } from "react-router-dom";
import { FaArrowTrendUp } from "react-icons/fa6";
import { HiOutlineArrowTrendingDown } from "react-icons/hi2";

export default function BoxCard({ chartData, index, isDarkMode }) {
  let alternateColor ,boxAlignment, textBackgound;
  if (index === 1 || index === 2) {
    alternateColor = isDarkMode
      ? "bg-zinc-800 hover:bg-zinc-700 text-white fade-in"
      : "bg-zinc-100 hover:bg-zinc-200 text-black fade-out";

    textBackgound = isDarkMode ? "hover:bg-zinc-500" : "hover:bg-zinc-300"
  } else {
    alternateColor =
      "bg-blue-100 hover:bg-blue-200 text-black fade-in";
  }

  if (index === 0 || index === 1) {
    boxAlignment = "items-start"
  } else {
    boxAlignment =
      "items-end"
  }

  return (
    <Link
      to={chartData.link}
      className={`flex justify-center ${boxAlignment} h-[47%] w-full md:w-[47%] `}
    >
      <div className={`${alternateColor} h-[95%] w-[90%] py-4 md:p-12 px-6  rounded-3xl duration-1000`}>
        <div className="text-md font-bold">{chartData.name}</div>
        <div className={`mt-4 flex justify-around items-center group rounded-2xl ${textBackgound}`}>
          <span
            className={`text-2xl font-bold order-1 group-hover:order-2 transition-all duration-300 `}
          >
            {chartData.number}
          </span>
          <span
            className={`text-sm flex items-center order-2 group-hover:order-1 ${
              chartData.hike.startsWith("-") ? "text-red-500" : "text-green-500"
            } transition-all duration-300`}
          >
            {chartData.hike}{" "}
            {chartData.hike.startsWith("+") ? (
              <FaArrowTrendUp className="ml-1" />
            ) : (
              <HiOutlineArrowTrendingDown className="ml-1" />
            )}
          </span>
        </div>
      </div>
    </Link>
  );
}
