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
        <div className="firstGoldoz1 bg">{liveRateData[0]?.type}</div>
        <div className="firstGoldoz2 bg"><div>
          <span className={`medium ${liveRateData[0]?.bid_sell_color}`}>
            {liveRateData[0]?.bid_sell}
          </span>
          <div className="font-16 range">
            <div>
              <span className="red">Low : </span> {liveRateData[0]?.low}
            </div>
          </div>
        </div></div>
        <div className="firstGoldoz3 bg">
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
        </div>
      </div>
      <div className="firstTentola">
        <div className="firstTentola1">{liveRateData[4]?.type}</div>
        <div className="firstTentola2 w-half">TTB</div>
        <div className="firstTentola3 ade">AED</div>
        <div className="firstTentola4">
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
        </div>
      </div>
      <div className="firstTentola">
        <div className="firstTentola1 bg">{liveRateData[2]?.type}</div>
        <div className="firstTentola2 bg w-half">1GM</div>
        <div className="firstTentola3 ade">AED</div>
        <div className="firstTentola4 bg">
        <div>
              <span className={`medium ${liveRateData[2]?.ask_buy_color}`}>
                {liveRateData[2]?.ask_buy}
              </span>
              <div className="font-16 range">
                <div>
                  <span className="red">L : </span> {liveRateData[2]?.low}
                </div>
                <div>
                  <span className="green">H : </span> {liveRateData[2]?.high}
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="firstTentola">
        <div className="firstTentola1">{liveRateData[3]?.type}</div>
        <div className="firstTentola2 w-half">1GM</div>
        <div className="firstTentola3 ade">AED</div>
        <div className="firstTentola4">
        <div>
              <span className={`medium ${liveRateData[3]?.ask_buy_color}`}>
                {liveRateData[3]?.ask_buy}
              </span>
              <div className="font-16 range">
                <div>
                  <span className="red">L : </span> {liveRateData[3]?.low}
                </div>
                <div>
                  <span className="green">H : </span> {liveRateData[3]?.high}
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="firstTentola">
        <div className="firstTentola1 bg">{liveRateData[5]?.type}</div>
        <div className="firstTentola2 bg w-half">1KG</div>
        <div className="firstTentola3 ade">AED</div>
        <div className="firstTentola4 bg">
        <div>
              <span className={`medium ${liveRateData[5]?.ask_buy_color}`}>
                {liveRateData[5]?.ask_buy}
              </span>
              <div className="font-16 range">
                <div>
                  <span className="red">L : </span> {liveRateData[5]?.low}
                </div>
                <div>
                  <span className="green">H : </span> {liveRateData[5]?.high}
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="firstTentola">
        <div className="firstTentola1">{liveRateData[6]?.type}</div>
        <div className="firstTentola2 w-half">1KG</div>
        <div className="firstTentola3 ade">AED</div>
        <div className="firstTentola4">
        <div>
              <span className={`medium ${liveRateData[6]?.ask_buy_color}`}>
                {liveRateData[6]?.ask_buy}
              </span>
              <div className="font-16 range">
                <div>
                  <span className="red">L : </span> {liveRateData[6]?.low}
                </div>
                <div>
                  <span className="green">H : </span> {liveRateData[6]?.high}
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
