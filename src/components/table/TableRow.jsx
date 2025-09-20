import { MdOutlineDateRange } from "react-icons/md";

export default function TableRow({ item, index, isDarkMode }) {
  const getStatusClass = (status) => {
    switch (status) {
      case "In Progress":
        return "text-blue-500";
      case "Complete":
        return "text-green-500";
      case "Pending":
        return "text-[#b1e3fe]";
      case "Approved":
        return "text-[#ffe898]";
      case "Rejected":
        return "text-zinc-500";
      default:
        return "";
    }
  };

  return (
    <tr
      className={`border-b ${
        isDarkMode
          ? "hover:bg-zinc-800 text-white border-zinc-600"
          : "hover:bg-[#f8f9fb] text-black border-zinc-300"
      }`}
    >
      <td className="p-2 whitespace-nowrap">
        <input type="checkbox" className="mx-2 text-lg" />
        {item.orderId}
      </td>
      <td className="p-2 flex items-center gap-2 whitespace-nowrap">
        <img
          src={`https://i.pravatar.cc/30?img=${index + 1}`}
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
        {item.user}
      </td>
      <td className="p-2 whitespace-nowrap">{item.project}</td>
      <td className="p-2 whitespace-normal break-words">{item.address}</td>
      <td className="p-2 flex items-center whitespace-nowrap">
        <MdOutlineDateRange className="mr-2" />
        {item.date}
      </td>
      <td className={`p-2 ${getStatusClass(item.status)} whitespace-nowrap`}>
        {item.status}
      </td>
    </tr>
  );
}
