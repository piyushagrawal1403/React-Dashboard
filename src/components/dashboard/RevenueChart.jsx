import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
  } from "recharts";
  
  export default function RevenueChart({ chartData, revenueData, isDarkMode }) {
    return (
      <div
        className={`w-full md:w-[70%] rounded-3xl pt-8 pb-12 px-8 ${
          isDarkMode
            ? "bg-zinc-800 hover:bg-zinc-700 text-white fade-in"
            : "bg-zinc-100 hover:bg-zinc-200 text-zinc-900 fade-out"
        }`}
      >
        <div className="flex flex-col md:flex-row items-center md:space-x-4 mb-4">
          <h3 className="font-bold">Revenue</h3>
          <span className="h-6 border-l border-zinc-300 hidden md:block"></span>
          {revenueData.map((data, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span>{data.title}</span>
              <span className="font-bold">{data.value}</span>
            </div>
          ))}
        </div>
  
        <div style={{ height: "240px" }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="Projection"
                stroke={isDarkMode ? "#4fc3f7" : "#8884d8"}
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="Actual"
                stroke={isDarkMode ? "#ff7043" : "#82ca9d"}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
  