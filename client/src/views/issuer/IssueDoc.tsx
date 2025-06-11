import React from 'react';
import Sidebar from '../../components/utils/SideBar';
import IssueForm from '../../components/issuepage/IssueForm';
import { Description, Dashboard, Search} from '@mui/icons-material';

const IssueDoc: React.FC = () => {
  const sidebarOptions = [
    { path: '/dashboard-issuer/:id', label: 'Dashboard', icon: <Dashboard /> },
    { path: '/issue-doc', label: 'Issue', icon: <Description /> },
    { path: '/verify', label: 'Verify', icon: <Search /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Sidebar */}
      <Sidebar options={sidebarOptions} />

      {/* Main Content */}
      <main className="flex-1 p-8 ml-72">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8">
            <h1 className="text-gray-100 tracking-tight text-3xl font-bold">
              Issue Document
            </h1>
            <p className="text-gray-400 mt-1">
              Fill in the details below to issue a new document on the blockchain.
            </p>
          </header>

          {/* Issue Form */}
          <IssueForm />
        </div>
      </main>
    </div>
  );
};

export default IssueDoc;