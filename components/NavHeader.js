import Image from 'next/image';
import Link from 'next/link';



function Navheader() {
  return (
    <div className='hidden sm:flex justify-evenly items-center bg-gray-50 h-24 top-0 fixed inset-x-0 shadow-lg'>
      <div>
        <h3>LinsTur</h3>
      </div>
      <div className='flex bg-gray-50 border border-gray-400 rounded-full items-center py-2 px-10 my-2 space-x-8 shadow-lg'>
        <Link href='/resume'>
          <a className='w-1/5 text-center'>
            <Image
              src="/icons/relatorio.svg"
              alt="Cash"
              width={30}
              height={30}
            />
          </a>
        </Link>
        <Link href='/odometroin'>
          <a className='w-1/5 text-center'>
            <Image
              src="/icons/odometer.svg"
              alt="Cash"
              width={30}
              height={30}
            />
          </a>
        </Link>

        <Link href='/income'>
          <a className='w-1/5 text-center'>
            <Image
              src="/icons/euro.svg"
              alt="Cash"
              width={30}
              height={30}
            />
          </a>
        </Link>

        <Link href='/combustivel'>
          <a className='w-1/5 text-center'>
            <Image
              src="/icons/gas-station.svg"
              alt="Cash"
              width={30}
              height={30}
            />
          </a>
        </Link>
        <Link href='/'>
          <a className='w-1/5 text-center'>
            <Image
              src="/icons/exit.svg"
              alt="Cash"
              width={30}
              height={30}
            />
          </a>
        </Link>
      </div>
      <div>
    
      </div>
    </div>
  )
}

export default Navheader