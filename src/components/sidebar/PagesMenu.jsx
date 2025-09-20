import ExpandableMenu from "./ExpandableMenu";
import { FaRegIdBadge } from "react-icons/fa";
import { HiOutlineIdentification } from "react-icons/hi";
import { PiUsersThreeDuotone, PiNotebookDuotone, PiChatsTeardropDuotone } from "react-icons/pi";
import menus from "../../data/menus";
import PropTypes from "prop-types";

function PagesMenu({ activeTab, setActiveTab, isDarkMode }) {
  return (
    <ul>
      <ExpandableMenu label="User Profile" Icon={FaRegIdBadge} menuItems={menus.ProfileMenu} {...{ activeTab, setActiveTab, isDarkMode }} />
      <ExpandableMenu label="Account" Icon={HiOutlineIdentification} menuItems={menus.AccountMenu} {...{ activeTab, setActiveTab, isDarkMode }} />
      <ExpandableMenu label="Corporate" Icon={PiUsersThreeDuotone} menuItems={menus.CorporateMenu} {...{ activeTab, setActiveTab, isDarkMode }} />
      <ExpandableMenu label="Blog" Icon={PiNotebookDuotone} menuItems={menus.BlogMenu} {...{ activeTab, setActiveTab, isDarkMode }} />
      <ExpandableMenu label="Social" Icon={PiChatsTeardropDuotone} menuItems={menus.SocialMenu} {...{ activeTab, setActiveTab, isDarkMode }} />
    </ul>
  );
}

PagesMenu.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool,
};

export default PagesMenu;
