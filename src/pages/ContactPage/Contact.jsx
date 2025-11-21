import React from "react";

export default function Contact() {
    return (
        <section className="min-h-screen bg-black text-white flex justify-center items-center px-4 py-10">

            <div className="max-w-xl w-full bg-gray-900 shadow-xl rounded-xl p-8 border border-gray-700">
                <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
                    Contact Me
                </h2>

                <form action={"https://formspree.io/f/mnqebbdo"} method="POST" className="space-y-5">
                    <div>
                        <label className="block mb-1 font-medium">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-700 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-700 outline-none"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Message</label>
                        <textarea
                            rows="4"
                            name="message"
                            placeholder="Write your message..."
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-orange-500 focus:ring-2 focus:ring-orange-700 outline-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-600 hover:bg-orange-700 transition font-semibold py-2 rounded-lg"
                    >
                        Send Message
                    </button>
                </form>

                <div className="text-center mt-6">
                    <p className="text-gray-400 text-sm">Or reach me at:</p>
                    <a
                        href="mailto:tikkalaniket2019@gmail.com"
                        className="text-orange-500 underline hover:text-orange-400"
                    >
                        tikkalaniket2019@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
}
