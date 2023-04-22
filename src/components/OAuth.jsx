import React from "react";
import {FcGoogle} from "react-icons/fc"

export default function OAuth({blueButtonData}) {
  return (
    <div className="my-3 flex flex-col space-y-3">
      <button className="w-full h-10 rounded-md bg-blue-500 hover:bg-blue-700 active:bg-blue-800 transition duration-200 ease-in-out shadow-md hover:shadow-lg  text-center text-white text-sm uppercase">
      {blueButtonData}
      </button>
      <div className="flex items-center px-2 before:border-t-[2px] before:flex-1  before:border-gray-300 after:border-t-[2px] after:flex-1  after:border-gray-300 uppercase">
        <p className="mx-2">or</p>
      </div>
      <button className="w-full h-10 flex justify-center items-center rounded-md bg-red-500 hover:bg-red-700  active:bg-red-800 transition duration-200 ease-in-out shadow-md hover:shadow-lg text-center text-white text-sm uppercase">
        <FcGoogle className="mr-1 rounded-full bg-white text-xl" />
        <p>continue with google</p>
      </button>
    </div>
  );
}
