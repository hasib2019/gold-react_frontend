import React, { useEffect, useState } from "react";
import "@/assets/style.css";
import axios from "axios";
import { liveRateApi } from "../../../url/ApiList";

const Home = () => {
  const [liveRateData, setLiveRateData] = useState([]);
  const [previousLiveRateData, setPreviousLiveRateData] = useState([]);

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
      console.error("Error fetching live rates:", error);
    }
  };

  let previousData = [];

  const getLiveRates = async () => {
    try {
      const getRate = await axios.get(liveRateApi);
      const getRateData = getRate?.data;
      if (previousData.length === getRateData.length) {
        const updatedData = getRateData.map((item, index) => {
          const previousDataItem = previousData[index];
          const updatedItem = {
            ...item,
            ask_buy_color:
              item?.ask_buy === previousDataItem?.ask_buy ? "black" : item?.ask_buy < previousDataItem?.ask_buy ? "red" : "green",
            bid_sell_color:
              item?.bid_sell === previousDataItem?.bid_sell ? "black" : item?.bid_sell < previousDataItem?.bid_sell ? "red" : "green",
          };
          return updatedItem;
        });
        setLiveRateData(updatedData);
      } else {
        console.log("Previous data doesn't match the length of new data.");
      }
      previousData = getRateData;
    } catch (error) {
      console.error("Error fetching live rates:", error);
    }
  };

  useEffect(() => {
    firstDataGet();
    const intervalId = setInterval(() => {
      getLiveRates(liveRateData);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ paddingBottom: 30 }}>

      <table>
        <tr>
          <th>PRODUCT</th>
          <th>$ BID(SELL)</th>
          <th>$ ASK(BUY)</th>
        </tr>
        <tr>
          <td rowspan="2" className="goldoz">{liveRateData[0]?.type}</td>
          <td className={`medium ${liveRateData[0]?.bid_sell_color}`}>
            {liveRateData[0]?.bid_sell}
          </td>
          <td className={`medium ${liveRateData[0]?.ask_buy_color}`}>
            {liveRateData[0]?.ask_buy}
          </td>
        </tr>
        <tr className="font-16">
          <td className="low">
            <span className="red">Low :</span> {liveRateData[0]?.low}
          </td>
          <td className="high">
            <span className="green">High :</span> {liveRateData[0]?.high}
          </td>
        </tr>
      </table>
      <table className="table-2">
        <tr>
          <td className="tentolabar">{liveRateData[4]?.type}</td>
          <td className={`w-half`}>TTB</td>
          <td className={`w-half ade`}>AED</td>
          <td>
            <div>
              <span className={`medium ${liveRateData[4]?.ask_buy_color}`}>
                {liveRateData[4]?.ask_buy}
              </span>
              <div className="font-16 range">
                <div>
                  <span className="red">L : </span> {liveRateData[4]?.low}
                </div>
                <div>
                  <span className="green">H : </span> {liveRateData[4]?.high}
                </div>
              </div>
            </div>
          </td>
        </tr>
        {liveRateData?.map((item, index) => {
          return (
            item.type !== "GOLD OZ" &&
            item.type !== "GOLD" &&
            item.type !== "TEN TOLA BAR" && (
              <tr key={index}>
                <td className="others">{item.type}</td>
                <td className={`w-half`}>
                  {item.type == "KILO BAR 995"
                    ? "1KG"
                    : item.type == "KILO BAR 9999"
                      ? "1KG"
                      : "1GM"}
                </td>
                <td className={`w-half ade`}>AED</td>
                <td className="t-half">
                  <div>
                    <span className={`medium ${item?.ask_buy_color}`}>
                      {item?.ask_buy}
                    </span>
                    <div className="font-16 range">
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
  );
};

export default Home;
