import React from "react";
import Navbar from "../../components/utils/Navbar";

interface Activity {
  documentName: string;
  holderEmail: string;
  txHash: string;
  dateIssued: string;
  status: "confirmed" | "pending" | "failed";
}

const History_issuer: React.FC = () => {
  const activities: Activity[] = [
    {
      documentName: "Certificate of Excellence",
      holderEmail: "john.doe@example.com",
      txHash: "0x1234567890abcdef1234567890abcdef12345678",
      dateIssued: "2024-06-12",
      status: "pending",
    },
    {
      documentName: "Certificate of Excellence",
      holderEmail: "john.doe@example.com",
      txHash: "0x1234567890abcdef1234567890abcdef12345678",
      dateIssued: "2024-06-12",
      status: "failed",
    },
    {
      documentName: "Certificate of Excellence",
      holderEmail: "john.doe@example.com",
      txHash: "0x1234567890abcdef1234567890abcdef12345678",
      dateIssued: "2024-06-12",
      status: "confirmed",
    },
    {
      documentName: "Certificate of Excellence",
      holderEmail: "john.doe@example.com",
      txHash: "0x1234567890abcdef1234567890abcdef12345678",
      dateIssued: "2024-06-12",
      status: "confirmed",
    },
    {
      documentName: "Certificate of Excellence",
      holderEmail: "john.doe@example.com",
      txHash: "0x1234567890abcdef1234567890abcdef12345678",
      dateIssued: "2024-06-12",
      status: "confirmed",
    },
    // Add more activities as needed
  ];

  const navbarOptions = [
    {
      path: "/dashboard/123",
      label: "Dashboard",
    },
    {
      path: "/issue/history/123",
      label: "History",
    },
    {
      path: "/issue-doc",
      label: "Issue",
    },
    {
      path: "/verify",
      label: "Verify",
    },
  ];

  const truncateString = (
    str: string,
    firstChars: number,
    lastChars: number
  ) => {
    if (str.length <= firstChars + lastChars) return str;
    return `${str.slice(0, firstChars)}...${str.slice(-lastChars)}`;
  };

  const getStatusColor = (status: Activity["status"]) => {
    switch (status) {
      case "confirmed":
        return "bg-green-900/50 text-green-300";
      case "pending":
        return "bg-yellow-900/50 text-yellow-300";
      case "failed":
        return "bg-red-900/50 text-red-300";
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar options={navbarOptions} />

      {/* Main Content - Updated margins and padding */}
      <div className="p-6 lg:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="sm:flex sm:items-center mb-8">
            <div className="sm:flex-auto">
              <h1 className="text-2xl font-semibold text-white">
                Recent Activity
              </h1>
              <p className="mt-2 text-sm text-gray-400">
                A list of all documents issued by your organization
              </p>
            </div>
          </div>
          <div className="mt-8 flow-root">
            <div className="overflow-x-auto">
              <div className="inline-block min-w-full py-2 align-middle">
                <div className="overflow-hidden bg-gray-800/30 border border-gray-600/50 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-xl backdrop-blur-sm">
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
                          Holder Email
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-200"
                        >
                          Tx Hash
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-200"
                        >
                          Date Issued
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
                      {activities.map((activity, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-gray-700/40 transition-colors duration-200"
                        >
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-200 sm:pl-6">
                            {activity.documentName}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                            {truncateString(activity.holderEmail, 6, 12)}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                            {truncateString(activity.txHash, 6, 4)}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">
                            {new Date(activity.dateIssued).toLocaleDateString()}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm">
                            <span
                              className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusColor(
                                activity.status
                              )}`}
                            >
                              {activity.status}
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
    </div>
  );
};

export default History_issuer;
