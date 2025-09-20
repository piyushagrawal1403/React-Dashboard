import PropTypes from "prop-types";

function TabItem({ label, Icon, activeTab, setActiveTab, isDarkMode }) {
  const isActive = activeTab === label;

  return (
    <li
      key={label}
      className={`flex items-center text-md py-2 pl-4 cursor-pointer rounded-lg transition-colors duration-300 ${
        isActive
          ? isDarkMode
            ? "active-tab-dark"
            : "active-tab"
          : `hover:bg-${isDarkMode ? "zinc-700" : "zinc-200"}`
      }`}
      onClick={() => setActiveTab(label)}
    >
      {Icon && (
        <Icon
          className={`mr-2 text-${isDarkMode ? "zinc-300" : "zinc-800"}`}
          style={{ fontSize: "18px" }}
        />
      )}
      <span
        className={`text-${isDarkMode ? "zinc-300" : "zinc-800"} text-md font-normal`}
      >
        {label}
      </span>
    </li>
  );
}

TabItem.propTypes = {
  label: PropTypes.string.isRequired,
  Icon: PropTypes.elementType,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool,
};

export default TabItem;
