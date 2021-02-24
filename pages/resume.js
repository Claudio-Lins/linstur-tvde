import Data from "../components/Data-atual";

export default function Resume() {
  return (
    <div className="justify-center items-center h-screen bg-red-400">
      <div className="container">
        <div className='bg-blue-600'>
          <h1>Resume</h1>

        </div>
      </div>
    </div>
  );
}

/* <div className="bg-blue-600 text-center mx-auto sm:bg-blue-600 shadow-md">
    <div>
    <h1 className="text-4xl font-thin tracking-wider text-gray-50">Resumo</h1>
    </div>
    <div className="text-center inline-flex py-4">
    <Data />
    </div>
    </div>
    
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
    </div> */
// Resume.getInitialProps = async () => {
//   var response = await axios.get('http://localhost:8080/resume')

//   return {response: response.data}
// }
