import React from 'react'
import Data from "../components/Data-atual";

function OdometroIn () {
    return (
        <>
      {/* Header Resume */}
      <section className="bg-blue-600 text-center pt-4 mx-auto sm:bg-blue-600 fixed inset-x-0 shadow-md">
        <div>
          <div>
            <h1 className="text-4xl font-semibold text-gray-50">Odometro In</h1>
          </div>
          <div className="text-center inline-flex py-4">
            <Data />
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center h-screen">
        <div>
          <input
              className="bg-gray-200 py-2 rounded-md text-center text-md text-white"
              type="text" placeholder="€" />
            <button className='bg-blue-700 rounded-sm px-2 py-2 text-white  hover:opacity-50'>Enviar</button>
        </div>
      </div>
      </>
    )
    
}

export default OdometroIn