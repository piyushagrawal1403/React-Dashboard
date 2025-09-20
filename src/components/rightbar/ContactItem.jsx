import IconWrapper from "./IconWrapper";

export default function ContactItem({ contact, index, isDarkMode }) {
  return (
    <li className={`${isDarkMode ? "text-white": "text-black"} flex items-center mb-3 `}>
      <IconWrapper bgColor={isDarkMode ? "bg-purple-600/20" : "bg-purple-200/50"}>
        <img
          src={`https://i.pravatar.cc/30?img=${index + 20}`}
          alt="avatar"
          className="w-6 h-6 rounded-full"
        />
      </IconWrapper>
      <div>
        <p className="text-sm">{contact.user}</p>
      </div>
    </li>
  );
}
