import { Card, CardHeader, CardBody, CardFooter, Typography, Tooltip } from "@material-tailwind/react"

export default function Projects() {
    return (
        <div className="my-56">
            <div className="mb-10 px-20">
                <h1 className="inline-block p-2.5 pb-5 text-white text-4xl md:text-md ">Project I Build</h1>

                <div className="inline-block border-b-2 w-1/2 my-1 mx-5 border-[#A9A9A9] opacity-50"></div>
            </div>

            <div className="w-full left-0 right-0 px-40 grid grid-cols-4">


                <div className="hover:scale-105">
                    <div className="container border-[1px] border-[#61d7dc] hover:border-white h-72 w-60 bg-[#0a192f]">
                        <div></div>
                    </div>
                </div>

                <div className="hover:scale-105">
                    <div className="container border-[1px] border-[#61d7dc] hover:border-white h-72 w-60 bg-[#0a192f]">
                        <div></div>
                    </div>
                </div>

                <div className="hover:scale-105">
                    <div className="container border-[1px] border-[#61d7dc] hover:border-white h-72 w-60 bg-[#0a192f]">
                        <div></div>
                    </div>
                </div>

                <div className="hover:scale-105">
                    <div className="container border-[1px] border-[#61d7dc] hover:border-white h-72 w-60 bg-[#0a192f]">
                        <div></div>
                    </div>
                </div>


            </div>


        </div>

    )
}