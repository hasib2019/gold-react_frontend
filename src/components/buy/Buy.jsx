import React, { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import { newsAlartApi } from "../../../url/ApiList";
import axios from "axios";
import Button from "../ui/Button";
import Textinput from "../ui/Textinput";
import { toast } from "react-toastify";

const Buy = () => {
  const [buys, setbuys] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [addbuys, setAddbuys] = useState(true);
  const [value, setValue] = useState({
    buyDate: "",
    price: "",
  });

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
    getbuys();
  }, []);

  const getbuys = async () => {
    try {
      const buyData = await axios.get(newsAlartApi, config);
      let data = buyData.data;
      data.sort(function (a, b) {
        return a.id - b.id;
      });
      setbuys(data);
    } catch (error) {
      // console.log({ error });
    }
  };

  const handleChagne = (e, data) => {
    setValue({ ...value, [data]: e.target.value });
  };

  const onSubmit = async (e) => {
    setIsLoading(true);
    try {
      const dataSend = await axios.post(newsAlartApi, value, config);
      toast.success(dataSend.data.message);
      setIsLoading(false);
      setValue({
        buyDate: "",
        price: "",
      });
      setAddbuys(true);
      getbuys();
    } catch (error) {
      toast.error(error.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="grid xl:grid-cols-1 grid-cols-1 gap-5">
      {addbuys ? (
        <Card title="" noborder>
          <div className="overflow-x-auto -mx-6">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden ">
                <div className="m-2 float-right">
                  <Button
                    text="Add Buy"
                    isLoading={isLoading}
                    onClick={() => setAddbuys(false)}
                  />
                </div>
                <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                  <thead className="bg-slate-200 dark:bg-slate-700">
                    <tr>
                      <th scope="col" className="table-th ">
                        #Id
                      </th>
                      <th scope="col" className="table-th ">
                        Buy Date
                      </th>
                      <th scope="col" className="table-th ">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                    {buys?.map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-slate-200 dark:hover:bg-slate-700"
                      >
                        <td className="table-td">{i + 1}</td>
                        <td className="table-td">{row?.buyDate}</td>
                        <td className="table-td">{row?.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Card>
      ) : (
        <div className="grid xl:grid-cols-1 gap-5">
          <Card title="Add Buy">
            <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-2">
              <Textinput
                label="Date"
                type="Date"
                placeholder="Buy Date"
                onChange={(e) => handleChagne(e, "buyDate")}
                defaultValue={value.buyDate}
              />
              <Textinput
                label="Price"
                type="text"
                placeholder="Today Sell Price"
                onChange={(e) => handleChagne(e, "price")}
                defaultValue={value.price}
              />
            </div>
            <div className="space-y-4 mt-2">
              <Button
                text="Submit"
                className="btn-success"
                onClick={(e) => onSubmit()}
                isLoading={isLoading}
              />
              <Button
                text="Back"
                className="btn-dark ml-2"
                onClick={() => setAddbuys(true)}
              />
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Buy;
