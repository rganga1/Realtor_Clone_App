import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import OAuth from "../components/OAuth";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { toast } from "react-toastify";

export default function SingIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isShown, setIsShown] = useState(false);
  const navigate = useNavigate();
  const { email, password } = formData;
  // async function onSubmit(e) {e.preventDefault(); console.log('clicked', )}
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      toast.error("Bad user credentials");
    }
  }
  return (
    <>
      <div className="my-6 text-2xl font-bold text-center">Sign In</div>
      <div className="flex flex-col items-center justify-between max-w-screen-lg mx-6 space-y-8 md:space-y-0 md:flex-row lg:mx-auto">
        <img
          src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357"
          alt="sign in"
          className="rounded-xl md:w-1/2 md:mr-4 lg:mx-12"
        />
        <div className="w-full md:w-1/2 ">
          <form className="flex flex-col space-y-6" onSubmit={onSubmit}>
            <input
              type="text"
              className="w-full h-10 p-4 rounded-md"
              placeholder="Email address"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
            />
            <div className="relative">
              <input
                type={`${isShown ? "text" : "password"}`}
                className="w-full h-10 p-4 mb-4 rounded-md"
                placeholder="Password"
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                value={formData.password}
              />
              <div
                className="absolute text-xl cursor-pointer top-3 right-2"
                onClick={() => setIsShown(!isShown)}>
                {isShown ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>

            <div className="flex justify-between space-x-3 text-sm whitespace-nowrap">
              <div>
                Don't have an account?
                <Link
                  to="/sign-up"
                  onClick={""}
                  className="ml-1 text-red-600 transition duration-200 ease-in-out hover:text-red-700">
                  Register
                </Link>
              </div>
              <Link
                to="/forgot-password"
                className="ml-3 text-red-500 cursor-pointer">
                Forgot Password
              </Link>
            </div>
            <div className="flex flex-col my-3 space-y-3">
              <button className="w-full h-10 text-sm text-center text-white uppercase transition duration-200 ease-in-out bg-blue-500 rounded-md shadow-md hover:bg-blue-700 active:bg-blue-800 hover:shadow-lg">
                Sign in
              </button>
              <div className="flex items-center px-2 before:border-t-[2px] before:flex-1  before:border-gray-300 after:border-t-[2px] after:flex-1  after:border-gray-300 uppercase">
                <p className="mx-2">or</p>
              </div>
              <OAuth />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
