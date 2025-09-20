import { motion } from "framer-motion";
import { useAuth } from "../Context";

import {
  boxes,
  chartData,
  revenueData,
  tableHeaders,
  tableData,
  pieChartData,
  revenueDataCountry,
  COLORS,
} from "../data/dashboardData";

import BoxCard from "../components/dashboard/BoxCard";
import ProjectionsChart from "../components/dashboard/ProjectionsChart";
import RevenueChart from "../components/dashboard/RevenueChart";
import RevenueByLocation from "../components/dashboard/RevenueByLocation";
import TopSellingProducts from "../components/dashboard/TopSellingProducts";
import TotalSales from "../components/dashboard/TotalSales";

export default function Dashboard() {
  const { isDarkMode } = useAuth();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-4 ${isDarkMode ? "bg-zinc-900 text-white " : "bg-white text-zinc-900"}`}
    >
      <div className="font-bold w-full py-6 px-1">eCommerce</div>

      {/* Boxes + Projections */}
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex flex-wrap gap-4 w-full md:w-1/2">
          {boxes.map((chartData, index) => (
            <BoxCard key={index} chartData={chartData} index={index} isDarkMode={isDarkMode} />
          ))}
        </div>
        <ProjectionsChart chartData={chartData} isDarkMode={isDarkMode} />
      </div>

      {/* Revenue + Location */}
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <RevenueChart chartData={chartData} revenueData={revenueData} isDarkMode={isDarkMode} />
        <RevenueByLocation revenueDataCountry={revenueDataCountry} isDarkMode={isDarkMode} />
      </div>

      {/* Products + Sales */}
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        <TopSellingProducts tableHeaders={tableHeaders} tableData={tableData} isDarkMode={isDarkMode} />
        <TotalSales pieChartData={pieChartData} COLORS={COLORS} isDarkMode={isDarkMode} />
      </div>
    </motion.div>
  );
}
