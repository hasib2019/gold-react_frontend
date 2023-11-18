import React, { useEffect, useState } from "react";
import "@/assets/style.css";
import Button from "../../components/ui/Button";
import Textinput from "../../components/ui/Textinput";
import Textarea from "../../components/ui/Textarea";
import { supportApi } from "../../../url/ApiList";

const Index = () => {
  const [support, setSupport] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [addSupport, setAddSupport] = useState(true);
  const [value, setValue] = useState({
    fName: "",
    email: "",
    description: "",
  });

  useEffect(() => {
    getSupport();
  }, []);

  const getSupport = async () => {
    try {
      const supportData = await axios.get(supportApi, config);
      let data = supportData.data;
      data.sort(function (a, b) {
        return a.id - b.id;
      });
      setSupport(data);
    } catch (error) {
      // console.log({ error });
    }
  };

  const handleChange = (e, data) => {
    setValue({ ...value, [data]: e.target.value });
  };

  const token =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("token"))
      : null;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const onSubmit = async (e) => {
    setIsLoading(true);
    try {
      const dataSend = await axios.post(supportApi, value, config);
      toast.success(dataSend.data.message);
      setIsLoading(false);
      setValue({
        fName: "",
        email: "",
        description: "",
      });
      setAddSupport(true);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="terms">
      <div class="relative flex items-top justify-center min-h-screen dark:bg-gray-900">
        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <div class="grid grid-cols-1 md:grid-cols-2">
              <div class="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                <h1 class="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                  Get in touch
                </h1>
                <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                  Fill in the form to start a conversation
                </p>

                <div class="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    class="w-8 h-8 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div class="ml-4 text-md tracking-wide font-semibold w-40">
                    New GOLD SOQUE, AL DHAGAYA, DEIRA, DUBAI(UNITED ARAB
                    EMIRATES)
                  </div>
                </div>

                <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    class="w-8 h-8 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div class="ml-4 text-md tracking-wide font-semibold w-40">
                    +971 54 217 2624 +971 54 217 2625 +88 01829 041699
                  </div>
                </div>

                <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    class="w-8 h-8 text-gray-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div class="ml-4 text-md tracking-wide font-semibold w-40">
                    info@crystalgolds.com
                  </div>
                </div>
              </div>

              <div class="p-6 flex flex-col justify-center">
                <div class="flex flex-col">
                  <Textinput
                    label="Full Name"
                    type="text"
                    placeholder="Your Full Name..."
                    onChange={(e) => handleChange(e, "fName")}
                    defaultValue={value.fName}
                  />
                  <br />
                  <Textinput
                    label="Email"
                    type="text"
                    placeholder="Your Email..."
                    onChange={(e) => handleChange(e, "email")}
                    defaultValue={value.email}
                  />
                  <br />
                  <Textarea
                    label="Support"
                    type="text"
                    placeholder="Support Description..."
                    onChange={(e) => handleChange(e, "description")}
                    defaultValue={value.description}
                  />
                  <br />
                  <Button
                    text="Submit"
                    className="btn-success"
                    onClick={(e) => onSubmit()}
                    isLoading={isLoading}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
