import Breadcrumbs from "./Breadcrumbs";
import SearchBar from "./SearchBar";
import DarkModeToggle from "./DarkModeToggle";
import ActionIcons from "./ActionIcons";

export default function MobileMenu({
	isDarkMode,
	toggleDarkMode,
	rotate,
	animate,
	handleClockClick,
	handleBellClick,
	isFilled,
	handleStarClick,
	activeTab
}) {
	return (
		<div className={`lg:hidden flex flex-col p-4 ${isDarkMode ? "bg-zinc-900 text-white" : "bg-white text-black"}`}>
			<Breadcrumbs {...{ isDarkMode, isFilled, handleStarClick, activeTab }} />
			<SearchBar isDarkMode={isDarkMode} />
			<div className="flex justify-start items-center mt-4 gap-x-4">
				<DarkModeToggle {...{ isDarkMode, toggleDarkMode }} />
				<ActionIcons {...{ rotate, animate, handleClockClick, handleBellClick }} />
			</div>
		</div>
	);
}
