import Image from "next/image";
import Data from "../components/Data-atual";

export default function Colect() {
  return (
    <>
      <div className="sm:mt-24 min-h-screen">
        {/*  */}
        <div className="bg-blue-600 text-center py-6 sm:bg-blue-600 shadow-md">
          <h1 className="text-4xl font-thin tracking-wider text-gray-50">
            Resumo
          </h1>
          <div className="inline-flex mt-4">
            <Data />
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="">
          <div className="text-center bg-blue-600 w-2/4 mx-auto sm:w-1/6 py-6 rounded-lg shadow-md mt-4 mb-8 space-y-2">
            <p className="font-bold text-gray-50 text-3xl sm:text-5xl">€100</p>
            <p className="font-semibold text-gray-50 text-xs">Total/dia</p>
          </div>
          {/*  */}
          {/*  */}
          <div className="flex mt-4 space-x-4 justify-center">
            <div className="sm:px-2 sm:py-6 p-4 rounded-md text-center shadow-md border sm:w-1/6">
              <p className="font-semibold text-2xl">200</p>
              <p className="font-semibold text-xs">Km/dia</p>
            </div>
            {/*  */}
            <div className="sm:px-2 sm:py-6 p-4 rounded-md text-center shadow-md border sm:w-1/6">
              <p className="font-semibold text-2xl">300</p>
              <p className="font-semibold text-xs">M€dia</p>
            </div>
            {/*  */}
            <div className="sm:px-2 sm:py-6 p-4 rounded-md text-center shadow-md border sm:w-1/6">
              <p className="font-semibold text-2xl">400</p>
              <p className="font-semibold text-xs">Km/dia</p>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="flex mt-4 space-x-4 justify-center">
            <div className="sm:px-2 sm:py-6 p-4 rounded-md text-center shadow-md border sm:w-1/6">
              <p className="font-semibold text-2xl">200</p>
              <p className="font-semibold text-xs">Km/dia</p>
            </div>
            {/*  */}
            <div className="sm:px-2 sm:py-6 p-4 rounded-md text-center shadow-md border sm:w-1/6">
              <p className="font-semibold text-2xl">300</p>
              <p className="font-semibold text-xs">M€dia</p>
            </div>
            {/*  */}
            <div className="sm:px-2 sm:py-6 p-4 rounded-md text-center shadow-md border sm:w-1/6">
              <p className="font-semibold text-2xl">400</p>
              <p className="font-semibold text-xs">Km/dia</p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
}
