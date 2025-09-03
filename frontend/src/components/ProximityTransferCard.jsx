import { Wifi } from 'lucide-react';

export default function ProximityTransferCard() {
  return (
    <div className="bg-[#3E1A6A] rounded-2xl p-6 text-white transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 cursor-pointer">
      <div className="flex items-center gap-2 font-semibold mb-1">
        <Wifi size={18} /> Proximity Transfer
      </div>
      <div className="text-sm text-gray-300 mb-4">Send money instantly to nearby devices</div>
      <button className="px-6 py-2 rounded-md text-white font-medium bg-gradient-to-r from-[#4D6CFA] to-[#A346E8] w-fit">Connect</button>
    </div>
  );
}