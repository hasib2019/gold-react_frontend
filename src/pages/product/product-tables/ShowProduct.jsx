import Card from "@/components/ui/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { productApi } from "../../../../url/ApiList";

const ShowProduct = () => {
  const [productData, setProductData] = useState([]);
  console.log({ productData })
  useEffect(() => {
    getProduct()
  }, []);

  const getProduct = async () => {
    try {
      const getProductApi = await axios.get(productApi);
      console.log({ getProductApi: getProductApi.data })
      setProductData(getProductApi.data)
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
                    <th scope="col" className="table-th ">Product Name</th>
                    <th scope="col" className="table-th ">Product Image</th>
                    <th scope="col" className="table-th ">Shape</th>
                    <th scope="col" className="table-th ">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
                  {productData.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-200 dark:hover:bg-slate-700">
                      <td className="table-td">{row.id}</td>
                      <td className="table-td">{row.product_name}</td>
                      <td className="table-td">
                        <img
                          src={row.product_image}
                          alt="External Image"
                          onError={(e) => {
                            e.target.src = '/path-to-fallback-image.jpg'; // Set a fallback image
                          }}
                          height={'30px'} width={'30px'}
                        />
                      </td>
                      <td className="table-td">{row.shape}</td>
                      <td className="table-td">{row.status == 1 ? 'true' : 'false'}</td>
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

export default ShowProduct;
