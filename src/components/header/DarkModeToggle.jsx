import { GoSun } from "react-icons/go";

export default function DarkModeToggle({ isDarkMode, toggleDarkMode }) {
	return (
		<div className={`${isDarkMode ? " hover:bg-[#FFFFFF20]" : "hover:bg-[rgba(28,28,28,0.1)]"} rounded-xl p-2`}>
			<GoSun
				onClick={toggleDarkMode}
				className="cursor-pointer duration-300"
			/>
		</div>
	);
}
