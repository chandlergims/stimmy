export default function ProtocolInfo() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powered by Print Protocol
          </h2>
          <p className="text-lg text-gray-600">
            Built on innovative blockchain infrastructure for transparent token distribution
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Print Protocol
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              The underlying infrastructure that powers this token distribution system. 
              Print Protocol enables transparent, automated, and fair distribution mechanisms 
              for blockchain projects.
            </p>
            <a 
              href="https://x.com/PrintProtocol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              Follow @PrintProtocol
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg border border-green-100">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Protocol Fee Allocation
              </h3>
            </div>
            <p className="text-gray-700 mb-4">
              The 1.5% protocol fee supports the development team at PrintFun, 
              ensuring continuous innovation, security updates, and ecosystem growth 
              for all participants in the network.
            </p>
            <a 
              href="https://x.com/PrintFunSol" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
            >
              Follow @PrintFunSol
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-8 bg-gray-50 rounded-lg p-6 border">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            Transparency & Trust
          </h4>
          <p className="text-gray-600 mb-4">
            This distribution system operates with complete transparency. All transactions, 
            fee allocations, and reward distributions are verifiable on the Solana blockchain. 
            The protocol fee ensures sustainable development and continuous improvement of the platform.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-gray-600">Open Source Verification</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-gray-600">Automated Distribution</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              <span className="text-gray-600">Real-time Tracking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
