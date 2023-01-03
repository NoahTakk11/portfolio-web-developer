import Image from 'next/image'
import develop from '../public/WebDeveloper.svg'
import develop2 from '../public/WebDeveloperTwo.svg'

export default function AboutMe() {
    return (

        <div className="px-20 container w-full my-56">

            <div className="lg:w-full border-white">
                <div>
                    <h1 className="inline-block p-2.5 pb-5 text-white text-4xl md:text-md ">About Me</h1>
                    <div className="inline-block border-b-2 w-1/2 my-1 mx-5 border-[#A9A9A9] opacity-50"></div>
                </div>

                <div className="grid grid-cols-2 w-full">

                    <div>
                        <p className="text-[#A9A9A9] leading-normal text-sm text-justify  p-2.5 sm:text-sm md:text-md lg:text-base justify-center font-sans">Hi, I'm Gonzalo Villavicencio, gonza for friends. I am dedicated to developing web and desktop applications, I have some finished projects, you can see them below in the "projects section".
                            <br />
                            <br />
                            I started with this development thing a long time ago when I wanted to make an attendance record app for my high school, back then I stumbled upon python and I only had a small laptop with no more than 1gb of ram, and I didn't even have internet access. Anyway, with the neighbor's WiFi and a lot of passion I started to program my first app with python and TkInter. Some time later I got interested in web development and here I am.
                            <br />
                            <br />
                            I have hobbies like playing basketball, running and having deep conversations with my friends.
                            If you have an idea and if it can be programmed, I will do it for you, do not hesitate to "contact me".
                            <br />
                            <br />
                            These are some technologies I've been working with recently.</p>

                        <div className="grid grid-cols-3 text-[#A9A9A9] leading-normal text-sm text-justify  p-2.5 sm:text-sm md:text-md lg:text-base justify-center font-sans">
                            <div>
                                <ul>
                                    <li>🔹Python</li>
                                    <li>🔹JavaScript</li>
                                    <li>🔹Java</li>

                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li>🔹Django</li>
                                    <li>🔹NextJs</li>
                                    <li>🔹Spring-Boot</li>

                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li>🔹WordPress</li>
                                    <li>🔹Express</li>
                                    <li>🔹MySQL</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className=" p-[15px]">
                        <Image className="ml-28"
                            src={develop}
                            width={300}
                            height={300} />

                        <Image className="ml-60"
                            src={develop2}
                            width={320}
                            height={320} />
                    </div>

                </div>





            </div>



        </div>

    )
}