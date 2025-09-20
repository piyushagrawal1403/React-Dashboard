export default function IconWrapper({ children, bgColor }) {
    return <div className={`p-1 rounded-full mr-2 ${bgColor}`}>{children}</div>;
  }
  