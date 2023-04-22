import React, { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  return (
    <>
      <div className="my-6 text-2xl font-bold text-center">Sign In</div>
      <div className="flex flex-col items-center justify-between max-w-screen-lg mx-6 md:flex-row lg:mx-auto">
        <img
          src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357"
          alt="sign in"
          className="rounded-xl md:w-1/2 md:mr-4 lg:mx-12"
        />
        <div className="w-full md:w-1/2 ">
          <form className="flex flex-col space-y-6">
            <input
              type="text"
              className="w-full h-10 p-4 rounded-md"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div className="flex flex-col my-3 space-y-3">
              <button className="w-full h-10 text-sm text-center text-white uppercase transition duration-200 ease-in-out bg-blue-500 rounded-md shadow-md hover:bg-blue-700 active:bg-blue-800 hover:shadow-lg">
                Send reset email
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
