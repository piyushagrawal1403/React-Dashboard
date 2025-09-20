import { IoStarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Breadcrumbs({ isDarkMode, isFilled, handleStarClick, activeTab }) {
	return (
		<div className="flex items-center gap-x-5">
			<span className={`${isDarkMode ?  (isFilled ? "bg-[#FFFFFF20]": "hover:bg-[#FFFFFF20]") : (isFilled ? "bg-[rgba(28,28,28,0.1)]":"hover:bg-[rgba(28,28,28,0.1)]")} rounded-xl p-2`} >

				<IoStarOutline
					onClick={handleStarClick}
					className={`cursor-pointer duration-300 ${
						isDarkMode ? "text-white" : "text-zinc-900" 
					}`}
					style={{ fontSize: "18px" }}
				/>
			</span>
			<span>
				<Link to="/" className={`${isDarkMode ? "text-[#FFFFFF66]  hover:bg-[#FFFFFF20]" : "text-[rgba(28,28,28,0.4)]  hover:bg-[rgba(28,28,28,0.1)]"} rounded-xl p-2`}>
					Dashboards
				</Link>
			</span>
			<span>/</span>
			<span className={`${isDarkMode ? "text-white hover:bg-[#FFFFFF20]" : "text-black hover:bg-[rgba(28,28,28,0.1)]" } duration-300 hover:bg-zinc-300 rounded-xl p-2`}>{activeTab}</span>
		</div>
	);
}