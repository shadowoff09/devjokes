import React from 'react'

interface JokeProps {
  question: string;
  punchline: string;
}

export default function Jokes({question, punchline}: JokeProps) {
  return (
    <div className="flex flex-col justify-center items-center mt-5 mx-5">
      <h1 className="sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
        - {question}
      </h1>
      <h1 className="sm:text-lg md:text-xl lg:text-2xl font-bold text-white opacity-80">
        - {punchline}
      </h1>
    </div>
  );
}
