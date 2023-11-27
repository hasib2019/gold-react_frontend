import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

// home pages  & dashboard
//import Dashboard from "./pages/dashboard";
const Login = lazy(() => import("./pages/auth/login"));
const Register = lazy(() => import("./pages/auth/register"));

const Dashboard = lazy(() => import("./pages/dashboard"));
const Profile = lazy(() => import("./pages/utility/profile"));
const AllProduct = lazy(() => import("./pages/product/all-product"));
const OrderShow = lazy(() => import("./pages/order/show"));
const HistoricalData = lazy(() => import("./pages/historical-data/show"));
const ShowSetAlartData = lazy(() => import("./pages/set-alart/show"));
const IncrDecr = lazy(() => import("./pages/incr-decr/show"));
const AlartNews = lazy(() => import("./pages/alart-news/index"));
const Home = lazy(() => import("./pages/Home/Home"));
const PrivacyPolicy = lazy(() => import("./pages/privacy-policy/Index"));
const Support = lazy(() => import("./pages/support/Index"));
const Buy = lazy(() => import("./pages/buy/index"));
const Sell = lazy(() => import("./pages/sell/index"));
const SupportView = lazy(() => import("./pages/support/View"));

import AuthLayout from "./layout/AuthLayout";
import Layout from "./layout/Layout";
import HomeLayout from "./layout/HomeLayout";

function App() {
  return (
    <main className="App  relative">
      <Routes>
        {/* admin login layout use  */}
        <Route path="/" element={<HomeLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/support" element={<Support />} />
        </Route>
        <Route path="" element={<AuthLayout />}>
          <Route path="/login" element={<Login />} /> {/*  //use this */}
          <Route path="/register" element={<Register />} /> {/*  //use this */}
        </Route>
        {/* dashboard layout use  */}
        <Route path="/*" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="dashboard/profile" element={<Profile />} />
          <Route path="dashboard/all-product" element={<AllProduct />} />
          <Route path="dashboard/order" element={<OrderShow />} />
          <Route path="dashboard/historical-data" element={<HistoricalData />}/>
          <Route path="dashboard/set-alart" element={<ShowSetAlartData />} />
          <Route path="dashboard/incr-decr" element={<IncrDecr />} />
          <Route path="dashboard/alart-news" element={<AlartNews />} />
          <Route path="dashboard/buy" element={<Buy />} />
          <Route path="dashboard/sell" element={<Sell />} />
          <Route path="dashboard/support" element={<SupportView />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
