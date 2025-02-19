"use client";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";
import { useState } from "react";

export function TypewriterEffectDemo() {
  const [isClicked, setIsClicked] = useState(false);

  const words = [
    {
      text: "Join",
    },
    {
      text: "the",
    },
    {
      text: "revolution",
    },
    {
      text: "with",
    },
    {
      text: "Cult.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const handleButtonClick = (url) => {
    setIsClicked(true);
    setTimeout(() => {
      window.open(url, "_blank");
    }, 300);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[40rem] bg-gray-900">
      <p className="text-neutral-600 dark:text-neutral-200  mb-10 text-5xl">
        The road to freedom starts from here...
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button
          onClick={() => handleButtonClick("https://cultcode.vercel.app/")}
          className={`w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm transition-transform duration-200 ${isClicked ? "transform scale-95" : ""
            }`}
        >
          Join now
        </button>

        <button
          onClick={() => handleButtonClick("https://cultcode.vercel.app/")}
          className={`w-40 h-10 rounded-xl bg-white text-black border border-black text-sm transition-transform duration-200 ${isClicked ? "transform scale-95" : ""
            }`}
        >
          Signup
        </button>
      </div>
    </div>
  );
}
