import { useState, useEffect } from "react"

export default function contact() {

    const [isSupported, setIsSupported] = useState(false);

    useEffect(() => {
        // Comprobar si el navegador soporta la función `window.open()`
        setIsSupported(!!window.open)
    }, [])

    function handleClick() {
        //Open the application mail of system.
        window.open('mailto:')
    }

    return (

        <div className="w-full my-40 block text-white text-center">

            <h1 className="text-4xl m-10 hover:text-cyan-400  capitalize">How do I contact me?</h1>

            <h2 className="text-lg text-[#A9A9A9] mb-10">To contact me you can send me an email to <span className="text-white hover:text-cyan-400 hover:text-bold"><u>ggvillavicencio11@gmail.com</u></span> <br /> or simply press the button below! 😉</h2>

            {isSupported ? (
                <button onClick={handleClick} className="block text-xl w-40 h-16 mx-auto text-center bg-cyan-500 hover:bg-cyan-400 font-bold py-2 px-4 border-b-4 border-cyan-700 hover:border-cyan-500 hover:scale-105 rounded"><span>Contact Me</span></button>
            ) : (
                <p>I sorry, your navegator not supported this characteristic</p>
            )}
        </div>

    )


}