import Data from "../components/Data-atual";

export default function Resume() {
  return (
    <div className="justify-center items-center h-screen bg-red-400">
      <div className="bg-blue-600">
        <div>
          <h1>Resume</h1>
        </div>
      </div>
    </div>
  );
}

/* 
    
    
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
