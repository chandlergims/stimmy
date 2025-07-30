"use client";

import { useState, useEffect } from "react";

export default function RewardsCalculator() {
  const [volume24h, setVolume24h] = useState<string>("100,000");
  const [imgHoldings, setImgHoldings] = useState<string>("1,000,000");
  
  // Initialize with default calculation
  const getInitialResults = () => {
    const volume = 100000; // Default volume
    const holdings = 1000000; // Default holdings
    const TOTAL_FEE_TIER = 0.06;
    const HOLDER_REWARDS_PERCENTAGE = 0.045;
    const PROTOCOL_FEE_PERCENTAGE = 0.015;
    const TOTAL_IMG_SUPPLY = 1000000000;
    
    const totalFeesCollected = volume * TOTAL_FEE_TIER;
    const totalRewardsForDistribution = volume * HOLDER_REWARDS_PERCENTAGE;
    const protocolFee = volume * PROTOCOL_FEE_PERCENTAGE;
    const holderReward = (holdings / TOTAL_IMG_SUPPLY) * totalRewardsForDistribution;
    const dailyEarnings = holderReward;
    const monthlyProjection = dailyEarnings * 30;
    const annualProjection = dailyEarnings * 365;
    const holderPercentage = (holdings / TOTAL_IMG_SUPPLY) * 100;
    
    return {
      totalFeesCollected,
      totalRewardsForDistribution,
      protocolFee,
      holderPercentage,
      dailyEarnings,
      monthlyProjection,
      annualProjection
    };
  };

  const [results, setResults] = useState<any>(getInitialResults());
  
  // Constants from environment variables
  const TOTAL_FEE_TIER = parseFloat(process.env.NEXT_PUBLIC_TOTAL_FEE_TIER || '0.06');
  const HOLDER_REWARDS_PERCENTAGE = parseFloat(process.env.NEXT_PUBLIC_HOLDER_REWARDS_PERCENTAGE || '0.045');
  const PROTOCOL_FEE_PERCENTAGE = parseFloat(process.env.NEXT_PUBLIC_PROTOCOL_FEE_PERCENTAGE || '0.015');
  const TOTAL_IMG_SUPPLY = parseInt(process.env.NEXT_PUBLIC_TOTAL_SUPPLY || '1000000000');

  // Function to parse formatted input back to number
  const parseInputValue = (value: string) => {
    return value.replace(/,/g, '');
  };

  // Function to format input with commas
  const formatInputValue = (value: string) => {
    // Remove all non-digit characters
    const numericValue = value.replace(/[^\d]/g, '');
    // Add commas
    return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const calculate = () => {
    const volume = parseFloat(parseInputValue(volume24h)) || 0;
    const holdings = parseFloat(parseInputValue(imgHoldings)) || 0;
    
    // Calculate total fees collected (6% of 24h volume)
    const totalFeesCollected = volume * TOTAL_FEE_TIER;
    
    // Calculate rewards available for distribution (4.5% of volume)
    const totalRewardsForDistribution = volume * HOLDER_REWARDS_PERCENTAGE;
    
    // Calculate protocol fee (1.5% of volume)
    const protocolFee = volume * PROTOCOL_FEE_PERCENTAGE;
    
    // Calculate holder's share: (Holder's Token Balance / Total Token Supply) × Total Rewards for Distribution
    const holderReward = (holdings / TOTAL_IMG_SUPPLY) * totalRewardsForDistribution;
    
    // Calculate projections
    const dailyEarnings = holderReward;
    const monthlyProjection = dailyEarnings * 30;
    const annualProjection = dailyEarnings * 365;
    
    // Calculate holder's percentage of total supply
    const holderPercentage = (holdings / TOTAL_IMG_SUPPLY) * 100;
    
    const calculatedResults = {
      totalFeesCollected,
      totalRewardsForDistribution,
      protocolFee,
      holderPercentage,
      dailyEarnings,
      monthlyProjection,
      annualProjection
    };
    
    setResults(calculatedResults);
  };


  const reset = () => {
    setVolume24h("100,000");
    setImgHoldings("1,000,000");
    setResults(getInitialResults());
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const numericValue = parseInputValue(rawValue);
    const formattedValue = formatInputValue(numericValue);
    setVolume24h(formattedValue);
  };

  const handleHoldingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const numericValue = parseInputValue(rawValue);
    const formattedValue = formatInputValue(numericValue);
    setImgHoldings(formattedValue);
  };

  return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 shadow-sm text-gray-900 p-6 rounded-lg">
      <h2 className="text-lg font-bold mb-6 text-center text-gray-900">
        IMG Rewards Calculator
      </h2>
      
      <div className="space-y-4">
        {/* 24H Volume Input */}
        <div>
          <label className="block text-sm mb-2 font-medium text-gray-700">24H Volume (USD)</label>
          <input
            type="text"
            value={volume24h}
            onChange={handleVolumeChange}
            className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="100,000"
          />
        </div>

        {/* IMG Holdings Input */}
        <div>
          <label className="block text-sm mb-2 font-medium text-gray-700">Your $IMG Holdings</label>
          <input
            type="text"
            value={imgHoldings}
            onChange={handleHoldingsChange}
            className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            placeholder="1,000,000"
          />
        </div>

        {/* Buttons */}
        <div className="space-y-2">
          <button
            onClick={calculate}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded py-2 font-semibold transition-colors"
          >
            Calculate Rewards
          </button>
          <button
            onClick={reset}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-300 rounded py-2 font-semibold transition-colors"
          >
            Reset
          </button>
        </div>

        {/* Results */}
        <div className="space-y-3 mt-6 pt-6 border-t border-gray-200">
            <div className="flex justify-between">
              <span className="text-gray-600">Rewards Pool (4.5%):</span>
              <span className="font-semibold text-green-600">{formatCurrency(results.totalRewardsForDistribution)}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Protocol Fee (1.5%):</span>
              <span className="font-semibold text-gray-900">{formatCurrency(results.protocolFee)}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Your Daily Earnings:</span>
              <div className="text-right">
                <div className="font-semibold text-blue-600">{formatCurrency(results.dailyEarnings)}</div>
                <div className="text-xs text-gray-500">
                  {results.holderPercentage.toFixed(4)}% of supply
                </div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Monthly Projection:</span>
              <div className="text-right">
                <div className="font-semibold text-blue-600">{formatCurrency(results.monthlyProjection)}</div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Annual Projection:</span>
              <div className="text-right">
                <div className="font-semibold text-blue-600">{formatCurrency(results.annualProjection)}</div>
              </div>
            </div>
            
            <div className="flex justify-between pt-2 border-t border-gray-100">
              <span className="text-gray-600">Total IMG Supply:</span>
              <span className="font-semibold text-gray-900">{formatNumber(TOTAL_IMG_SUPPLY)}</span>
            </div>
        </div>

      </div>
    </div>
  );
}
