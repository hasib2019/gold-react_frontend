import React, { useState, useEffect, Suspense } from "react";
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
  const [uaeTime, setUaeTime] = useState('');
  const [nyTime, setNyTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();

      // UAE time (GMT+4)
      const uaeOptions = {
        timeZone: 'Asia/Dubai',
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      };
      const uaeTimeString = now.toLocaleString('en-US', uaeOptions);
      setUaeTime(uaeTimeString);

      // New York time (GMT-5)
      const nyOptions = {
        timeZone: 'America/New_York',
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      };
      const nyTimeString = now.toLocaleString('en-US', nyOptions);
      setNyTime(nyTimeString);
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#000" }}>
      <div className="logo">
        <Link to="/">
          <div className="left">
            <img src={HeaderLogo} alt="" />
            <span>CRYSTAL GOLD</span>
          </div>
        </Link>

        <div>
      <p className="datetimeuae">UAE: {uaeTime}</p>
    </div>

        <div className="right">
          <div className="menu">
            <div className="menu-item">
              <div className="button">
              <Link to="/">
                <button>Live Rates</button>
              </Link>
              </div>
            </div>

          </div>
        </div>
        <div>
      <p className="datetimeny">NY: {nyTime}</p>
    </div>

        <Link to="/login">
          <button onclick=" window.open('login', '_blank'); return false;">
            &nbsp; Login
          </button>
        </Link>
      </div>
      <hr/>
      <Suspense fallback={<Loading />}>
        <ToastContainer />
        {<Outlet />}
      </Suspense>
      <div className="footer">
        <div className="left">
          Developed By: <a href="https://creativeitbari.com">Creative IT Bari</a>{" "}
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
