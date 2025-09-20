import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Sidebar from "./components/sidebar/Sidebar";
import RightBar from "./components/rightbar/RightBar";
import Header from "./components/header/Header";
import { useAuth } from "./Context";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Table = lazy(() => import("./pages/Table"));

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
    </div>
  );
};

const App = () => {
  const { isRightClose } = useAuth();
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />

        <div className="flex flex-col w-full">
          <Header className="static" />

          <div className=" flex flex-col overflow-y-scroll">
            <Suspense fallback={<Spinner />}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/orders" element={<Table />} />
              </Routes>
            </Suspense>
          </div>
        </div>

        <RightBar />
      </div>
    </Router>
  );
};

export default App;
