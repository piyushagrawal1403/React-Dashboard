import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../../Context";

import SidebarHeader from "./SidebarHeader";
import FavoritesRecent from "./FavoritesRecent";
import DashboardList from "./DashboardList";
import PagesMenu from "./PagesMenu";

export default function Sidebar() {
  const { isLeftClose, setIsLeftClose, isDarkMode, activeTab, setActiveTab } = useAuth();

  const [activeTab1, setActiveTab1] = useState("Favorites");

  const favorites = ["Overview", "Projects"];
  const recent = ["Recent Project 1", "Recent Project 2"];

  const sidebarVariants = {
    open: { width: "15rem", opacity: 1, transition: { duration: 0.3, ease: "easeIn" } },
    closed: { width: "0rem", opacity: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={sidebarVariants}
      initial="closed"
      animate={isLeftClose ? "closed" : "open"}
      className={`h-screen font-sans ${isDarkMode ? "bg-zinc-900 text-zinc-300" : "bg-white text-zinc-700"} md:w-52 shadow-lg`}
    >
      <div className={`border-r w-52 ${isDarkMode ? "border-zinc-700" : "border-zinc-200"} ${isLeftClose ? "hidden" : "block"} h-screen p-4 overflow-scroll`}>
        <SidebarHeader setIsLeftClose={setIsLeftClose} />
        <FavoritesRecent setSelectedItem1={setActiveTab} selectedItem1={activeTab} {...{ activeTab1, setActiveTab1, favorites, recent, isDarkMode }} />

        <p className={`text-${isDarkMode ? "zinc-400" : "zinc-500"} mb-2 ml-2 text-md font-normal`}>Dashboards</p>
        <DashboardList activeTab={activeTab} setActiveTab={setActiveTab} isDarkMode={isDarkMode} />

        <p className={`text-${isDarkMode ? "zinc-400" : "zinc-500"} mb-2 ml-2 text-md font-normal`}>Pages</p>
        <PagesMenu activeTab={activeTab} setActiveTab={setActiveTab} isDarkMode={isDarkMode} />
      </div>
    </motion.div>
  );
}
