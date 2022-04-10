import '../styles/globals.css'
import Link from 'next/link'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-zinc-800">
      <nav className="border-b p-4 place-content-center">
        
        <p className="text-7xl font-bold mt-2 text-purple-500 flex justify-center ">
          Styaapan
        </p>
        <p className="font mt-3 text-purple-500 flex justify-center">Satyam Pramanpatram</p>
        <div className="flex mt-4 flex justify-center">
          <Link href="/">
            <a className="mr-4 text-purple-500">
              Home(Created Certificates by Organization)
            </a>
          </Link>
          <Link href="/create-certificate">
            <a className="mr-6 text-purple-500">
              Create Certificate
            </a>
          </Link>
          <Link href="/transferred-certificate">
            <a className="mr-6 text-purple-500">
              Transferred Certificate To Students
            </a>
          </Link>
          
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp