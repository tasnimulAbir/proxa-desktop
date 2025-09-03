// components/Chats.jsx
const chats = [
  { name: "Amon Freed", message: "Thanks for the money!", time: "2 m", color: "#5F4BFF" },
  { name: "Sakuyu Mint", message: "Can you send me 5602", time: "1 h", color: "#A346E8" },
  { name: "Ali Saladin", message: "Payment received", time: "3 h", color: "#6C63FF" },
];

export default function Chats() {
  return (
    <div className="bg-[#3E1A6A] rounded-2xl p-6 text-white transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 cursor-pointer">
      <div className="text-lg font-semibold mb-4">Chats</div>
      <ul className="divide-y divide-[#4c2d77]">
        {chats.map((c, i) => (
          <li key={i} className="flex items-start gap-3 py-4 first:pt-0 last:pb-0">
            <div className={`w-8 h-8 rounded-full`} style={{ backgroundColor: c.color }}>
              <span className="text-sm font-semibold flex items-center justify-center h-full text-white">{c.name[0]}</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between text-sm font-medium">
                <span>{c.name}</span>
                <span className="text-gray-400 font-normal">{c.time}</span>
              </div>
              <div className="text-sm text-gray-300">{c.message}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}