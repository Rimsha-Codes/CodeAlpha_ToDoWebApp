
import React from "react";

export default function CenterContent({ onGetStarted }) {
  return (
    <div className="flex-1 flex flex-col items-center text-center gap-4 sm:gap-6">
      <img
        src="/blueTick-image.png"
        alt="Todo App Logo"
        className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain"
      />

      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-500 to-purple-500 tracking-tight bg-[length:300%_auto] animate-gradient-shift-fast">
        To Do
      </h1>

      
      <p className="text-base sm:text-xl max-w-md leading-relaxed px-4 font-medium text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-sky-400 to-rose-500 bg-[length:300%_auto] animate-gradient-shift-slower">
        To Do gives you{" "}
        <span className="font-semibold">focus</span>, from{" "}
        <span className="font-semibold">work</span> to{" "}
        <span className="font-semibold">play</span>.
      </p>

      <button
        onClick={onGetStarted}
        className="bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 hover:from-cyan-600 hover:via-teal-600 hover:to-emerald-600 text-white px-8 sm:px-12 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105"
      >
        Get started
      </button>

      
      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-shift-fast {
          animation: gradientShift 2s ease-in-out infinite;
        }

        .animate-gradient-shift-slower {
          animation: gradientShift 7s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}