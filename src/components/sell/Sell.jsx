import React, { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import { newsAlartApi } from "../../../url/ApiList";
import axios from "axios";
import Button from "../ui/Button";
import Textinput from "../ui/Textinput";
import { toast } from "react-toastify";

const Sell = () => {
  const [sells, setSells] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [addSells, setAddSells] = useState(true);
  const [value, setValue] = useState({
    sellDate: "",
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
    getSells();
  }, []);

  const getSells = async () => {
    try {
      const sellData = await axios.get(newsAlartApi, config);
      let data = sellData.data;
      data.sort(function (a, b) {
        return a.id - b.id;
      });
      setSells(data);
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
      setAddSells(true);
      getSells();
    } catch (error) {
      toast.error(error.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="grid xl:grid-cols-1 grid-cols-1 gap-5">
      {addSells ? (
        <Card title="" noborder>
          <div className="overflow-x-auto -mx-6">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden ">
                <div className="m-2 float-right">
                  <Button
                    text="Add Sell"
                    isLoading={isLoading}
                    onClick={() => setAddSells(false)}
                  />
                </div>
                <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                  <thead className="bg-slate-200 dark:bg-slate-700">
                    <tr>
                      <th scope="col" className="table-th ">
                        #Id
                      </th>
                      <th scope="col" className="table-th ">
                        Sell Date
                      </th>
                      <th scope="col" className="table-th ">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                    {sells?.map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-slate-200 dark:hover:bg-slate-700"
                      >
                        <td className="table-td">{i + 1}</td>
                        <td className="table-td">{row?.sellDate}</td>
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
          <Card title="Add Sell">
            <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-2">
              <Textinput
                label="Date"
                type="date"
                placeholder="Sell Date"
                onChange={(e) => handleChagne(e, "sellDate")}
                defaultValue={value.sellDate}
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
                onClick={() => setAddSells(true)}
              />
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Sell;
