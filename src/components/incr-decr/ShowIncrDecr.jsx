import Card from "@/components/ui/Card";
import Select from "@/components/ui/Select";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { inceDecrApi } from '../../../url/ApiList';
import { toast } from "react-toastify";

const ShowIncrDecr = () => {
  const [incrDecrData, setIncrDecrData] = useState([]);
  console.log({incrDecrData})
  const token = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("token")) : null;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    getIncrDecr()
  }, []);

  const getIncrDecr = async () => {
    try {
      const getOrderApi = await axios.get(inceDecrApi, config);
      setIncrDecrData(getOrderApi.data)
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
                    <th scope="col" className="table-th ">Type Id</th>
                    <th scope="col" className="table-th ">Type</th>
                    <th scope="col" className="table-th ">Money</th>
                    <th scope="col" className="table-th ">Incr Rate</th>
                    <th scope="col" className="table-th ">Decr Rate</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                  {incrDecrData?.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-200 dark:hover:bg-slate-700">
                      <td className="table-td">{i + 1}</td>
                      <td className="table-td">{row?.type_id}</td>
                      <td className="table-td">{row?.type}</td>
                      <td className="table-td">{row?.money}</td>
                      <td className="table-td">{row?.incr}</td>
                      <td className="table-td">{row?.decr}</td>
                      
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

export default ShowIncrDecr