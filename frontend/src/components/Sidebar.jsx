import { Clock, DollarSign, FileText, CreditCard, PlusSquare, PiggyBank } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#2D0F52] text-white p-6 flex flex-col min-h-screen flex-shrink-0">
      <div>
        <div className="text-2xl font-bold mb-10 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5F4BFF] to-[#AD47F6] flex items-center justify-center text-white font-bold">P</div>
          Proxa
        </div>
        
        <nav className="space-y-6 text-sm mb-8">
          <NavLink 
            to="/activity" 
            className={({ isActive }) => 
              `flex items-center gap-3 transition-colors ${isActive ? 'text-[#AD47F6] font-semibold' : 'hover:text-gray-300'}`
            }
          >
            <Clock size={18}/> Activity
          </NavLink>
          <NavLink 
            to="/money" 
            className={({ isActive }) => 
              `flex items-center gap-3 transition-colors ${isActive ? 'text-[#AD47F6] font-semibold' : 'hover:text-gray-300'}`
            }
          >
            <DollarSign size={18}/> Money
          </NavLink>
          <NavLink 
            to="/savings" 
            className={({ isActive }) => 
              `flex items-center gap-3 transition-colors ${isActive ? 'text-[#AD47F6] font-semibold' : 'hover:text-gray-300'}`
            }
          >
            <PiggyBank size={18}/> Savings
          </NavLink>
          <NavLink 
            to="/card" 
            className={({ isActive }) => 
              `flex items-center gap-3 transition-colors ${isActive ? 'text-[#AD47F6] font-semibold' : 'hover:text-gray-300'}`
            }
          >
            <CreditCard size={18}/> Card
          </NavLink>
          <NavLink 
            to="/pay-request" 
            className={({ isActive }) => 
              `flex items-center gap-3 transition-colors ${isActive ? 'text-[#AD47F6] font-semibold' : 'hover:text-gray-300'}`
            }
          >
            <PlusSquare size={18}/> Pay & Request
          </NavLink>
          <NavLink 
            to="/documents" 
            className={({ isActive }) => 
              `flex items-center gap-3 transition-colors ${isActive ? 'text-[#AD47F6] font-semibold' : 'hover:text-gray-300'}`
            }
          >
            <FileText size={18}/> Documents
          </NavLink>
        </nav>
        
        {/* User Profile Section */}
        <div className="p-4 flex justify-start">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4D6CFA] to-[#A346E8] flex items-center justify-center text-white font-bold text-lg">
              I
            </div>
            <div>
              <div className="font-semibold text-white">IA</div>
              <div className="text-sm text-gray-300">$IAb</div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}