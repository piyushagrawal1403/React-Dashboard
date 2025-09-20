import { FaClockRotateLeft, FaRegBell } from "react-icons/fa6";

export default function ActionIcons({ rotate, animate, handleClockClick, handleBellClick, isDarkMode }) {
	return (
		<div className="flex items-center gap-x-4">
			<span className={`${isDarkMode ? " hover:bg-[#FFFFFF20]" : "hover:bg-[rgba(28,28,28,0.1)]"} rounded-xl p-2`}>
				<FaClockRotateLeft
					onClick={handleClockClick}
					className={`cursor-pointer transition-transform duration-300 ${rotate ? "rotate-animation" : ""}`}
					style={{ fontSize: "16px" }}
				/>
			</span>
			<span className={`${isDarkMode ? " hover:bg-[#FFFFFF20]" : "hover:bg-[rgba(28,28,28,0.1)]"} rounded-xl p-2`}>
				<FaRegBell
					onClick={handleBellClick}
					className={`cursor-pointer duration-300 transition-transform ${animate ? "animate-bell" : ""}`}
					style={{ fontSize: "16px" }}
				/>
			</span>
		</div>
	);
}
