import IconWrapper from "./IconWrapper";

export default function ActivityItem({ activity, isDarkMode }) {
  return (
    <li className={`${isDarkMode ? "text-white": "text-black"} flex items-center mb-4`}>
      <IconWrapper bgColor={isDarkMode ? "bg-blue-600/20" : "bg-blue-200/50"}>
        <img src={activity.avatar} alt="avatar" className="w-6 h-6 rounded-full" />
      </IconWrapper>
      <div>
        <p className="text-xs">{activity.action}</p>
        <p className={`text-xs ${isDarkMode ? "text-zinc-400" : "text-zinc-500"}`}>
          {activity.time}
        </p>
      </div>
    </li>
  );
}
