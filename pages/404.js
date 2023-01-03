import NotFoundAnimation from '../components/404.jsx'
import Link from 'next/link.js'

export default function NotFound() {
    return (
        <div className='flex justify-center w-screen h-screen'>

            <div className='m-auto block w-1/3'>
                <h1 className='flex justify-center font-mono font-bold text-5xl text-white'>404 Not Found</h1>
                <NotFoundAnimation />

                <Link className="text-white hover:text-[#2980b9]" href="/">
                    Return to Home
                </Link>
            </div>

        </div>

    )
}