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

      <div className="firstDiv">
        <div className="firstDiv1">PRODUCT</div>
        <div className="firstDiv2">$ BID(SELL)</div>
        <div className="firstDiv3">$ ASK(BUY)</div>
      </div>
      <div className="firstGoldoz">
        <div className="firstGoldoz1">{liveRateData[0]?.type}</div>
        <div className="firstGoldoz2"><div>
          <span className={`medium ${liveRateData[0]?.bid_sell_color}`}>
            {liveRateData[0]?.bid_sell}
          </span>
          <div className="font-16 range">
            <div>
              <span className="red">Low : </span> {liveRateData[0]?.low}
            </div>
          </div>
        </div></div>
        <div className="firstGoldoz3"><div>
          <span className={`medium ${liveRateData[0]?.ask_buy_color}`}>
            {liveRateData[0]?.ask_buy}
          </span>
          <div className="font-16 range">
            <div>
              <span className="green">High : </span> {liveRateData[0]?.high}
            </div>
          </div>
        </div></div>
      </div>
      {/* <table>
        <tr>
          <th>PRODUCT</th>
          <th>$ BID(SELL)</th>
          <th>$ ASK(BUY)</th>
        </tr>
        <tr className="goldOz">
          <td>{liveRateData[0]?.type}</td>
          <td>
            <div>
              <span className={`medium ${liveRateData[0]?.bid_sell_color}`}>
                {liveRateData[0]?.bid_sell}
              </span>
              <div className="font-16 range">
                <div>
                  <span className="red">Low : </span> {liveRateData[0]?.low}
                </div>
              </div>
            </div>
          </td>
          <td>
            <div>
              <span className={`medium ${liveRateData[0]?.ask_buy_color}`}>
                {liveRateData[0]?.ask_buy}
              </span>
              <div className="font-16 range">
                <div>
                  <span className="green">High : </span> {liveRateData[0]?.high}
                </div>
              </div>
            </div>
          </td>
        </tr>
      </table>
      <table>
        <tr className="tentolaBar">
          <td>{liveRateData[4]?.type}</td>
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
      </table> */}
      {liveRateData?.map((item, index) => {
        return (
          item.type !== "GOLD OZ" &&
          item.type !== "GOLD" &&
          item.type !== "TEN TOLA BAR" && (
            <table>
              <tr key={index} className="others">
                <td>{item.type}</td>
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
            </table>
          )
        );
      })}

    </div>
  );
};

export default Home;
