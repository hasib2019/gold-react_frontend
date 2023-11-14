import React, { useEffect, useState } from "react";
import HeaderLogo from "@/assets/images/Crystal.jpg";
import { Link } from "react-router-dom";
import "@/assets/style.css";
import phonePng from "@/assets/images/phone.png";
import whatsappPng from "@/assets/images/whatsapp.png";
import axios from "axios";
import { liveRateApi } from "../../../url/ApiList";
const Home = () => {
  const [liveRateData, setLiveRateData] = useState([]);
  const [previousLiveRateData, setPreviousLiveRateData] = useState([]);
  console.log({ getRate: liveRateData });

  const firstDataGet = async () => {
    try {
      const getRate = await axios.get(liveRateApi);
      setLiveRateData(getRate?.data);
      const updatedData = getRate?.data.map((item) => {
        const updatedItem = {
          ...item,
          ask_buy_color: "green",
          bid_sell_color: "green",
        };
        return updatedItem;
      });
      setPreviousLiveRateData(updatedData);
      setLiveRateData(updatedData);
    } catch (error) {
      // Handle error if needed
      console.error("Error fetching live rates:", error);
    }
  };

  const getLiveRates = async (previousData) => {
    try {
      const getRate = await axios.get(liveRateApi);
      const getRateData = getRate?.data;
      const updatedData = getRateData.map((item, index) => {
        const previousDataItem = previousData[index];
        console.log({ previousDataItem, item });
        const updatedItem = {
          ...item,
          ask_buy_color:
            item?.ask_buy > previousDataItem?.ask_buy ? "green" : "red",
          bid_sell_color:
            item?.bid_sell > previousDataItem?.bid_sell ? "green" : "red",
        };
        return updatedItem;
      });
      setLiveRateData(updatedData);
    } catch (error) {
      // Handle error if needed
      console.error("Error fetching live rates:", error);
    }
  };

  useEffect(() => {
    // Initial call
    firstDataGet();
    const intervalId = setInterval(() => {
      // getLiveRates(previousLiveRateData);
      getLiveRates(liveRateData);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="logo">
        <Link to="/">
          <div className="left">
            <img src={HeaderLogo} alt="" />
            <span>CRYSTAL GOLD</span>
          </div>
        </Link>

        <Link to="/login">
          <button onclick=" window.open('#', '_blank'); return false;">
            &nbsp; Login
          </button>
        </Link>
      </div>
      <div className="menu">
        <div className="menu-item">
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
        </div>
      </div>
      <div style={{ paddingBottom: 30 }}>
        <table className="table-1">
          <tr>
            <th>PRODUCT</th>
            <th>$ BID(SELL)</th>
            <th>$ ASK(BUY)</th>
          </tr>
          <tr>
            <th rowspan="2">{liveRateData[0]?.type}</th>
            <td className={`medium ${liveRateData[0]?.ask_buy_color}`}>
              {liveRateData[0]?.ask_buy}
            </td>
            <td className={`medium ${liveRateData[0]?.bid_sell_color}`}>
              {liveRateData[0]?.bid_sell}
            </td>
          </tr>
          <tr className="font-14">
            <td>
              <span className="red">Low :</span> {liveRateData[0]?.low}
            </td>
            <td>
              <span className="green">High :</span> {liveRateData[0]?.high}
            </td>
          </tr>
        </table>
        <table>
          {liveRateData?.map((item, index) => {
            return (
              item.type !== "GOLD OZ" && (
                <tr key={index}>
                  <th>{item.type}</th>
                  <td className={`w-half ${item?.ask_buy_color}`}>
                    {item?.ask_buy}
                  </td>
                  <td className={`w-half ade ${item?.bid_sell_color}`}>
                    {item?.bid_sell}
                  </td>
                  <td>
                    <div>
                      <span className="medium">{item?.low}</span>
                      <div className="font-12 range">
                        <div>
                          <span className="red">L : </span> {item?.low}
                        </div>
                        <div>
                          <span className="green">H : </span> {item?.high}
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              )
            );
          })}
        </table>
      </div>
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

export default Home;
