// Boxes Section
export const boxes = [
    { name: "Customers", number: "3,781", hike: "+11.01%", link: "/" },
    { name: "Orders", number: "1,219", hike: "-0.03%", link: "/orders" },
    { name: "Revenue", number: "$695", hike: "+15.03%", link: "/" },
    { name: "Growth", number: "30.1%", hike: "+6.08%", link: "/" },
  ];
  
  // Table Headers
  export const tableHeaders = [
    { name: "Name", key: "name" },
    { name: "Price", key: "price" },
    { name: "Quantity", key: "quantity" },
    { name: "Amount", key: "amount" },
  ];
  
  // Projection vs Actuals Data
  export const chartData = [
    { name: "Jan", Actual: 18, Projection: 22 },
    { name: "Feb", Actual: 20, Projection: 25 },
    { name: "Mar", Actual: 22, Projection: 23 },
    { name: "Apr", Actual: 24, Projection: 27 },
    { name: "May", Actual: 15, Projection: 20 },
    { name: "Jun", Actual: 19, Projection: 23 },
  ];
  
  // Revenue Summary
  export const revenueData = [
    { title: "Current Week", value: "$58,211" },
    { title: "Previous Week", value: "$68,768" },
  ];
  
  // Top Selling Products Table Data
  export const tableData = [
    { name: "ASOS Ridley High Waist", price: "$79.49", quantity: 82, amount: "$6518.18" },
    { name: "Marco Lightweight Shirt", price: "$128.50", quantity: 37, amount: "$4754.50" },
    { name: "Half Sleeve Shirt", price: "$39.99", quantity: 64, amount: "$2559.36" },
    { name: "Lightweight Jacket", price: "$20.00", quantity: 184, amount: "$3680.00" },
    { name: "Long Sleeve Shirt", price: "$25.50", quantity: 10, amount: "$255.00" },
    { name: "Cotton T-Shirt", price: "$10.99", quantity: 184, amount: "$2023.16" },
    // ... (keep repeating or fetch from API later)
  ];
  
  // Pie Chart Data (Total Sales)
  export const pieChartData = [
    { name: "Direct", value: 300.56 },
    { name: "Affilliate", value: 135.18 },
    { name: "Sponsored", value: 154.02 },
    { name: "E-mail", value: 48.96 },
  ];
  
  // Revenue by Location
  export const revenueDataCountry = [
    { location: "New York", revenue: 72, maxRevenue: 100 },
    { location: "San Francisco", revenue: 39, maxRevenue: 100 },
    { location: "Sydney", revenue: 25, maxRevenue: 100 },
    { location: "Singapore", revenue: 61, maxRevenue: 100 },
  ];
  
  // Chart Colors
  export const COLORS = ["#1c1c1c", "#b9edbd", "#b1e3fe", "#95a4fd"];
  