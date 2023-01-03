import Link from "next/link";


export default function Navbar() {
  return (

    <nav className="z-50 fixed right-0 top-0 mt-10 bg-none opacity-95 p-[5px]">


      <div className="justify-self-end self-center w-12 h-12 right-0 ">
        <Link className="" href={"/mail"}>

          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github hover:stroke-[#ffffff] hover:scale-125" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fd0061" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
          </svg>
        </Link>
      </div>


      <div className="justify-self-end self-center w-12 h-12 ">

        <Link href={"#neon"}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home hover:stroke-[#ffffff] hover:scale-125" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fd0061" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="5 12 3 12 12 3 21 12 19 12" />
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
          </svg>
        </Link>

      </div>


      <div className="justify-self-end self-center w-12 h-12 ">
        <Link href={"#projects"}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code hover:stroke-[#ffffff] hover:scale-125" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fd0061" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="7 8 3 12 7 16" />
            <polyline points="17 8 21 12 17 16" />
            <line x1="14" y1="4" x2="10" y2="20" />
          </svg>
        </Link>

      </div>

      <div className="justify-self-end self-center w-12 h-12 ">

        <Link href={"#contact"}>

          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail-forward hover:stroke-[#ffffff] hover:scale-125" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fd0061" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
            <path d="M3 6l9 6l9 -6" />
            <path d="M15 18h6" />
            <path d="M18 15l3 3l-3 3" />
          </svg>
        </Link>
      </div>


      <div className="h-40 ml-[15px] mr-0 mt-[10px] mb-0 border-l-2 border-[#fd0061]">

      </div>
    </nav>

  )

}