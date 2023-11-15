import React, { useEffect, Suspense } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loading from "@/components/Loading";
import HeaderLogo from "@/assets/images/Crystal.jpg";
import { Link } from "react-router-dom";
import phonePng from "@/assets/images/phone.png";
import whatsappPng from "@/assets/images/whatsapp.png";
import "@/assets/style.css";

const HomeLayout = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "black !important", color: "red !important" }}>
      <div className="logo">
        <Link to="/">
          <div className="left">
            <img src={HeaderLogo} alt="" />
            <span>CRYSTAL GOLD</span>
          </div>
        </Link>

        <Link to="/login">
          <button onclick=" window.open('/login', '_blank'); return false;">
            &nbsp; Login
          </button>
        </Link>
      </div>
      <div className="menu">
        <div className="menu-item">
          <Link to="/privacy-policy">
            <div className="left">
              <span>Privacy Policy</span>
            </div>
          </Link>
          <div className="icon">
            {/* <img src="images/phone.png" alt=""> */}
            <img src={phonePng} alt="" />
          </div>
        </div>
        <div className="menu-item">
          <div className="button">
            <button>Live Rates</button>
          </div>
        </div>
        <div className="menu-item">
          <div className="icon">
            {/* <img src="images/whatsapp.png" alt=""> */}
            <img src={whatsappPng} alt="" />
          </div>
          <Link to="/support">
            <div className="left">
              <span>Support</span>
            </div>
          </Link>
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <ToastContainer />
        {<Outlet />}
      </Suspense>
      <div className="footer">
        <div className="left">
          Developed By: <a href="https:creativeitbari.com">Creative IT Bari</a>{" "}
        </div>
        <div className="right">
          <marquee direction="left" scrollamount="3">
            Welcome to Crystal Gold, +971 54 217 2625 (whatsapp), +971 54 217
            2624 (Phone).
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
