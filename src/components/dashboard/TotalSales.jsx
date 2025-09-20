import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function TotalSales({ pieChartData, COLORS, isDarkMode }) {
  return (
    <div
      className={`w-full md:w-[30%] rounded-3xl py-6 px-4 ${
        isDarkMode
          ? "bg-zinc-800 hover:bg-zinc-700 text-white fade-in"
          : "bg-zinc-100 hover:bg-zinc-200 text-black fade-out"
      }`}
    >
      <div className="font-bold mb-3">Total Sales</div>
      <ResponsiveContainer width="100%" height={190}>
        <PieChart>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={3}
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <div>
        {pieChartData.map((data, i) => (
          <div key={i} className="flex justify-between py-1">
            <div className="flex items-center gap-2">
              <span
                style={{
                  backgroundColor: COLORS[i],
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                }}
              ></span>
              <span>{data.name}</span>
            </div>
            <span>${data.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
