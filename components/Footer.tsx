import React from 'react'

export default function Footer() {
  return (
    <div className="absolute bottom-0 w-full h-16">
      <div className="h-full w-full flex justify-center items-center">
        <h1 className="text-normal sm:text-md md:text-lg lg:text-xl font-bold text-white">
          Made with ❤️ by {` `}
          <a href="https://github.com/shadowoff09" className="text-blue-600 hover:underline">
            shadowoff09
          </a>
        </h1>
      </div>
    </div>
  );
}
