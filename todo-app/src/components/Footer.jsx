export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-10 sm:mt-20 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-4 sm:mb-6">
          {["About", "Privacy", "Terms of Use", "Contact", "Help"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="text-sm sm:text-base text-gray-400 hover:text-white transition"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="text-center text-gray-500 text-xs sm:text-sm">
          © 2025 Todo App. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
