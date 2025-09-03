// components/RecentFriends.jsx

const friends = [
  { name: "Art Solace", username: "@sol_art", color: "#5F4BFF" },
  { name: "Cold Steel", username: "@steel_iced", color: "#A346E8" },
  { name: "Stop Park", username: "@s_park", color: "#6C63FF" },
];
const TriangleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 opacity-60"
  >
    <path d="M12 4L20 20H4L12 4Z" />
  </svg>
);

export default function RecentFriends() {
  return (
    <div className="bg-[#3E1A6A] rounded-2xl p-6 text-white transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 cursor-pointer">
      <div className="text-lg font-semibold mb-4">Recent Friends</div>
      <ul className="divide-y divide-[#4c2d77]">
        {friends.map((f, i) => (
          <li key={i} className="flex justify-between items-center py-4 first:pt-0 last:pb-0">
            <div className="flex gap-3 items-center">
              <div className={`w-8 h-8 rounded-full`} style={{ backgroundColor: f.color }}>
                <span className="text-sm font-semibold flex items-center justify-center h-full text-white">{f.name[0]}</span>
              </div>
              <div>
                <div className="font-medium text-sm">{f.name}</div>
                <div className="text-sm text-gray-400">{f.username}</div>
              </div>
            </div>
            <TriangleIcon />
          </li>
        ))}
      </ul>
    </div>
  );
}
