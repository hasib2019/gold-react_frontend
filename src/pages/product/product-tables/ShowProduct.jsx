import Card from "@/components/ui/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { productApi } from "../../../../url/ApiList";
import Button from "@/components/ui/Button";
import Textinput from "@/components/ui/Textinput";
import Textarea from "@/components/ui/Textarea";
import DropZone from "./DropZone";

const ShowProduct = () => {
  const [productData, setProductData] = useState([]);
  const [addProduct, setAddProduct] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [value, setValue] = useState({
    product_name: "",
    product_image: "",
    shape: "",
    status: "",
  });

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const getProductApi = await axios.get(productApi);
      setProductData(getProductApi.data);
    } catch (error) {
      // console.log({ error })
    }
  };
  const handleChagne = (e, name) => {
    setValue({ ...value, [name]: e.target.value });
  };

  const onSubmit = () => {
    setIsLoading(false);
  };

  return (
    <div className="grid xl:grid-cols-1 grid-cols-1 gap-5">
      
      {addProduct ? (
        <Card noborder>
          <div className="overflow-x-auto -mx-6">
            <Button
              text="Add News"
              isLoading={isLoading}
              className="m-2 float-right btn-success"
              onClick={() => setAddProduct(false)}
            />
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden ">
                <table className="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
                  <thead className="bg-slate-200 dark:bg-slate-700">
                    <tr>
                      <th scope="col" className="table-th ">
                        #Id
                      </th>
                      <th scope="col" className="table-th ">
                        Product Name
                      </th>
                      <th scope="col" className="table-th ">
                        Product Image
                      </th>
                      <th scope="col" className="table-th ">
                        Shape
                      </th>
                      <th scope="col" className="table-th ">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                    {productData.map((row, i) => (
                      <tr
                        key={i}
                        className="hover:bg-slate-200 dark:hover:bg-slate-700"
                      >
                        <td className="table-td">{row.id}</td>
                        <td className="table-td">{row.product_name}</td>
                        <td className="table-td">
                          <img
                            src={row.product_image}
                            alt="External Image"
                            onError={(e) => {
                              e.target.src = "/path-to-fallback-image.jpg"; // Set a fallback image
                            }}
                            height={"30px"}
                            width={"30px"}
                          />
                        </td>
                        <td className="table-td">{row.shape}</td>
                        <td className="table-td">
                          {row.status == 1 ? "true" : "false"}
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
          <Card title="Product Inputs">
            <div className="grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1 gap-2">
              <Textinput
                label="Product Name"
                type="text"
                placeholder="Product Name"
                onChange={(e) => handleChagne(e, "product_name")}
                defaultValue={value.product_name}
              />
              <Card title="Product image upload">
                <DropZone {...{files, setFiles}} />
              </Card>
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
                onClick={() => setAddProduct(true)}
              />
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ShowProduct;
