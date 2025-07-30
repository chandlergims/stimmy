import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Terminal Info Bar */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-black px-4 py-2 text-xs font-mono text-white">
        <div className="flex justify-between items-center">
          <div>_fee_tier: high</div>
          <div></div>
          <div>_distribution: every_10min</div>
        </div>
      </div>

      <HeroSection />
      
      {/* Distribution Wallet - Bottom Middle */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
        Distribution Wallet: {process.env.NEXT_PUBLIC_DISTRIBUTION_WALLET || ""}
      </div>

      {/* Bottom corner credits */}
      <div className="fixed bottom-4 left-4 text-xs font-mono text-gray-500">
        Powered by <a href="https://x.com/PrintProtocol" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Print Protocol</a>
      </div>
      
      <div className="fixed bottom-4 right-4 text-xs font-mono text-gray-500">
        Built with <a href="https://x.com/PrintFunSol" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">PrintFun</a>
      </div>
    </div>
  );
}
