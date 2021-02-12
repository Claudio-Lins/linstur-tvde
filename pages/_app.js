import '../styles/globals.css'

import Navheader from '../components/Navheader'



function MyApp({ Component, pageProps }) {
  return (
    <div className='flex flex-col h-screen'>
      <header className='items-center px-4 border-b'>
        <Navheader />
        <link rel='manifest' href='/site.webmanifest' />
      </header>
      <main className='flex-1 overflow-y-auto'>
        <Component {...pageProps} />
      </main>
      <footer className=' sm:hidden flex border-t border-gray-400'>
        <div className='mx-auto'>
          FOOTER
        </div>
      </footer>
    </div>
  )
}

export default MyApp