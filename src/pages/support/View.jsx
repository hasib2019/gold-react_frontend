import React, { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import axios from "axios";
import { supportApi } from "../../../url/ApiList";
const View = () => {
  const [support, setSupport] = useState([]);
  console.log({ support });
  const token =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("token"))
      : null;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    getSells();
  }, []);

  const getSells = async () => {
    try {
      const sellData = await axios.get(supportApi, config);
      let data = sellData.data;
      console.log({ data });
      data.sort(function (a, b) {
        return a.id - b.id;
      });
      setSupport(data);
    } catch (error) {
      // console.log({ error });
    }
  };

  return (
    <div className="grid xl:grid-cols-1 grid-cols-1 gap-5">
      <Card title="" noborder>
        <div className="overflow-x-auto -mx-6">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden ">
              <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                <thead className="bg-slate-200 dark:bg-slate-700">
                  <tr>
                    <th scope="col" className="table-th ">
                      #Id
                    </th>
                    <th scope="col" className="table-th ">
                      Name
                    </th>
                    <th scope="col" className="table-th ">
                      Email
                    </th>
                    <th scope="col" className="table-th ">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                  {support?.map((row, i) => (
                    <tr
                      key={i}
                      className="hover:bg-slate-200 dark:hover:bg-slate-700"
                    >
                      <td className="table-td">{i + 1}</td>
                      <td className="table-td">{row?.name}</td>
                      <td className="table-td">{row?.email}</td>
                      <td className="table-td">{row?.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default View;
