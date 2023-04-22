import React, { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function ForgotPassword() {
  const [email,setEmail] = useState("");
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
              placeholder="Email address"
              onChange={(e) =>
                setEmail(e.target.value )
              }
              value={email}
            />

            <div className="flex justify-between space-x-3 text-sm whitespace-nowrap">
              <div>
                Don't have an account?
                <Link
                  to="/sign-up"
                  onClick={""}
                  className="ml-1 text-red-600 hover:text-red-700 transition duration-200 ease-in-out">
                  Register
                </Link>
              </div>
              <Link to="/sign" className="text-red-500 ml-3">
                Sign in instead
              </Link>
            </div>
            <OAuth blueButtonData="send reset email" />
          </form>
        </div>
      </div>
    </>
  );
}
