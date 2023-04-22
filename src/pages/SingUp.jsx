import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import OAuth from "../components/OAuth";
export default function SingUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isShown, setIsShown] = useState(false);
  const navigate=useNavigate()
  return (
    <>
      <div className="text-center my-6 text-2xl font-bold">Sign In</div>
      <div className="max-w-screen-lg flex flex-col md:flex-row justify-between items-center mx-6 lg:mx-auto">
        <img
          src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357"
          alt="sign in"
          className="rounded-xl md:w-1/2 md:mr-4 lg:mx-12"
        />
        <div className="w-full md:w-1/2 ">
          <form className="flex flex-col space-y-6">
            <input
              type="text"
              className="h-10 w-full rounded-md p-4"
              placeholder="Full name"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              value={formData.email}
            />
            <input
              type="text"
              className="h-10 w-full rounded-md p-4"
              placeholder="Email address"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
            />
            <div className="relative">
              <input
                type={`${isShown ? "text" : "password"}`}
                className="h-10 w-full rounded-md p-4 mb-4"
                placeholder="Password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                value={formData.password}
              />
              <div
                className="absolute top-3 right-2 text-xl cursor-pointer"
                onClick={() => setIsShown(!isShown)}>
                {isShown ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>

            <div className="flex justify-between space-x-3 text-sm whitespace-nowrap">
              <div>
                Have an account?
                <Link
                  to="/sign-in"
                  onClick={""}
                  className="ml-1 text-red-600 hover:text-red-700 transition duration-200 ease-in-out">
                  Sign in
                </Link>
              </div>
              <Link to="/forgot-password" className="ml-3 text-red-500 cursor-pointer">
                Forgot Password
              </Link>
            </div>
            <OAuth blueButtonData="sign up" />
          </form>
        </div>
      </div>
    </>
  );
}
