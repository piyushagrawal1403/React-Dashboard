export default function Section({ title, children, isDarkMode }) {
    return (
      <div>
        <h2
          className={`font-bold text-md mb-2 ${
            isDarkMode ? "text-zinc-100" : "text-zinc-900"
          }`}
        >
          {title}
        </h2>
        <ul>{children}</ul>
      </div>
    );
  }
  