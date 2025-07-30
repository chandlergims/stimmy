"use client";

import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white font-mono relative">
      {/* Terminal Info Bar */}
      <div className="fixed top-0 left-0 right-0 z-10 bg-black px-4 py-2 text-xs font-mono text-white">
        <div className="flex justify-between items-center">
          <div>_fee_tier: high</div>
          <div></div>
          <div>_distribution: every_10min</div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 pt-16 pb-20">
        <div className="text-center mb-6">
          <p className="text-sm text-white font-mono mb-2">
            STIMULUS PROTOCOL<span className="animate-blink">_</span>
          </p>
          
          {/* STIMMY Logo */}
          <div className="mb-4">
            <img 
              src="/Stimmy.png" 
              alt="STIMMY" 
              className="w-16 h-16 mx-auto object-contain"
            />
          </div>
          
          {/* Terminal Navigation Links */}
          <div className="text-xs font-mono text-gray-400 mb-6 space-x-4">
            <Link href="/" className="hover:text-white transition-colors">&gt; calculator</Link>
            <Link href="/about" className="hover:text-white transition-colors">&gt; about</Link>
            <a href="https://docs.printfun.io/fee-structure-and-distribution/fee-tiers" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">&gt; docs</a>
            <a href="https://x.com/stimulusprotocol" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">&gt; twitter</a>
          </div>
        </div>

        {/* About Content */}
        <div className="space-y-6 font-mono">
          {/* How it works */}
          <section>
            <h2 className="text-xs text-gray-400 mb-3">
              &gt; how it works<span className="animate-blink">_</span>
            </h2>
            <div className="text-xs text-gray-300 space-y-1">
              <div>trading fees collected automatically</div>
              <div>distributed to holders every 10 minutes</div>
              <div>no staking or claiming required</div>
            </div>
          </section>

          {/* Rewards */}
          <section>
            <h2 className="text-xs text-gray-400 mb-3">
              &gt; rewards<span className="animate-blink">_</span>
            </h2>
            <div className="text-xs text-gray-300 space-y-1">
              <div>6% total fee on all trades</div>
              <div>1.5% → printfun protocol</div>
              <div>4.5% → $stimmy holders</div>
              <div>paid in SOL directly to wallet</div>
            </div>
            
            <div className="text-xs text-gray-400 mt-3 mb-2">formula:</div>
            <div className="text-xs text-gray-500 space-y-1">
              <div>your_reward = (your_holdings / 1B) × daily_fees</div>
              <div>daily_fees = volume × 0.045</div>
              <div>example: 1M tokens = 0.1% of rewards</div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-xs text-gray-400 mb-3">
              &gt; faq<span className="animate-blink">_</span>
            </h2>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-gray-300">q: need to stake?</span>
                <div className="text-gray-500">a: no, just hold tokens</div>
              </div>
              <div>
                <span className="text-gray-300">q: when distributed?</span>
                <div className="text-gray-500">a: every 10 minutes automatically</div>
              </div>
              <div>
                <span className="text-gray-300">q: what if failed?</span>
                <div className="text-gray-500">a: retry next cycle</div>
              </div>
            </div>
          </section>

          {/* Links */}
          <section>
            <h2 className="text-xs text-gray-400 mb-3">
              &gt; more info<span className="animate-blink">_</span>
            </h2>
            <div className="text-xs text-gray-300 space-y-1">
              <div>launched on <a href="https://x.com/PrintFunSol" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">printfun</a></div>
              <div>read <a href="https://docs.printfun.io/fee-structure-and-distribution/fee-tiers" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors">docs</a> for detailed questions</div>
            </div>
          </section>
        </div>
      </div>

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
