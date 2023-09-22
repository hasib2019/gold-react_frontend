import Card from "@/components/ui/Card";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { historicalApi } from '../../../url/ApiList';

const Historical = () => {
  const [historicalData, setHistoricalData] = useState([])
  console.log({ historicalData })
  const token = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("token")) : null;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    getHistoricalData()
  }, []);

  const getHistoricalData = async () => {
    try {
      const getHistoricalDataApi = await axios.get(historicalApi + `TEN TOLA BAR&endDate=2023-08-25`);
      console.log({ getHistoricalDataApi: getHistoricalDataApi.data })
      setHistoricalData(getHistoricalDataApi.data)
    } catch (error) {
      console.log({ error })
    }
  }
  return (
    <div className="grid xl:grid-cols-1 grid-cols-1 gap-5">
      <Card title="Hover Table" noborder>
        <div className="overflow-x-auto -mx-6">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                <thead className="bg-slate-200 dark:bg-slate-700">
                  <tr>
                    <th scope="col" className="table-th ">#Id</th>
                    <th scope="col" className="table-th ">Product Type</th>
                    <th scope="col" className="table-th ">Ask Price</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                  {historicalData.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-200 dark:hover:bg-slate-700">
                      <td className="table-td">{i + 1}</td>
                      <td className="table-td">{row?.type}</td>
                      <td className="table-td">{row?.ask_buy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Historical