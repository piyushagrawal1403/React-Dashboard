import { FaSearch } from "react-icons/fa";

export default function SearchBar({ isDarkMode }) {
	return (
		<div className="relative">
			<FaSearch
				className={`absolute top-3.5 left-2 duration-300 ${
					isDarkMode ? "text-zinc-300" : "text-zinc-400"
				}`}
			/>
			<input
				type="text"
				placeholder="Search"
				className={`pl-8 py-2 border rounded-lg w-full ${
					isDarkMode
						? "bg-zinc-800 hover:bg-zinc-700 text-white border-zinc-600"
						: "bg-[#f8f9fb] hover:bg-zinc-200 text-black border-zinc-300"
				}`}
			/>
		</div>
	);
}
