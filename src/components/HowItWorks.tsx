export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Understanding the IMG token distribution mechanism
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Trading Volume Generated
            </h3>
            <p className="text-gray-600">
              When trades occur, a 6% fee is collected from the total trading volume. 
              This fee is split between holder rewards and protocol operations.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-green-600">2</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Fee Distribution
            </h3>
            <p className="text-gray-600">
              4.5% goes to token holders as rewards, while 1.5% goes to the protocol 
              for development, marketing, and ecosystem growth.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-purple-600">3</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Proportional Rewards
            </h3>
            <p className="text-gray-600 mb-4">
              Your reward = (Your Holdings ÷ Total Supply) × Total Rewards Pool. 
              The more tokens you hold, the larger your share of daily rewards.
            </p>
            <div className="bg-gray-50 p-3 rounded border">
              <p className="text-sm font-mono text-gray-800">
                Daily Reward = (Holdings / 1,000,000,000) × (Volume × 4.5%)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
