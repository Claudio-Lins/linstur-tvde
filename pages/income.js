import Image from "next/image"
import Link from 'next/link'

function Income() {
    return (
        <>
            
            <div id='overlay' className='bg-black bg-opacity-50 flex justify-center items-center absolute inset-0'>
                <div className=' bg-gray-50 rounded-lg'>
                    <div className='flex mx-4 justify-between items-center'>
                        <h4 className='mx-auto text-4xl font-bold py-2'>Entradas €</h4>
                        <Link href='/'>
                            <a>
                        <svg className='w-5 h-5' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                       
                        </a> 
                        </Link>
                    </div>
                    <div className='border-t-2 border-b-2 p-2 text-center'>
                        <input className='text-center text-3xl py-8'
                            type="text"
                            placeholder="€"
                        />
                    </div>
                    <div className='flex justify-evenly px-2 py-4 space-x-2'>
                        <div>
                            <button
                                className="hover:opacity-50"
                                type="submit"
                            >
                                <Image src="/plataformas/Uber.svg" alt="Cash" width={50} height={50} />
                            </button>
                        </div>
                        <div>
                            <button
                                className="hover:opacity-50"
                                type="submit"
                            >
                                <Image src="/plataformas/Bolt.png" alt="Cash" width={50} height={50} />
                            </button>
                        </div>
                        <div>
                            <button
                                className="hover:opacity-50"
                                type="submit"
                            >
                                <Image src="/plataformas/FreeNow.svg" alt="Cash" width={50} height={50} />
                            </button>
                        </div>
                        <div>
                            <button
                                className="hover:opacity-50"
                                type="submit"
                            >
                                <Image src="/plataformas/UberEats.svg" alt="Cash" width={50} height={50} />
                            </button>
                        </div>
                        <div>
                            <button
                                className="hover:opacity-50"
                                type="submit"
                            >
                                <Image src="/plataformas/Cash.svg" alt="Cash" width={50} height={50} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default Income