import Card from "@/components/ui/Card";
import React, { useEffect, useState } from 'react'
import { makeSetAlartApi } from '../../../url/ApiList';
import axios from 'axios';

const ShowSetAlart = () => {
    const [setAlartData, setSetAlartData] = useState([])
    console.log({setAlartData})
    useEffect(() => {
        getSetAlartData()
      }, []);
    
      const getSetAlartData = async () => {
        try {
          const getSetAlartDataApi = await axios.get(makeSetAlartApi);
          console.log({ getSetAlartDataApi: getSetAlartDataApi.data })
          setSetAlartData(getSetAlartDataApi.data)
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
                  <th scope="col" className="table-th ">Customar Name</th>
                  <th scope="col" className="table-th ">Mobile No</th>
                  <th scope="col" className="table-th ">Buy Date</th>
                  <th scope="col" className="table-th ">Our Price</th>
                  <th scope="col" className="table-th ">Offer Price</th>
                  <th scope="col" className="table-th ">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                {setAlartData.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-200 dark:hover:bg-slate-700">
                    <td className="table-td">{i + 1}</td>
                    <td className="table-td">{row?.Name}</td>
                    <td className="table-td">{row?.Mobile_no}</td>
                    <td className="table-td">{row?.buy_date}</td>
                    <td className="table-td">{row?.app_price}</td>
                    <td className="table-td">{row?.offer_price}</td>
                    <td className="table-td">{row?.status==1?'True':'false'}</td>
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

export default ShowSetAlart