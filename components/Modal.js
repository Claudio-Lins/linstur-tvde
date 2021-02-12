
import Image from 'next/image'

function ModalExample() {
    return (
        
        <>
            <div>
                <button id="modal-btn">
                <Image
                    src="/icons/euro.svg" 
                    alt="Cash" 
                    width={30} 
                    height={30} />
                </button>

                <div className="bg-black bg-opacity-50 absolute inset-0 hidden justify-center items-center" id="overlay">
                    <div className="bg-gray-200 py-2 px-3 rounded shadow-xl text-gray-800">
                        
                    <div className='flex justify-between items-center py-2'>
                        <div>
                        <h4 className='text-4xl font-bold'>Entradas €</h4>
                        </div>
                        <div>
                        <svg className='w-8 h-8 cursor-pointer' id='close-modal' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </div>
                    </div>

                    <div className='border-t-2 border-b-2 text-center'>
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
            </div>

        </>

    )

}

export default ModalExample

if (typeof window !== "undefined") {
window.addEventListener('DOMContentLoaded', () => {
    const overlay = document.querySelector('#overlay')
    const modalBtn = document.querySelector('#modal-btn')
    const closeBtn = document.querySelector('#close-modal')

    const toggleModal = () => {
        overlay.classList.toggle('hidden')
        overlay.classList.toggle('flex')
    }

    modalBtn.addEventListener('click', toggleModal)

    closeBtn.addEventListener('click', toggleModal)
})
}