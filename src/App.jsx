import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

// home pages  & dashboard
//import Dashboard from "./pages/dashboard";
const Login = lazy(() => import("./pages/auth/login"));
const Register = lazy(() => import("./pages/auth/register"));

const Dashboard = lazy(() => import("./pages/dashboard"));
const Ecommerce = lazy(() => import("./pages/ecommerce"));

import AuthLayout from "./layout/AuthLayout";
import Layout from "./layout/Layout";

function App() {
  return (
    <main className="App  relative">
      <Routes>
        {/* admin login layout use  */}
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<Login />} /> {/*  //use this */}
          <Route path="/register" element={<Register />} /> {/*  //use this */}
        </Route>
        {/* dashboard layout use  */}
        <Route path="/*" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="ecommerce" element={<Ecommerce />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
