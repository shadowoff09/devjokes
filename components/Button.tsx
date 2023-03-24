import React from 'react'

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export default function Button({ text, onClick, className }: ButtonProps) {
  return (
    <div className="mx-5">
      <button
        onClick={onClick}
        className={`leading-none tracking-wider py-4 px-10 bg-blue-700 border border-blue-600 text-white rounded-lg transform hover:translate-y-1 transition duration-200 ease-in-out font-semibold ${className}`}
      >
        {text}
      </button>
    </div>
  );
}
