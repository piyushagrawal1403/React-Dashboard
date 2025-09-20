import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
  } from "recharts";
  
  export default function ProjectionsChart({ chartData, isDarkMode }) {
    return (
      <div
        className={`w-full md:w-1/2 flex items-center rounded-3xl justify-center ${
          isDarkMode
            ? "bg-zinc-800 hover:bg-zinc-700 text-white fade-in"
            : "bg-zinc-100 hover:bg-zinc-200 text-zinc-900 fade-out"
        }`}
      >
        <div className="py-6 px-2 rounded-md w-full">
          <h3 className="ml-4 text-start font-bold text-sm md:text-lg">
            Projections vs Actuals
          </h3>
          <div className="mt-4" style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Actual" stackId="a" fill="#a8c5da" />
                <Bar
                  dataKey="Projection"
                  stackId="a"
                  fill="#cedfe9"
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }
  