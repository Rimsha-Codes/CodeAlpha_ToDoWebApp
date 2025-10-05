export default function RightPerson() {
  return (
    <div className="flex-1 flex justify-center items-center relative">
      <div className="relative">
        <img
          src="/right-image.png"
          alt="Person with mobile phone"
          className="w-[30vw] sm:w-[24vw] lg:w-[18vw] max-w-[200px] h-auto object-contain relative z-10"
        />

        {/* 2 ticks on the right side */}
        <div
          className="absolute top-8 -right-4 sm:-right-6 w-6 h-6 sm:w-8 sm:h-8 bg-teal-500 rounded-full flex items-center justify-center shadow-md animate-pulse"
          style={{ animationDelay: '0ms' }}
        >
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div
          className="absolute top-16 -right-2 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-teal-500 rounded-full flex items-center justify-center shadow-md animate-pulse"
          style={{ animationDelay: '150ms' }}
        >
          <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

