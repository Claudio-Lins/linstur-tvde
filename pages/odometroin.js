import React from 'react'
import Data from "../components/Data-atual";
import Image from 'next/image'

function OdometroIn() {
  return (
    <>
   
      {/* Header Resume */}
      <div className="bg-blue-600 text-center pt-4 mx-auto sm:bg-blue-600 fixed inset-x-0 top-0 sm:top-24 shadow-md">
        <div>
          <div>
            <h1 className="text-4xl font-semibold text-gray-50">Odometro In</h1>
          </div>
          <div className="text-center inline-flex py-4">
            <Data />
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-48">
        <div className=' bg-blue-700 rounded-lg shadow-md border-2 w-86 p-4'>
          <div>
            <div class="flex mb-4">
              <div class="rounded-l flex text-white items-center px-4 bg-gray-300">
              <Image
              src="/icons/tachometer.svg"
              alt="tachometer"
              width={70}
              height={70}
            />
              </div>
              <input
                min="0"
                step="0.01"
                placeholder="Km Ínicio"
                class="border border-gray-400 px-2 py-4 rounded-r w-full focus:outline-none focus:border-teal-400"
                type="number"
                name="odometroIn"
                id="odometroIn"
              />
              <button className='bg-blue-700 rounded-sm px-2 py-2 text-white  hover:opacity-50'>Enviar</button>
            </div>

            <div class="flex">
              <div class="rounded-l flex text-white items-center px-4 bg-gray-300">
              <Image
              src="/icons/tachometer.svg"
              alt="tachometer"
              width={70}
              height={70}
            />
              </div>
              <input
                min="0"
                step="0.01"
                placeholder="Km Final"
                class="border border-gray-400 px-2 py-4 rounded-r w-full focus:outline-none focus:border-teal-400"
                type="number"
                name="odometroIn"
                id="odometroIn"
              />
              <button className='bg-blue-700 rounded-sm px-2 py-2 text-white  hover:opacity-50'>Enviar</button>
            </div> 
          </div>
        </div>
      </div>
      
    </>
  )

}

export default OdometroIn