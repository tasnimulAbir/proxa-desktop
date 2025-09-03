import { useState } from 'react';

export default function QuickActions() {
  const [isAutopayEnabled, setIsAutopayEnabled] = useState(true);

  const handleSendMoney = () => {
    // Handle send money action
    console.log('Send Money clicked');
  };

  const toggleAutopay = () => {
    setIsAutopayEnabled(!isAutopayEnabled);
  };

  return (
    <div className="rounded-2xl bg-[#3F2175] p-6 flex flex-col space-y-6 cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
      <h2 className="text-white font-semibold text-lg">Quick Actions</h2>
  
      <div className="flex items-start justify-center gap-8">
        {/* First Container: Send Money Section */}
        <div 
          onClick={handleSendMoney}
          className="bg-[#4A2B8A] rounded-xl p-4 flex flex-col items-center flex-shrink-0 cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
        >
          <div className="bg-gradient-to-br from-[#7A5FFF] to-[#AE5EFF] w-14 h-14 rounded-full flex items-center justify-center">
            <span className="text-white text-2xl font-medium">$</span>
          </div>
          <p className="text-white mt-2">Send Money</p>
        </div>
  
        {/* Second Container: Autopay Section - Hidden on smaller screens */}
        <div className="hidden lg:block bg-[#4A2B8A] rounded-xl p-4 flex flex-col flex-shrink-0 cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
          {/* Autopay label and toggle */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-white text-sm">Autopay</span>
            <button 
              onClick={toggleAutopay}
              className={`w-10 h-6 rounded-full relative transition-colors duration-200 ${
                isAutopayEnabled ? 'bg-green-500' : 'bg-gray-400'
              }`}
            >
              <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform duration-200 ${
                isAutopayEnabled ? 'right-0.5' : 'left-0.5'
              }`}></div>
            </button>
          </div>
  
          {/* Vendor image and amount */}
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-[#7A5FFF] flex items-center justify-center text-xs font-semibold text-white">
              cr
            </div>
            <span className="text-white font-semibold text-sm">15.38</span>
          </div>
  
          {/* Frequency and status indicator */}
          <div className="flex items-center gap-2">
            <span className="text-white/70 text-sm">Monthly</span>
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-green-400 text-sm">Due</span>
          </div>
        </div>
      </div>
    </div>
  );
}