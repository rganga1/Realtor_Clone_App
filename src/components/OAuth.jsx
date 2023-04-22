import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <button className="flex items-center justify-center w-full h-10 text-sm text-center text-white uppercase transition duration-200 ease-in-out bg-red-500 rounded-md shadow-md hover:bg-red-700 active:bg-red-800 hover:shadow-lg">
      <FcGoogle className="mr-1 text-xl bg-white rounded-full" />
      <p>continue with google</p>
    </button>
  );
}
