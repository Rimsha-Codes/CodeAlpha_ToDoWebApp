export default function LeftPerson() {
  return (
    <div className="flex-1 flex justify-center items-center relative">
      <div className="relative">
        <img
          src="/left-image.png"
          alt="Person working on laptop"
          className="w-[35vw] sm:w-[28vw] lg:w-[22vw] max-w-[250px] h-auto object-contain relative z-10"
        />

        <div className="absolute top-10 sm:top-16 -right-6 sm:-right-8 w-6 h-6 sm:w-8 sm:h-8 bg-teal-500 rounded-full flex items-center justify-center shadow-md animate-pulse">
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="absolute top-20 sm:top-28 -right-8 sm:-right-10 w-6 h-6 sm:w-8 sm:h-8 bg-teal-500 rounded-full flex items-center justify-center shadow-md animate-pulse delay-100">
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="absolute -bottom-3 -right-3 sm:-right-5 z-0">
          <div className="w-12 h-10 sm:w-16 sm:h-12 bg-gray-200 rounded-full"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 sm:-translate-y-8">
            <div className="w-1.5 h-6 sm:h-8 bg-teal-600 rounded-full"></div>
            <div className="absolute -top-2 -left-2 sm:-left-3 w-5 h-5 sm:w-6 sm:h-6 bg-teal-500 rounded-full opacity-80"></div>
            <div className="absolute -top-1 left-1 sm:left-2 w-4 h-4 sm:w-5 sm:h-5 bg-teal-600 rounded-full opacity-70"></div>
            <div className="absolute top-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 bg-teal-400 rounded-full opacity-90"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
