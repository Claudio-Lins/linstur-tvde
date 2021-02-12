import '../styles/globals.css'

import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFooter'



function MyApp({ Component, pageProps }) {
  return (
    <div className='flex flex-col h-screen'>
      <header className='items-center px-4 border-b'>
        <NavHeader />
        <link rel='manifest' href='/site.webmanifest' />
      </header>
      <main className='flex-1 overflow-y-auto bg-blue-600'>
        <Component {...pageProps} />
      </main>
      <footer className=' sm:hidden flex border-t border-gray-400'>
        <div className='mx-auto'>
          <NavFooter />
        </div>
      </footer>
    </div>
  )
}

export default MyApp