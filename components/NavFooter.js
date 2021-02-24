import Image from 'next/image';
import Link from 'next/link';



function NavFooter() {
  return (
    <div className='sm:hidden flex bg-gray-50 justify-evenly items-center fixed bottom-0 w-full'>
      
      <div className='flex border border-gray-400 rounded-full items-center py-2 px-10 my-2 space-x-8'>
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

        <Link href='/colect'>
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
              width={40}
              height={40}
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

export default NavFooter