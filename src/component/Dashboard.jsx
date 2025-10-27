import { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Eye, Plus } from "lucide-react";

export const Dashboard = ({ setCurrentPath }) => {
  const [tickets, setTickets] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = localStorage.getItem("ticketapp_session");
    if (!session) {
      setCurrentPath("/auth/login");
      return;
    }

    const userData = JSON.parse(localStorage.getItem("ticketapp_user") || "{}");
    setUser(userData);

    const storedTickets = JSON.parse(
      localStorage.getItem("ticketapp_tickets") || "[]"
    );
    setTickets(storedTickets);
  }, [setCurrentPath]);

  const stats = {
    total: tickets.length,
    open: tickets.filter((t) => t.status === "open").length,
    in_progress: tickets.filter((t) => t.status === "in_progress").length,
    closed: tickets.filter((t) => t.status === "closed").length,
  };
  const overView = [
    {
      label: "Total Tickets",
      value: stats.total,
      color: "from-blue-500 to-blue-600",
    },
    {
      label: "Open Tickets",
      value: stats.open,
      color: "from-green-500 to-green-600",
    },
    {
      label: "In Progress",
      value: stats.in_progress,
      color: "from-yellow-300 to-yellow-400",
    },
    {
      label: "Resolved",
      value: stats.closed,
      color: "from-gray-500 to-gray-600",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-1 py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {user?.name || "User"}!
            </h1>
            <p className="text-gray-600">Here's an overview of your tickets</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {overView.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div
                  className={`w-12 h-12 bg-linear-to-br ${stat.color} rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4`}
                >
                  {stat.value}
                </div>
                <h3 className="text-gray-600 text-sm font-medium">
                  {stat.label}
                </h3>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Quick Actions
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => setCurrentPath("/tickets")}
                className="flex items-center justify-center gap-3 px-6 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                <Plus size={20} />
                Create New Ticket
              </button>
              <button
                onClick={() => setCurrentPath("/tickets")}
                className="flex items-center justify-center gap-3 px-6 py-4 bg-gray-100 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition-all"
              >
                <Eye size={20} />
                View All Tickets
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

