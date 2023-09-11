import React, { useState } from "react";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Checkbox from "@/components/ui/Checkbox";
import Button from "@/components/ui/Button";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLoginMutation } from "@/store/api/auth/authApiSlice";
import { setUser } from "@/store/api/auth/authSlice";
import { toast } from "react-toastify";
import { loginApi } from "../../../../url/ApiList";
import axios from "axios";
const schema = yup
  .object({
    email: yup.string().email("Invalid email").required("Email is Required"),
    password: yup.string().required("Password is Required"),
  })
  .required();
const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    //
    mode: "all",
  });
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      setIsLoading(true)
      const response = await axios.post(loginApi, data);
      localStorage.setItem("token", JSON.stringify(response.data.token));
      setIsLoading(false)
      navigate("/dashboard");
      toast.success(response.data.message);
    } catch (error) {
      setIsLoading(false)
      toast.error(error.response.data.message);
    }
  };

  const [checked, setChecked] = useState(true);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
      <Textinput
        name="email"
        label="email"
        defaultValue="hasib.9437.hu@gmail.com"
        type="email"
        register={register}
        error={errors.email}
        className="h-[48px]"
      />
      <Textinput
        name="password"
        label="passwrod"
        type="password"
        defaultValue="12345678"
        register={register}
        error={errors.password}
        className="h-[48px]"
      />
      <div className="flex justify-between">
        {/* <Checkbox
          value={checked}
          onChange={() => setChecked(!checked)}
          label="Keep me signed in"
        /> */}
        {/* <Link
          to="/forgot-password"
          className="text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium"
        >
          Forgot Password?{" "}
        </Link> */}
      </div>

      <Button
        type="submit"
        text="Sign in"
        className="btn btn-dark block w-full text-center "
        isLoading={isLoading}
      />
    </form>
  );
};

export default LoginForm;
