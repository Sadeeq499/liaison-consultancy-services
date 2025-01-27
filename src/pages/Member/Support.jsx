import React, { useState } from "react";
import MemberLayout from "../../layouts/member/MemberLayout";
import { motion } from "framer-motion";
import {
  FaPlus,
  FaSearch,
  FaFilter,
  FaCircle,
  FaComment,
  FaPaperclip,
  FaSpinner,
} from "react-icons/fa";

function Support() {
  const [tickets, setTickets] = useState([
    {
      id: "TKT001",
      subject: "Issue with document upload",
      description: "Unable to upload PDF files in the service request form",
      status: "open",
      priority: "high",
      category: "technical",
      createdAt: "2024-03-20 10:30",
      lastUpdated: "2024-03-20 14:45",
      messages: [
        {
          id: 1,
          sender: "user",
          message: "I'm unable to upload PDF files larger than 2MB",
          timestamp: "2024-03-20 10:30",
        },
        {
          id: 2,
          sender: "support",
          message:
            "We're looking into this issue. Could you please provide more details about the file size and format?",
          timestamp: "2024-03-20 14:45",
        },
      ],
    },
    {
      id: "TKT002",
      subject: "Payment confirmation pending",
      description: "Payment made but no confirmation received",
      status: "pending",
      priority: "medium",
      category: "billing",
      createdAt: "2024-03-19 15:20",
      lastUpdated: "2024-03-19 16:30",
      messages: [
        {
          id: 1,
          sender: "user",
          message: "I made a payment but haven't received any confirmation",
          timestamp: "2024-03-19 15:20",
        },
      ],
    },
  ]);

  const [showNewTicketForm, setShowNewTicketForm] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const getStatusColor = (status) => {
    switch (status) {
      case "open":
        return "text-yellow-500";
      case "pending":
        return "text-blue-500";
      case "resolved":
        return "text-green-500";
      case "closed":
        return "text-gray-500";
      default:
        return "text-gray-500";
    }
  };

  const handleNewTicket = (e) => {
    e.preventDefault();
    // Add new ticket logic here
    setShowNewTicketForm(false);
  };

  const handleSendMessage = (ticketId) => {
    if (!newMessage.trim()) return;

    setTickets(
      tickets.map((ticket) => {
        if (ticket.id === ticketId) {
          return {
            ...ticket,
            messages: [
              ...ticket.messages,
              {
                id: ticket.messages.length + 1,
                sender: "user",
                message: newMessage,
                timestamp: new Date().toLocaleString(),
              },
            ],
          };
        }
        return ticket;
      })
    );

    setNewMessage("");
  };

  return (
    <MemberLayout>
      <div className="p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Support Center
          </h1>
          <p className="text-gray-600">
            Need help? Create a ticket or check the status of your existing
            requests.
          </p>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <button
            onClick={() => setShowNewTicketForm(true)}
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            <FaPlus /> New Ticket
          </button>
          <div className="flex flex-1 max-w-md gap-4">
            <div className="relative flex-1">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search tickets..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="open">Open</option>
              <option value="pending">Pending</option>
              <option value="resolved">Resolved</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>

        {/* New Ticket Form */}
        {showNewTicketForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-6"
          >
            <h2 className="text-xl font-semibold mb-4">Create New Ticket</h2>
            <form onSubmit={handleNewTicket} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500">
                  <option value="technical">Technical Support</option>
                  <option value="billing">Billing</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Priority
                </label>
                <select className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  rows="4"
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowNewTicketForm(false)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Submit Ticket
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Tickets List */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ticket ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Updated
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tickets.map((ticket) => (
                  <tr
                    key={ticket.id}
                    onClick={() => setSelectedTicket(ticket)}
                    className="hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {ticket.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {ticket.subject}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="flex items-center">
                        <FaCircle
                          className={`${getStatusColor(
                            ticket.status
                          )} mr-2 text-xs`}
                        />
                        {ticket.status.charAt(0).toUpperCase() +
                          ticket.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {ticket.lastUpdated}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {ticket.priority.charAt(0).toUpperCase() +
                        ticket.priority.slice(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Ticket Details Modal */}
        {selectedTicket && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl shadow-lg w-full max-w-2xl max-h-[80vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {selectedTicket.subject}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Ticket ID: {selectedTicket.id}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedTicket(null)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    ×
                  </button>
                </div>

                {/* Ticket Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-500">Status</p>
                    <p className="font-medium">
                      <span className="flex items-center">
                        <FaCircle
                          className={`${getStatusColor(
                            selectedTicket.status
                          )} mr-2 text-xs`}
                        />
                        {selectedTicket.status.charAt(0).toUpperCase() +
                          selectedTicket.status.slice(1)}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Priority</p>
                    <p className="font-medium">
                      {selectedTicket.priority.charAt(0).toUpperCase() +
                        selectedTicket.priority.slice(1)}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Created</p>
                    <p className="font-medium">{selectedTicket.createdAt}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Last Updated</p>
                    <p className="font-medium">{selectedTicket.lastUpdated}</p>
                  </div>
                </div>

                {/* Messages */}
                <div className="space-y-4 mb-6">
                  {selectedTicket.messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender === "user"
                          ? "justify-end"
                          : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.sender === "user"
                            ? "bg-green-500 text-white"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        <p className="text-sm">{message.message}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.sender === "user"
                              ? "text-green-100"
                              : "text-gray-500"
                          }`}
                        >
                          {message.timestamp}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Reply Form */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                  <button
                    onClick={() => handleSendMessage(selectedTicket.id)}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                  >
                    Send
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </MemberLayout>
  );
}

export default Support;
