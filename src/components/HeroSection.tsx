"use client";

import { useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const [volume24h, setVolume24h] = useState<string>("100,000");
  const [stimmyHoldings, setStimmyHoldings] = useState<string>("1,000,000");
  const [results, setResults] = useState<any>(null);

  // Constants from environment variables
  const TOTAL_FEE_TIER = parseFloat(process.env.NEXT_PUBLIC_TOTAL_FEE_TIER || '0.06');
  const HOLDER_REWARDS_PERCENTAGE = parseFloat(process.env.NEXT_PUBLIC_HOLDER_REWARDS_PERCENTAGE || '0.045');
  const TOTAL_STIMMY_SUPPLY = parseInt(process.env.NEXT_PUBLIC_TOTAL_SUPPLY || '1000000000');

  const formatInputValue = (value: string) => {
    const numericValue = value.replace(/[^\d]/g, '');
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const parseInputValue = (value: string) => {
    return value.replace(/,/g, '');
  };

  const calculateStimmy = () => {
    const volume = parseFloat(parseInputValue(volume24h)) || 0;
    const holdings = parseFloat(parseInputValue(stimmyHoldings)) || 0;
    
    const totalFees = volume * TOTAL_FEE_TIER; // 6% total fees
    const protocolFees = volume * 0.015; // 1.5% to PrintFun
    const totalRewardsForDistribution = volume * HOLDER_REWARDS_PERCENTAGE; // 4.5% to holders
    const holderReward = (holdings / TOTAL_STIMMY_SUPPLY) * totalRewardsForDistribution;
    const per10MinEarnings = holderReward / 144; // 24 hours = 144 ten-minute periods
    const dailyEarnings = holderReward;
    const monthlyProjection = dailyEarnings * 30;
    const holderPercentage = (holdings / TOTAL_STIMMY_SUPPLY) * 100;
    
    setResults({
      per10MinEarnings,
      dailyEarnings,
      monthlyProjection,
      holderPercentage,
      totalFees,
      protocolFees,
      totalRewardsForDistribution
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 6
    }).format(amount);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatInputValue(e.target.value);
    setVolume24h(formattedValue);
  };

  const handleHoldingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatInputValue(e.target.value);
    setStimmyHoldings(formattedValue);
  };

  return (
    <section className="bg-black min-h-screen flex items-center justify-center relative">
      <div className="max-w-lg mx-auto px-4">
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
          <div className="text-xs font-mono text-gray-400 mb-4 space-x-4">
            <Link href="/" className="hover:text-white transition-colors">&gt; calculator</Link>
            <Link href="/about" className="hover:text-white transition-colors">&gt; about</Link>
            <a href="https://docs.printfun.io/fee-structure-and-distribution/fee-tiers" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">&gt; docs</a>
            <a href="https://x.com/stimulusprotocol" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">&gt; twitter</a>
          </div>
          
          {/* Powered By Section - Moved Higher */}
          <div className="mb-6">
            <p className="text-xs text-gray-400 font-mono mb-3">POWERED BY:</p>
            <div className="flex justify-center items-center space-x-6">
              <a href="https://x.com/PrintProtocol" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 rounded-full overflow-hidden mb-1">
                  <img 
                    src="/7335fc58-590b-4ebb-9417-fcf0e74dcf61_Printpfp.webp" 
                    alt="Print Protocol" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs text-gray-400 font-mono">PRINT PROTOCOL</span>
              </a>
              <a href="https://x.com/PrintFunSol" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 mb-1">
                  <img 
                    src="/logo.webp" 
                    alt="PrintFun" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xs text-gray-400 font-mono">PRINTFUN</span>
              </a>
            </div>
          </div>

          {/* Protocol Info - Separated Sections */}
          <div className="space-y-3 mb-4">
            <div className="text-xs text-gray-400 font-mono">
              <div className="mb-1 text-gray-500">SUPPLY:</div>
              <div>1,000,000,000 $STIMMY</div>
            </div>
            
            <div className="text-xs text-gray-400 font-mono">
              <div className="mb-1 text-gray-500">FEE DISTRIBUTION:</div>
              <div>6% BUY/SELL • 1.5% → PRINTFUN • 4.5% → HOLDERS</div>
            </div>
          </div>
        </div>

        {/* Calculator Section */}
        <div className="space-y-4 font-mono">
          {/* Input Section */}
          <div className="space-y-3">
            <div className="text-xs text-gray-400 mb-2">
              &gt; Enter parameters<span className="animate-blink">_</span>
            </div>
            
            <div className="flex items-center text-sm">
              <span className="text-gray-400 w-20">Volume:</span>
              <input
                type="text"
                value={volume24h}
                onChange={handleVolumeChange}
                className="bg-transparent border-b border-gray-600 text-white font-mono focus:outline-none focus:border-gray-400 px-1 py-1 flex-1"
                placeholder="$100,000"
              />
            </div>
            
            <div className="flex items-center text-sm">
              <span className="text-gray-400 w-20">Holdings:</span>
              <input
                type="text"
                value={stimmyHoldings}
                onChange={handleHoldingsChange}
                className="bg-transparent border-b border-gray-600 text-white font-mono focus:outline-none focus:border-gray-400 px-1 py-1 flex-1"
                placeholder="1,000,000 $STIMMY"
              />
            </div>
          </div>

          {/* Execute Button */}
          <div className="text-center py-1">
            <button
              onClick={calculateStimmy}
              className="text-gray-400 hover:text-white transition-colors text-xs font-mono border border-gray-600 hover:border-gray-400 px-4 py-1 rounded-sm"
            >
              &gt; EXECUTE
            </button>
          </div>

          {/* Results - Fixed Height */}
          <div className="h-32 pt-2">
            {results ? (
              <div className="space-y-2 font-mono">
                <div className="text-xs text-gray-400 mb-3">
                  &gt; Earnings<span className="animate-blink">_</span>
                </div>
                
                {/* Clean Results List */}
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Daily:</span>
                    <span className="text-white font-bold">{formatCurrency(results.dailyEarnings)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Weekly:</span>
                    <span className="text-white">{formatCurrency(results.dailyEarnings * 7)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Monthly:</span>
                    <span className="text-white">{formatCurrency(results.monthlyProjection)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-xs pt-2 mt-2 border-t border-gray-800">
                    <span className="text-gray-500">Ownership:</span>
                    <span className="text-gray-400">{results.holderPercentage.toFixed(4)}%</span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
