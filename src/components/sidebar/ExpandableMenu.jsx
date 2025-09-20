import { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronUp, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function ExpandableMenu({ label, Icon, menuItems, activeTab, setActiveTab, isDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="cursor-pointer">
      <div
        className={`flex text-md py-2 pl-3 rounded-lg items-center transition-colors duration-300 ${
          isDarkMode ? "hover:bg-zinc-700" : "hover:bg-zinc-200"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}>
          {isOpen ? (
            <FaChevronUp className={`text-${isDarkMode ? "zinc-400" : "zinc-500"}`} style={{ fontSize: "12px" }} />
          ) : (
            <FaChevronRight className={`text-${isDarkMode ? "zinc-400" : "zinc-500"}`} style={{ fontSize: "12px" }} />
          )}
        </span>
        <Icon className={`mx-2 text-${isDarkMode ? "zinc-300" : "zinc-800"}`} style={{ fontSize: "18px" }} />
        <span className={`text-${isDarkMode ? "zinc-300" : "zinc-800"} text-md font-normal`}>
          {label}
        </span>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="text-md pl-6"
          >
            {menuItems.map((item, index) => (
              <motion.li
                key={index}
                className={`py-2 pl-4 cursor-pointer rounded-lg transition-colors duration-300 ${
                  isDarkMode ? "hover:bg-zinc-600" : "hover:bg-zinc-300"
                } ${activeTab === item ? (isDarkMode ? "active-tab-dark" : "active-tab") : ""}`}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}

ExpandableMenu.propTypes = {
  label: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool,
};

export default ExpandableMenu;
