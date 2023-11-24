import Card from "@/components/ui/Card";
import Select from "@/components/ui/Select";
import axios from "axios";
import { useEffect, useState } from "react";
import { inceDecrApi, inceDecrUpdateApi } from "../../../url/ApiList";
import { toast } from "react-toastify";
import Textinput from "@/components/ui/Textinput";
import Textarea from "@/components/ui/Textarea";
import Button from "../ui/Button";
import { Icon } from "@iconify/react";
import Tooltip from "../ui/Tooltip";

const ShowIncrDecr = () => {
  const [incrDecrData, setIncrDecrData] = useState([]);
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
    getIncrDecr();
  }, []);

  const getIncrDecr = async () => {
    try {
      const getOrderApi = await axios.get(inceDecrApi, config);
      let data = getOrderApi.data;
      data.sort(function (a, b) {
        return a.id - b.id;
      });
      setIncrDecrData(data);
    } catch (error) {
      // console.log({ error });
    }
  };

  // from data
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState({
    id: "",
    type_id: "",
    type: "",
    money: "",
    incr: "",
    decr: "",
  });

  const editItem = (data) => {
    setIsEdit(true);
    setValue(data);
  };
  const handleChagne = (e, name) => {
    setValue({ ...value, [name]: e.target.value });
  };

  const onSubmit = async () => {
    try {
      const stausData = await axios.put(inceDecrUpdateApi, value, config);
      toast.success(stausData.data.message);
      getIncrDecr();
      setIsEdit(false);
    } catch (error) {
      setIsEdit(true);
      toast.error("Not updated");
    }
   
  };

  return (
    <div className="grid xl:grid-cols-1 grid-cols-1 gap-5">
      {!isEdit ? (
        <Card title="Incr-Decr" noborder>
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
                        Type Id
                      </th>
                      <th scope="col" className="table-th ">
                        Type
                      </th>
                      <th scope="col" className="table-th ">
                        Money
                      </th>
                      <th scope="col" className="table-th ">
                        Incr Rate
                      </th>
                      <th scope="col" className="table-th ">
                        Decr Rate
                      </th>
                      <th scope="col" className="table-th ">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                    {incrDecrData?.map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-slate-200 dark:hover:bg-slate-700"
                      >
                        <td className="table-td">{i + 1}</td>
                        <td className="table-td">{row?.type_id}</td>
                        <td className="table-td">{row?.type}</td>
                        <td className="table-td">{row?.money}</td>
                        <td className="table-td">{row?.incr}</td>
                        <td className="table-td">{row?.decr}</td>
                        <td className="table-td">
                          <Tooltip
                            content="Edit"
                            placement="top"
                            arrow
                            animation="shift-away"
                          >
                            <button
                              className="action-btn"
                              type="button"
                              onClick={() => editItem(row)}
                            >
                              <Icon icon="heroicons:pencil-square" />
                            </button>
                          </Tooltip>
                        </td>
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
          <Card title="Basic Inputs">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
              <Textinput
                label="TYPE ID"
                type="text"
                placeholder=""
                readonly
                defaultValue={value.type_id}
              />
              <Textinput
                label="TYPE"
                type="text"
                placeholder=""
                readonly
                defaultValue={value.type}
              />
              <Textinput
                label="MONEY"
                type="text"
                placeholder=""
                readonly
                defaultValue={value.money}
              />
              <Textinput
                label="INCR RATE"
                type="text"
                placeholder=""
                onChange={(e) => handleChagne(e, "incr")}
                defaultValue={value.incr}
              />
              <Textinput
                label="DECR RATE"
                type="text"
                placeholder=""
                onChange={(e) => handleChagne(e, "decr")}
                defaultValue={value.decr}
              />
            </div>
            <div className="space-y-4 mt-2">
              <Button text="Submit" className="btn-dark" onClick={()=>onSubmit()} />
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ShowIncrDecr;
