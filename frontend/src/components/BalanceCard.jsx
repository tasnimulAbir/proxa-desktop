export default function BalanceCard() {
  return (
    <div className="bg-[#3E1A6A] rounded-2xl p-6 text-white transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 cursor-pointer">
      <div className="text-base text-gray-300 mb-2">Available Balance</div>
      <div className="text-4xl font-bold mb-4">$1,250.75</div>
      <div className="flex gap-4">
        <button className="bg-gradient-to-r from-[#4D6CFA] to-[#A346E8] px-6 py-2 rounded-lg font-medium">Add Money</button>
        <button className="bg-[#4C3A6D] px-6 py-2 rounded-lg font-medium">Withdraw</button>
      </div>
    </div>
  );
}