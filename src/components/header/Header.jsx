import { useState } from "react";
import { useAuth } from "../../Context";
import Breadcrumbs from "./Breadcrumbs";
import SearchBar from "./SearchBar";
import DarkModeToggle from "./DarkModeToggle";
import ActionIcons from "./ActionIcons";
import MobileMenu from "./MobileMenu";
import { FaBars } from "react-icons/fa";
import { LuPanelLeftClose, LuPanelRightClose } from "react-icons/lu";

export default function Header() {
	const { setIsLeftClose, setIsRightClose, isLeftClose, isRightClose, isDarkMode, setIsDarkMode, activeTab } = useAuth();
	const [fade, setFade] = useState(false);
	const [isFilled, setIsFilled] = useState(false);
	const [animate, setAnimate] = useState(false);
	const [rotate, setRotate] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleClockClick = () => { setRotate(true); setTimeout(() => setRotate(false), 700); };
	const handleBellClick = () => { setAnimate(true); setTimeout(() => setAnimate(false), 700); };
	const toggleDarkMode = () => { setFade(true); setTimeout(() => { setIsDarkMode(!isDarkMode); setFade(false); }, 300); };
	const handleStarClick = () => setIsFilled(!isFilled);

	return (
		<div>
			<div className={`w-full h-8 px-6 text-lg border-b-2 p-8 flex justify-between items-center ${isDarkMode ? "bg-zinc-900 border-zinc-700 text-white" : "bg-white border-zinc-300 text-black"} ${fade ? "fade-out" : ""}`}>
				<div className="flex items-center gap-x-5">

					<div className={`${isDarkMode ? " hover:bg-[#FFFFFF20]" : "hover:bg-[rgba(28,28,28,0.1)]"} rounded-xl p-2`}>
						{isLeftClose ? (
							<LuPanelRightClose className="fade-in cursor-pointer" onClick={() => setIsLeftClose(false)} />
						) : (
							<LuPanelLeftClose className="fade-in cursor-pointer" onClick={() => setIsLeftClose(true)} />
						)}
					</div>
					<div className="hidden md:flex items-center gap-x-5">
						<Breadcrumbs {...{ isDarkMode, isFilled, handleStarClick, activeTab }} />
					</div>
					
				</div>

				<div className="flex items-center">
					{/* Mobile toggle */}
					<div className="lg:hidden flex items-center">
						<FaBars onClick={() => setIsMenuOpen(!isMenuOpen)} className="cursor-pointer duration-300 mr-2" />
						{isRightClose ? (
							<LuPanelRightClose className="fade-in" onClick={() => setIsRightClose(false)} />
						) : (
							<LuPanelLeftClose className="fade-in" onClick={() => setIsRightClose(true)} />
						)}
					</div>

					{/* Desktop */}
					<div className="hidden md:flex items-center gap-x-5">
						<SearchBar isDarkMode={isDarkMode} />
						<DarkModeToggle {...{ isDarkMode, toggleDarkMode }}/>
						<ActionIcons {...{ rotate, animate, handleClockClick, handleBellClick, isDarkMode }} />
						<span className={`${isDarkMode ? " hover:bg-[#FFFFFF20]" : "hover:bg-[rgba(28,28,28,0.1)]"} rounded-xl p-2`} >
						{isRightClose ? (
							<LuPanelLeftClose className="fade-in cursor-pointer" onClick={() => setIsRightClose(false)} />
						) : (
							<LuPanelRightClose className="fade-in cursor-pointer" onClick={() => setIsRightClose(true)} />
						)}
						</span>
					</div>
				</div>
				
			</div>

			{isMenuOpen && <MobileMenu {...{ isDarkMode, toggleDarkMode, rotate, animate, handleClockClick, handleBellClick, isFilled, handleStarClick, activeTab }} />}
		</div>
	);
}
