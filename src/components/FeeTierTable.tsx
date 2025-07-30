export default function FeeTierTable() {
  const feeTiers = [
    { tier: "Low", trading: "1%", holders: "0.75%", protocol: "0.25%" },
    { tier: "Standard", trading: "2%", holders: "1.5%", protocol: "0.5%" },
    { tier: "High", trading: "4%", holders: "3%", protocol: "1%" },
    { tier: "Premium", trading: "6%", holders: "4.5%", protocol: "1.5%", active: true },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Available Fee Tiers
          </h2>
          <p className="text-lg text-gray-600">
            Different fee structures for various trading volumes
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Fee Tier</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Trading Fee</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Holder Rewards</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Protocol Fee</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {feeTiers.map((tier, index) => (
                <tr key={index} className={tier.active ? "bg-blue-50" : ""}>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <span className={`font-medium ${tier.active ? "text-blue-900" : "text-gray-900"}`}>
                        {tier.tier}
                      </span>
                      {tier.active && (
                        <span className="ml-2 px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                  </td>
                  <td className={`px-6 py-4 font-medium ${tier.active ? "text-blue-900" : "text-gray-900"}`}>
                    {tier.trading}
                  </td>
                  <td className={`px-6 py-4 font-medium ${tier.active ? "text-green-600" : "text-gray-900"}`}>
                    {tier.holders}
                  </td>
                  <td className={`px-6 py-4 font-medium ${tier.active ? "text-blue-900" : "text-gray-900"}`}>
                    {tier.protocol}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Currently operating on <span className="font-semibold text-blue-600">Premium Tier</span> - 
            Maximum rewards for token holders
          </p>
        </div>
      </div>
    </section>
  );
}
