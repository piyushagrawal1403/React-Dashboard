import PropTypes from "prop-types";

function FavoritesRecent({ activeTab1, setActiveTab1, selectedItem1, setSelectedItem1, favorites, recent, isDarkMode }) {
  const items = activeTab1 === "Favorites" ? favorites : recent;

  return (
    <div className="mb-4 ml-2">
      <div className="flex mb-2">
        <button
          className={`mr-4 ${
            activeTab1 === "Favorites"
              ? isDarkMode ? "text-zinc-100" : "text-zinc-400"
              : "text-zinc-300"
          } ${isDarkMode ? " hover:bg-[#FFFFFF20]" : "hover:bg-[rgba(28,28,28,0.1)]"} rounded-xl p-2`}
          onClick={() => setActiveTab1("Favorites")}
        >
          Favorites
        </button>
        <button
          className={`${
            activeTab1 === "Recent"
              ? isDarkMode ? "text-zinc-100" : "text-zinc-400"
              : "text-zinc-300 "
          } ${isDarkMode ? " hover:bg-[#FFFFFF20]" : "hover:bg-[rgba(28,28,28,0.1)]"} rounded-xl p-2`}
          onClick={() => setActiveTab1("Recent")}
        >
          Recent
        </button>
      </div>
      <ul>
        {items.map((item) => (
          <li
            key={item}
            onClick={() => setSelectedItem1(item)}
            className={`flex items-center text-md py-2 pl-1 cursor-pointer transition-colors duration-200 ease-in-out ${
              selectedItem1 === item
                ? isDarkMode ? "bg-zinc-800 text-white" : "bg-zinc-100 text-black"
                : isDarkMode ? "hover:bg-zinc-700 text-white" : "hover:bg-zinc-200 text-zinc-500"
            } rounded-lg`}
          >
            <span
              className={`rounded-full h-2 w-2 ${
                selectedItem1 === item ? (isDarkMode ? "bg-zinc-300" : "bg-zinc-700") : "bg-zinc-300"
              } mr-2`}
            ></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

FavoritesRecent.propTypes = {
  activeTab1: PropTypes.string.isRequired,
  setActiveTab1: PropTypes.func.isRequired,
  selectedItem1: PropTypes.string.isRequired,
  setSelectedItem1: PropTypes.func.isRequired,
  favorites: PropTypes.array.isRequired,
  recent: PropTypes.array.isRequired,
  isDarkMode: PropTypes.bool,
};

export default FavoritesRecent;
