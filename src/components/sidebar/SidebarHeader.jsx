import { LuPanelLeftClose } from "react-icons/lu";
import profileImg from "/assets/images/profile.png";
import PropTypes from "prop-types";

function SidebarHeader({ setIsLeftClose }) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center">
        <img src={profileImg} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
        <p className="font-medium text-lg">ByeWind</p>
      </div>
      <LuPanelLeftClose
        className="cursor-pointer md:hidden duration-300"
        onClick={() => setIsLeftClose(true)}
      />
    </div>
  );
}

SidebarHeader.propTypes = {
  setIsLeftClose: PropTypes.func.isRequired,
};

export default SidebarHeader;
