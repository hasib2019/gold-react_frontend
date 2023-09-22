import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { orderListApi } from '../../../url/ApiList';
import Card from "@/components/ui/Card";

const ShowOrder = () => {
    const [orderData, setOrderData] = useState([])
    const token = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("token")) : null;
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    console.log({orderData})
    useEffect(() => {
        getProduct()
      }, []);
    
      const getProduct = async () => {
        try {
          const getOrderApi = await axios.get(orderListApi, config);
          console.log({ getOrderApi: getOrderApi.data })
          setOrderData(getOrderApi.data.data)
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
                  {orderData.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-200 dark:hover:bg-slate-700">
                      <td className="table-td">{i+1}</td>
                      <td className="table-td">{row?.product_name}</td>
                      <td className="table-td">
                        <img
                          src={row?.product_image}
                          alt="External Image"
                          onError={(e) => {
                            e.target.src = '/path-to-fallback-image.jpg'; // Set a fallback image
                          }}
                          height={'30px'} width={'30px'}
                        />
                      </td>
                      <td className="table-td">{row?.shape}</td>
                      <td className="table-td">{row?.status}</td>
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

export default ShowOrder


// const ShowOrder = () => {
//   const [orderData, setOrderData] = useState([]);
//   console.log({ productData })
//   useEffect(() => {
//     getProduct()
//   }, []);

//   const getProduct = async () => {
//     try {
//       const getOrderApi = await axios.get(orderListApi);
//       console.log({ getOrderApi: getOrderApi.data })
//       setOrderData(getOrderApi.data)
//     } catch (error) {
//       console.log({ error })
//     }
//   }
//   return (

//   );
// };

// export default ShowOrder;
