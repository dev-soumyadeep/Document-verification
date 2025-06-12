import React from "react";
import Sidebar from "../../components/utils/SideBar";
import {
  Dashboard,
  VerifiedUser,
  Download,
  Description,
  InsertDriveFile,
} from "@mui/icons-material";
import { HolderDocument } from "../../types/Document";
import { selectUser } from "../../redux/slices/authSlice";
import { useSelector } from "react-redux";
const Documents_holder: React.FC = () => {
  const user = useSelector(selectUser);
  const sidebarOptions = [
    {
      path: "/dashboard/123",
      label: "Dashboard",
      icon: <Dashboard />,
    },
    ...(user?.type === "organization"
      ? [
          {
            path: "/issue-doc",
            label: "Issue",
            icon: <Description />,
          },
        ]
      : []),
    {
      path: "/holding/my-documents/123",
      label: "My Documents",
      icon: <InsertDriveFile />,
    },
    {
      path: "/verify",
      label: "Verify",
      icon: <VerifiedUser />,
    },
  ];

  const documents: HolderDocument[] = [
    {
      title: "Proof of Employment",
      issuer: "Acme Co",
      date: "2023-08-15",
      details: {
        description: "Employment verification document",
        fields: [
          { name: "Name", value: "Alice Johnson" },
          { name: "Employee ID", value: "EMP12345" },
          { name: "Department", value: "Engineering" },
          { name: "Start Date", value: "2021-08-15" },
          { name: "End Date", value: "2023-08-15" },
        ],
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Sidebar options={sidebarOptions} />

      {/* Main Content - Updated with responsive classes */}
      <div
        className={`
        pt-20 px-4 sm:px-6 md:px-8 
        sm:ml-24 lg:ml-72 
        transition-all duration-300 ease-in-out
      `}
      >
        <div className="max-w-7xl mx-auto">
          {/* Responsive Header */}
          <header className="mb-6 sm:mb-8">
            <h1 className="text-gray-100 text-2xl sm:text-3xl font-bold leading-tight">
              My Documents
            </h1>
            <p className="mt-2 text-gray-400 text-sm sm:text-base">
              View and manage documents issued to you
            </p>
          </header>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {documents.map((doc, idx) => (
              <div
                key={idx}
                className="
                bg-gray-800/50 backdrop-blur-sm 
                border border-gray-700/50 
                rounded-xl shadow-xl 
                p-4 sm:p-6
                transition-all duration-300
                hover:bg-gray-800/70
              "
              >
                {/* Document Header - Responsive */}
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="text-blue-400 flex items-center justify-center rounded-xl bg-blue-900/30 shrink-0 size-12 sm:size-14">
                    <Description className="size-6 sm:size-8" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h2 className="text-gray-100 text-lg sm:text-xl font-semibold">
                      {doc.title}
                    </h2>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Issued by: {doc.issuer}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Issued on: {doc.date}
                    </p>
                  </div>
                </div>

                {/* Document Details - Responsive */}
                <section className="mb-6 sm:mb-8">
                  <h3 className="text-gray-100 text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                    Document Information
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4">
                    {doc.details.description}
                  </p>

                  {/* Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-8 sm:gap-y-5 border-t border-gray-700/50 pt-4 sm:pt-5">
                    {doc.details.fields.map((field, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-[120px_1fr] sm:grid-cols-[auto_1fr] gap-2 sm:gap-x-4"
                      >
                        <p className="text-gray-400 text-xs sm:text-sm">
                          {field.name}:
                        </p>
                        <p className="text-gray-200 text-xs sm:text-sm font-medium">
                          {field.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Actions - Responsive */}
                <section>
                  <h3 className="text-gray-100 text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                    Actions
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <button
                      className="
                      flex items-center justify-center gap-2 
                      rounded-lg h-9 sm:h-10 px-4 sm:px-5 
                      bg-blue-600 text-white 
                      text-xs sm:text-sm font-semibold 
                      hover:bg-blue-500 transition-colors
                      w-full sm:w-auto
                    "
                    >
                      <Download className="size-4 sm:size-5" />
                      Download
                    </button>
                  </div>
                </section>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents_holder;
