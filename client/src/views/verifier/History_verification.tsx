import React from "react";
import Navbar from "../../components/utils/Navbar";
import { Dashboard, VerifiedUser, History } from "@mui/icons-material";

interface VerificationRecord {
  documentName: string;
  verificationDate: string;
  status: "verified" | "failed" | "pending";
}

const History_verification: React.FC = () => {
  const navbarOptions = [
    { path: "/dashboard/123", label: "Dashboard", icon: <Dashboard /> },
    { path: "/verify", label: "Verify", icon: <VerifiedUser /> },
    { path: "/verification/history/123", label: "History", icon: <History /> },
  ];

  const verificationHistory: VerificationRecord[] = [
    {
      documentName: "Employment Certificate.pdf",
      verificationDate: "2024-06-12",
      status: "verified",
    },
    {
      documentName: "Academic Transcript.pdf",
      verificationDate: "2024-06-11",
      status: "failed",
    },
    {
      documentName: "Training Certificate.pdf",
      verificationDate: "2024-06-10",
      status: "pending",
    },
    // Add more records as needed
  ];

  const getStatusColor = (status: VerificationRecord["status"]) => {
    switch (status) {
      case "verified":
        return "text-green-400";
      case "failed":
        return "text-red-400";
      case "pending":
        return "text-yellow-400";
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar options={navbarOptions} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="sm:flex sm:items-center mb-8">
          <div className="sm:flex-auto">
            <h1 className="text-2xl font-semibold text-gray-100">
              Verification History
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              A list of all documents verified by you
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="mt-8 flow-root">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden bg-gray-800/30 border border-gray-600/50 shadow-xl rounded-xl backdrop-blur-sm">
                <table className="min-w-full divide-y divide-gray-700/50">
                  <thead className="bg-gray-800/50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-200 sm:pl-6"
                      >
                        Document Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-200"
                      >
                        Verification Date
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-200"
                      >
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700/50">
                    {verificationHistory.map((record, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-gray-700/30 transition-colors duration-200"
                      >
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-200 sm:pl-6">
                          {record.documentName}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                          {new Date(
                            record.verificationDate
                          ).toLocaleDateString()}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          <span
                            className={`${getStatusColor(
                              record.status
                            )} font-medium`}
                          >
                            {record.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History_verification;
