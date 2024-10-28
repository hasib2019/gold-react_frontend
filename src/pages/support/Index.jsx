import React, { useState } from "react";
import "@/assets/style.css";
import Button from "../../components/ui/Button";
import Textinput from "../../components/ui/Textinput";
import Textarea from "../../components/ui/Textarea";
import { supportApi } from "../../../url/ApiList";
import axios from "axios";
import { toast } from "react-toastify";

const index = () => {
  const token =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("token"))
    : null;
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e, data) => {
    setValue({ ...value, [data]: e.target.value });
  };

  const onSubmit = async (e) => {
    setIsLoading(true);
    try {
      await axios.post(supportApi, value, config);
      setIsLoading(false);
      setValue({
        name: "",
        email: "",
        description: "",
      });
      toast.success("Support Added Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
      setIsLoading(false);
    }
  };

  return (
  <div className="support">
  <div class="flex flex-col md:flex-row bg-gray-100 p-8 md:p-16">
  <div class="bg-green-500 p-8 md:w-1/2 rounded-lg shadow-md">
    <img src="/public/cg1.png" />
    <h2 class="text-3xl font-bold mt-2 mb-4">Get in touch</h2>
    <address class="not-italic mb-6">
    <div class="mt-8 space-y-4 text-white">
    <div class="flex items-center space-x-2">
      <i class="fas fa-phone-alt text-white"></i>
      <span>04 264 8866 (Office)</span>
    </div>
    
    <div class="flex items-center space-x-2">
      <i class="fas fa-mobile-alt text-white"></i>
      <span>+971 54 217 2625</span>
    </div>

    <div class="flex items-center space-x-2">
      <i class="fab fa-whatsapp text-white"></i>
      <span>+971 54 217 2613</span>
    </div>

    <div class="flex items-center space-x-2">
      <i class="fas fa-envelope text-white"></i>
      <span class="text-white">crystalgolddubai@gmail.com</span>
    </div>

    <div class="flex items-center space-x-2">
      <i class="fas fa-globe text-white"></i>
      <span>www.crystalgolddubai.com</span>
    </div>

    <div class="flex items-start space-x-2">
      <i class="fas fa-map-marker-alt text-white"></i>
      <span>
        A R Mohammad Noor's Building, F3-F4, 1st Floor, Gold Souq Al Dhagaya, Deira, Dubai, UAE
      </span>
    </div>
  </div>
    </address>
  </div>
  
  <div class="md:w-1/2 md:ml-8 mt-8 md:mt-0">
    
    <form class="bg-white p-8 rounded-lg shadow-md space-y-6">
    <h3 class="text-2xl font-bold text-yellow-500 mb-4">Fill in the form to start a query</h3>
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
        <input id="name" name="name" type="text" placeholder="Your Full Name..." class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input id="email" name="email" type="email" placeholder="Your Email..." class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
      </div>

      <div>
        <label for="support" class="block text-sm font-medium text-gray-700">Support</label>
        <textarea id="support" name="support" rows="4" placeholder="Support Description..." class="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
      </div>

      <div>
        <button type="submit" class="w-full bg-blue-600 text-white font-bold py-3 rounded-md shadow-md hover:bg-blue-700">Submit</button>
      </div>
    </form>
  </div>
</div>

    </div>
  );
};

export default index;
