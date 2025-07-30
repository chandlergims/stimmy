"use client";

import { useState } from "react";

export default function DistributionInfo() {
  const [copied, setCopied] = useState(false);
  
  // Get distribution wallet from environment variables
  const distributionWallet = process.env.NEXT_PUBLIC_DISTRIBUTION_WALLET;
  const isWalletConfigured = distributionWallet && distributionWallet.trim() !== '';
  
  const copyToClipboard = async () => {
    if (!isWalletConfigured) return;
    
    try {
      await navigator.clipboard.writeText(distributionWallet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Distribution Information
          </h2>
          <p className="text-lg text-gray-600">
            Transparency in token distribution and reward mechanisms
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Distribution Wallet
            </h3>
            <p className="text-gray-600 mb-4">
              All holder rewards are distributed from this verified wallet address. 
              You can track all transactions and verify the distribution process.
            </p>
            {isWalletConfigured ? (
              <>
                <div className="bg-gray-50 p-4 rounded-lg border">
                  <div className="flex items-center justify-between">
                    <code className="text-sm font-mono text-gray-800 break-all">
                      {distributionWallet}
                    </code>
                    <button
                      onClick={copyToClipboard}
                      className="ml-2 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                    >
                      {copied ? "Copied!" : "Copy"}
                    </button>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Verify this address on Solana blockchain explorers
                </p>
              </>
            ) : (
              <>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-yellow-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium text-yellow-800">
                      Distribution wallet not configured
                    </span>
                  </div>
                  <p className="text-sm text-yellow-700 mt-1">
                    Set NEXT_PUBLIC_DISTRIBUTION_WALLET in your environment file
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Configure the wallet address to enable distribution tracking
                </p>
              </>
            )}
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Distribution Schedule
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Frequency</span>
                <span className="font-medium text-gray-900">Daily</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Distribution Time</span>
                <span className="font-medium text-gray-900">12:00 UTC</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Minimum Holding</span>
                <span className="font-medium text-gray-900">1 IMG</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Distribution Method</span>
                <span className="font-medium text-gray-900">Automatic</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                Important Information
              </h3>
              <div className="mt-2 text-sm text-blue-700">
                <p>
                  This is a legitimate token distribution system. All transactions are transparent 
                  and verifiable on the Solana blockchain. Rewards are distributed proportionally 
                  based on your token holdings relative to the total supply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
