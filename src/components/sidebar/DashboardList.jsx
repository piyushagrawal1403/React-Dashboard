import PropTypes from "prop-types";
import { PiChartPieSliceLight, PiShoppingBagOpen, PiFolder, PiBookOpenDuotone } from "react-icons/pi";
import ExpandableMenu from "./ExpandableMenu";
import TabItem from "./TabItem";
import menus from "../../data/menus";

function DashboardList({ activeTab, setActiveTab, isDarkMode }) {

  return (
    <ul>
      <TabItem
        label="Default"
        Icon={PiChartPieSliceLight}
        {...{ activeTab, setActiveTab, isDarkMode }}
      />
      <ExpandableMenu label="eCommerce" Icon={PiShoppingBagOpen} menuItems={menus.EcommerceMenu} {...{ activeTab, setActiveTab, isDarkMode }} />
      <ExpandableMenu label="Projects" Icon={PiFolder} menuItems={menus.ProjectsMenu} {...{ activeTab, setActiveTab, isDarkMode }} />
      <ExpandableMenu label="Online Courses" Icon={PiBookOpenDuotone} menuItems={menus.OnlineCoursesMenu} {...{ activeTab, setActiveTab, isDarkMode }} />
    </ul>
  );
}

DashboardList.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool,
};

export default DashboardList;
