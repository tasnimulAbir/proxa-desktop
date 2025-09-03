import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import BalanceCard from "./components/BalanceCard";
import ProximityTransferCard from "./components/ProximityTransferCard";
import QuickActions from "./components/QuickActions";
import Chats from "./components/Chats";
import RecentFriends from "./components/RecentFriends";

// Placeholder components for other routes
const Activity = () => (
  <div className="bg-[#3E1A6A] rounded-2xl p-6 text-white">
    <h2 className="text-lg font-semibold mb-4">Activity</h2>
    <p className="text-gray-300">Your recent activity will appear here.</p>
  </div>
);

const Money = () => (
  <div className="bg-[#3E1A6A] rounded-2xl p-6 text-white">
    <h2 className="text-lg font-semibold mb-4">Money</h2>
    <p className="text-gray-300">Your money management tools will appear here.</p>
  </div>
);

const Savings = () => (
  <div className="bg-[#3E1A6A] rounded-2xl p-6 text-white">
    <h2 className="text-lg font-semibold mb-4">Savings</h2>
    <p className="text-gray-300">Your savings goals and progress will appear here.</p>
  </div>
);

const PayRequest = () => (
  <div className="bg-[#3E1A6A] rounded-2xl p-6 text-white">
    <h2 className="text-lg font-semibold mb-4">Pay & Request</h2>
    <p className="text-gray-300">Send money and request payments here.</p>
  </div>
);

const Documents = () => (
  <div className="bg-[#3E1A6A] rounded-2xl p-6 text-white">
    <h2 className="text-lg font-semibold mb-4">Documents</h2>
    <p className="text-gray-300">Your important documents will appear here.</p>
  </div>
);

const Dashboard = () => (
  <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
    {/* Left column - spans 2 columns on xl screens and above */}
    <div className="xl:col-span-2 space-y-6">
      <BalanceCard />
      <ProximityTransferCard />
      <QuickActions />
    </div>
    
    {/* Right column - spans 1 column on xl screens and above */}
    <div className="space-y-6">
      <Chats />
      <RecentFriends />
    </div>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 bg-[#1E0033] p-4 lg:p-8 overflow-x-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/card" replace />} />
            <Route path="/card" element={<Dashboard />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/money" element={<Money />} />
            <Route path="/savings" element={<Savings />} />
            <Route path="/pay-request" element={<PayRequest />} />
            <Route path="/documents" element={<Documents />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;