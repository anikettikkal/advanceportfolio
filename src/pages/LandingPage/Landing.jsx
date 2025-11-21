import React from "react";
import portfolioImage from "../../assets/portfolioImage.png";
import pdf from "../../assets/aniket.pdf"
export default function Landing() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between px-6  lg:px-24 ">
            <div className="md:w-1/2 text-center md:text-left space-y-6">
                <h1 className="text-4xl md:text-4xl font-bold">
                    I Am <span className="text-green-400">ANIKET RAMESH TIKKAL</span>
                </h1>
                <p className="text-lg md:text-xl leading-relaxed">
                    A MERN Stack Developer Passionate About Coding. <br />
                    My Portfolio Is A Representation Of All That I’ve Learned And Accomplished As A Computer Science Student.
                </p>
                <div className="flex justify-center md:justify-start gap-6 pt-4">
                    <a href={pdf} download className="px-6 py-2 border-2 border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black transition">
                        Resume
                    </a>
                    <a href="#Contact">
                        <button className="px-6 py-2 border-2 border-yellow-400 text-yellow-400 rounded-md hover:bg-yellow-400 hover:text-black transition">
                            Hire Me
                        </button>
                    </a>
                </div>
            </div>
            <div className="mt-10 md:mt-0 md:w-1/2">
                <img src={portfolioImage} alt="Portfolio" className="w-full h-auto object-contain" />
            </div>
        </section>
    );
}
