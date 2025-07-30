export default function Navbar() {
  return (
    <nav className="bg-black border-b border-white shadow-sm font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-white">
                STIMULUS_PROTOCOL
                <span className="animate-pulse ml-1">_</span>
              </h1>
            </div>
          </div>
          <div className="flex items-center space-x-8">
            <a
              href="/"
              className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors border border-white hover:border-gray-300"
            >
              [CALCULATOR]
            </a>
            <a
              href="/about"
              className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors border border-white hover:border-gray-300"
            >
              [ABOUT_$STIMMY]
            </a>
            <a
              href="/docs"
              className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors border border-white hover:border-gray-300"
            >
              [DOCS]
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
