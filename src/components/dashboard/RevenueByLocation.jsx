import lightMap from "/assets/images/lightMap.png";
import darkMap from "/assets/images/darkMap.png";

export default function RevenueByLocation({ revenueDataCountry, isDarkMode }) {
  return (
    <div
      className={`w-full md:w-[30%] rounded-3xl py-6 px-4 ${
        isDarkMode
          ? "bg-zinc-800 hover:bg-zinc-700 text-white fade-in"
          : "bg-zinc-100 hover:bg-zinc-200 text-zinc-900 fade-out"
      }`}
    >
      <h6 className="text-md font-semibold text-center mb-4">
        Revenue by Location
      </h6>

      <div className="relative w-full h-56 rounded-3xl overflow-hidden mb-4">
        <img
          src={isDarkMode ? darkMap : lightMap}
          alt="map"
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>

      <div>
        {revenueDataCountry.map((data, index) => (
          <div key={index} className="mb-2">
            <div className="flex justify-between text-sm">
              <span>{data.location}</span>
              <span>{data.revenue}K</span>
            </div>
            <div className={`w-full h-2 ${isDarkMode ? "bg-zinc-700" : "bg-gray-200"} rounded-full`}>
              <div
                className="h-2 bg-blue-500 rounded-full"
                style={{ width: `${(data.revenue / data.maxRevenue) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
