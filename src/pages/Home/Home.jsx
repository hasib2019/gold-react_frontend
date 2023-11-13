import React from "react";
import FooterAvatar from "@/assets/images/Crystal.jpg";
import "@/assets/style.css";


const Home = () => {
  return (
    <div>
      <div className="logo">
        <div className="left">
          <img src={FooterAvatar} alt="" />
          <span>CRYSTAL GOLD</span>
        </div>
        <button onclick=" window.open('#', '_blank'); return false;">
          &nbsp; Login
        </button>
      </div>
      <div className="menu">
        <div className="menu-item">
          <div className="icon">
            {/* <img src="images/phone.png" alt=""> */}
            <img src={FooterAvatar} alt="" />
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
            <img src={FooterAvatar} alt="" />
          </div>
        </div>
      </div>
      <div className="table">
        <table className="table-1">
          <tr>
            <th>PRODUCT</th>
            <th>$ BID(SELL)</th>
            <th>$ ASK(BUY)</th>
          </tr>
          <tr>
            <th rowspan="2">GOLD OZ</th>
            <td className="medium">1938.58</td>
            <td className="medium">1939.58</td>
          </tr>
          <tr className="font-14">
            <td>
              <span className="red">Low :</span> 1939.58
            </td>
            <td>
              <span className="green">High :</span> 1939.58
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <th>TEN TOLA BAR</th>
            <td className="w-half">TTB</td>
            <td className="ade w-half">AED</td>
            <td>
              <div>
                <span className="medium">26696.19</span>
                <div className="font-12 range">
                  <div>
                    <span className="red">L : </span> 26696.19
                  </div>
                  <div>
                    <span className="green">H : </span> 26696.19
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>Gold Pure 92</th>
            <td className="w-half">1GM</td>
            <td className="ade w-half">AED</td>
            <td>
              <div>
                <span className="medium">210.78</span>
                <div className="font-12 range">
                  <div>
                    <span className="red">L :</span> 210.78
                  </div>
                  <div>
                    <span className="green">H :</span> 210.78
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>Gold 9999</th>
            <td className="w-half">1GM</td>
            <td className="ade w-half">AED</td>
            <td>
              <div>
                <span className="medium">229.11</span>
                <div className="font-12 range">
                  <div>
                    <span className="red">L :</span> 229.11
                  </div>
                  <div>
                    <span className="green">H :</span> 229.11
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>KILO BAR 995</th>
            <td className="w-half">1KG</td>
            <td className="ade w-half">AED</td>
            <td>
              <div>
                <span className="medium">230026.94</span>
                <div className="font-12 range">
                  <div>
                    <span className="red">L :</span> 230026.94
                  </div>
                  <div>
                    <span className="green">H :</span> 230026.94
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th>KILO BAR 9999</th>
            <td className="w-half">1KG</td>
            <td className="ade w-half">AED</td>
            <td>
              <div>
                <span className="medium">229105.91</span>
                <div className="font-12 range">
                  <div>
                    <span className="red">L :</span> 229105.91
                  </div>
                  <div>
                    <span className="green">H :</span> 229105.91
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div className="footer">
        <div className="left">Developed By: GWS-TECH Solutions Ltd</div>
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
