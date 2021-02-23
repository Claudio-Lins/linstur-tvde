import React from 'react'
import axios from 'axios'
import Data from "../components/Data-atual";
import { response } from 'express';

const Resume = (data) => (
<>
      {/* Header Resume */}
      <section className="bg-blue-600 text-center pt-4 mx-auto sm:bg-blue-600 fixed inset-x-0 shadow-md">
        <div>
          <div>
            <h1 className="text-4xl font-semibold text-gray-50">Resumo</h1>
          </div>
          <div className="text-center inline-flex py-4">
            <Data />
          </div>
        </div>
      </section>

      <div className="flex justify-center items-center h-screen">
        <div className="">
          <div className="text-center p-4 rounded-lg shadow-md mb-2 ">
                <p className='font-bold text-5xl'>€200</p>
                <p className='font-semibold text-xs'>Total/dia</p>
            </div>
          <div>
            <div className="flex space-x-2">
                <div className='bg-gray-100 p-4 rounded-md text-center'>
                  <p className='font-semibold text-3xl'>200</p>
                  <p className='font-semibold text-xs'>Km/dia</p>
                </div>
                <div className='bg-gray-100 p-4 rounded-md text-center'>
                  <p className='font-semibold text-3xl'>111</p>
                  <p className='font-semibold text-xs'>Km/dia</p>
                </div>
                <div className='bg-gray-100 p-4 rounded-md text-center'>
                  <p className='font-semibold text-3xl'>000</p>
                  <p className='font-semibold text-xs'>Km/dia</p>
                </div>
            </div>
          </div>
        </div>
      </div>
  </>  
  );

  // Resume.getInitialProps = async () => {
  //   var response = await axios.get('http://localhost:8080/resume')
    
  //   return {response: response.data}
  // }


export default Resume