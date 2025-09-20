import { PiBugBeetle, PiUser, PiBroadcast } from "react-icons/pi";
import IconWrapper from "./IconWrapper";

export default function NotificationItem({ notif, isDarkMode }) {
  const icons = {
    bug: <PiBugBeetle className="text-black" style={{ fontSize: "18px" }} />,
    user: <PiUser className="text-black" style={{ fontSize: "18px" }} />,
    subscribe: <PiBroadcast className="text-black" style={{ fontSize: "18px" }} />,
  };

  const bgColors = {
    bug: "bg-[#E3F5FF]",
    user: "bg-[#E5ECF6]",
    subscribe: "bg-[#E5ECF6]",
  };

  return (
    <li className="flex items-center mb-4">
      <IconWrapper bgColor={bgColors[notif.type]}>
        {icons[notif.type]}
      </IconWrapper>
      <div>
        <p className={`text-xs ${isDarkMode ? "text-white" : "text-black"}`}>
          {notif.message}
        </p>
        <p className={`text-xs ${isDarkMode ? "text-white" : "text-black"}`}>
          {notif.time}
        </p>
      </div>
    </li>
  );
}
