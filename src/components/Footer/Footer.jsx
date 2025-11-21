import React from "react";
export default function Footer() {
  return (
    <div className="text-center">
      <div className="bg-gray-900 py-8  shadow-lg">
        <h4 className="text-white text-2xl font-semibold">
          ANIKET RAMESH TIKKAL
        </h4>
        <p className="text-white text-lg mt-2">
          "Living in the present for the stories I shall tell in the future.😉❤"
        </p>

        <div className="flex justify-center mt-4 space-x-6">
          <a
            className="text-white text-4xl hover:text-gray-400"
            href="https://github.com/anikettikkal"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </a>

          <a
            className="text-white text-4xl hover:text-blue-400"
            href="https://www.linkedin.com/in/aniket-tikkal/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>

          <a
            className="text-white text-4xl hover:text-pink-400"
            href="https://www.instagram.com/aniket_tikkal/"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <p className="text-white text-lg mt-6">
          Created By &nbsp;
          <span className="underline">Mr. ANIKET TIKKAL</span>
        </p>
      </div>
    </div>
  );
}
