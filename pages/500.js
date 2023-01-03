import InterlaServerErrorAnimation from '../components/500.jsx'
import Link from 'next/link.js'

export default function InternalServerError() {
    return (
        <div className='flex justify-center w-screen h-screen'>

            <div className='m-auto block w-1/3'>
                <h1 className='flex justify-center font-mono font-bold text-4xl text-white mb-10'>500 Internal Server Error</h1>

                <div className="bg-white rounded-full mb-10">
                    <InterlaServerErrorAnimation />
                </div>


                <Link className="text-white hover:text-[#2980b9]" href="/">
                    Return to Home
                </Link>
            </div>

        </div>
    )
}