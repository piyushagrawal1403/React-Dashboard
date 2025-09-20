export default function TopSellingProducts({ tableHeaders, tableData, isDarkMode }) {
    return (
      <div
        className={`w-full md:w-[70%] rounded-3xl overflow-y-scroll py-6 px-4 ${
          isDarkMode
            ? "bg-zinc-800 hover:bg-zinc-700 text-white fade-in"
            : "bg-zinc-100 hover:bg-zinc-200 text-black fade-out"
        }`}
        style={{ maxHeight: "380px" }}
      >
        <div className="font-bold mb-3 ml-3">Top Selling Products</div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-left border-collapse">
            <thead>
              <tr className="text-sm border-b-2 border-[#a9aaac]">
                {tableHeaders.map((header, index) => (
                  <th key={index} className="px-4 py-2">
                    {header.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, i) => (
                <tr key={i}>
                  {tableHeaders.map((header, j) => (
                    <td key={j} className="px-4 py-2">
                      {item[header.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  