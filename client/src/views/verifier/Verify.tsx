import React, { useState, useRef } from "react";
import Navbar from "../../components/utils/Navbar";
import {
  CloudUpload,
  Close,
  AccountBalanceWallet,
  Shield,
} from "@mui/icons-material";
// import { useSelector } from "react-redux";
// import { selectIsAuthenticated } from "../../redux/slices/authSlice";

const Verify: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [verificationResult, setVerificationResult] = useState<{
    status: "success" | "error" | null;
    message: string;
  }>({ status: null, message: "" });
  const fileInputRef = useRef<HTMLInputElement>(null);
  //   const isAuthenticated = useSelector(selectIsAuthenticated);

  const navbarOptions = [
    { path: "/verify", label: "Verify" },
    { path: "/verification/history/123", label: "History" },
  ];

  const handleWalletConnect = () => {
    // Add your wallet connection logic here
    setIsWalletConnected(true);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (
      file &&
      file.type === "application/pdf" &&
      file.size <= 100 * 1024 * 1024
    ) {
      setSelectedFile(file);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (
      file &&
      file.type === "application/pdf" &&
      file.size <= 100 * 1024 * 1024
    ) {
      setSelectedFile(file);
    }
  };

  const handleVerify = () => {
    // Add your verification logic here
    // This is just a sample result
    setVerificationResult({
      status: "success",
      message: "Document verified successfully on the blockchain!",
    });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar options={navbarOptions} />

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[80vh]">
        {/* Title Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-100 mb-2">
            Upload and Verify Document
          </h1>
          <p className="text-gray-400 text-sm">
            Upload your document to verify its authenticity on the blockchain
          </p>
        </div>

        {/* Wallet Connection Button */}
        {!isWalletConnected && (
          <button
            onClick={handleWalletConnect}
            className="mb-6 flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <AccountBalanceWallet />
            Connect Wallet
          </button>
        )}

        {/* Upload Section */}
        <div className="w-full">
          <div
            className={`
              border-2 border-dashed ${
                isWalletConnected ? "border-gray-600" : "border-gray-700"
              } 
              rounded-xl p-8
              flex flex-col items-center justify-center
              transition-colors duration-200
              ${
                isWalletConnected
                  ? "hover:border-gray-500"
                  : "opacity-50 cursor-not-allowed"
              }
              bg-gray-800/50
            `}
            onDragOver={(e) => isWalletConnected && e.preventDefault()}
            onDrop={(e) => isWalletConnected && handleDrop(e)}
          >
            {!selectedFile ? (
              <>
                <CloudUpload className="text-gray-400 mb-4 text-5xl" />
                <p className="text-gray-400 text-sm mb-2">
                  {isWalletConnected
                    ? "Drag & drop or click to upload PDF"
                    : "Connect wallet to upload document"}
                </p>
                <p className="text-gray-500 text-xs">
                  Maximum file size: 100MB
                </p>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  accept=".pdf"
                  className="hidden"
                  disabled={!isWalletConnected}
                />
                <button
                  onClick={() =>
                    isWalletConnected && fileInputRef.current?.click()
                  }
                  className={`mt-4 px-4 py-2 rounded-lg text-sm
                    ${
                      isWalletConnected
                        ? "bg-blue-600 text-white hover:bg-blue-500"
                        : "bg-gray-600 text-gray-400 cursor-not-allowed"
                    } transition-colors`}
                  disabled={!isWalletConnected}
                >
                  Select File
                </button>
              </>
            ) : (
              <div className="flex items-center gap-4">
                <p className="text-gray-200">{selectedFile.name}</p>
                <button
                  onClick={() => setSelectedFile(null)}
                  className="p-1 text-gray-400 hover:text-gray-200 transition-colors"
                >
                  <Close />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-center w-full">
          <button
            onClick={handleVerify}
            disabled={!selectedFile || !isWalletConnected}
            className={`
              flex items-center justify-center 
              rounded-lg h-12 px-8 
              text-sm font-semibold leading-normal tracking-wide 
              shadow-md focus:outline-none focus:ring-2 
              focus:ring-blue-500 focus:ring-offset-2 
              focus:ring-offset-gray-800 transition-colors duration-150
              ${
                selectedFile && isWalletConnected
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-600 text-gray-300 cursor-not-allowed"
              }
            `}
          >
            <span className="material-icons-outlined mr-2 text-lg">send</span>
            Verify Document
          </button>
        </div>

        {/* Verification Result */}
        {verificationResult.status && (
          <div
            className={`
    mt-8 w-full p-4 rounded-lg
    ${
      verificationResult.status === "success"
        ? "bg-green-900/30 border border-green-600/30"
        : "bg-red-900/30 border border-red-600/30"
    }
  `}
          >
            <div className="flex items-center gap-3">
              <div
                className={`
        rounded-full p-2
        ${
          verificationResult.status === "success"
            ? "bg-green-600/20 text-green-400"
            : "bg-red-600/20 text-red-400"
        }
      `}
              >
                {verificationResult.status === "success" ? "✓" : "✕"}
              </div>
              <p
                className={`
        text-sm font-medium flex items-center gap-2
        ${
          verificationResult.status === "success"
            ? "text-green-300"
            : "text-red-300"
        }
      `}
              >
                {verificationResult.message}
                {verificationResult.status === "success" && (
                  <Shield className="text-green-400 ml-2" />
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Verify;
