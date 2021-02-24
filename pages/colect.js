import Image from "next/image";
import Data from "../components/Data-atual";

export default function Colect() {
  return (
    <div className="flex bg-blue-600 mx-auto justify-center sm:items-center h-screen">
      <div className="w-4/6 sm:w-2/6">
        <div className="flex justify-center mt-12 mb-1">
          <Data />
        </div>
        <div className="text-center mx-auto mb-4 font-thin tracking-wider text-3xl text-gray-50">
          <h1>Colect</h1>
          <form className="px-4">
            <input
              type="date"
              placeholder="DD/MM/AAA"
              class=" text-xs text-center rounded-md p-1 w-3/4 text-blue-500"
            />
          </form>
        </div>
        <div className="space-y-8 px-8 py-6 bg-gray-100 rounded-lg shadow-md">
          <div>
            <p className="flex items-center font-bold text-lg">
              <Image
                src="/plataformas/Uber.svg"
                alt="Uber"
                width={50}
                height={50}
              />
              <input
                type="number"
                placeholder="€"
                className="ml-2 py-1 text-center outline-none shadow rounded-md w-full"
              />
              {/* <button className="py-1 px-3 ml-2 bg-blue-600 rounded-md text-white hover:shadow-md hover:bg-blue-800">
              €
            </button> */}
            </p>
          </div>

          <div>
            <p className="flex items-center font-bold text-lg">
              <Image
                src="/plataformas/Bolt.svg"
                alt="Uber"
                width={50}
                height={50}
              />
              <input
                type="number"
                placeholder="€"
                className="ml-2 py-1 text-center outline-none shadow rounded-md w-full"
              />
              {/* <button className="py-1 px-3 ml-2 bg-blue-600 rounded-md text-white hover:shadow-md hover:bg-blue-800">
              €
            </button> */}
            </p>
          </div>

          <div>
            <p className="flex items-center font-bold text-lg">
              <Image
                src="/plataformas/FreeNow.svg"
                alt="Uber"
                width={50}
                height={50}
              />
              <input
                type="number"
                placeholder="€"
                className="ml-2 py-1 text-center outline-none shadow rounded-md w-full"
              />
              {/* <button className="py-1 px-3 ml-2 bg-blue-600 rounded-md text-white hover:shadow-md hover:bg-blue-800">
              €
            </button> */}
            </p>
          </div>

          <div>
            <p className="flex items-center font-bold text-lg">
              <Image
                src="/plataformas/UberEats.svg"
                alt="Uber"
                width={50}
                height={50}
              />
              <input
                type="number"
                placeholder="€"
                className="ml-2  py-1 text-center outline-none shadow rounded-md w-full"
              />
              {/* <button className="py-1 px-3 ml-2 bg-blue-600 rounded-md text-white hover:shadow-md hover:bg-blue-800">
              €
            </button> */}
            </p>
          </div>

          <div>
            <p className="flex items-center font-bold text-lg">
              <Image
                src="/plataformas/Cash.svg"
                alt="Uber"
                width={50}
                height={50}
              />
              <input
                type="number"
                placeholder="€"
                className="ml-2 py-1 text-center outline-none shadow rounded-md w-full"
              />
              {/* <button className="py-1 px-3 ml-2 bg-blue-600 rounded-md text-white hover:shadow-md hover:bg-blue-800">
              €
            </button> */}
            </p>
          </div>
        </div>
        <button className="py-1 px-3 w-full mt-4 bg-gray-50 rounded-md text-blue-600 hover:shadow-md hover:bg-blue-800">
          €nviar
        </button>
      </div>
    </div>
  );
}
