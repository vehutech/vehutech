import { useState } from "react";
import {
  Download,
  Eye,
  FileText,
  ExternalLink,
  Printer,
  Share2,
} from "lucide-react";

export default function ResumePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"embedded" | "fullscreen">(
    "embedded",
  );

  // Replace with your actual resume URL
  const resumeUrl = "/resume.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Vehutech_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.open(resumeUrl, "_blank");
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Resume",
          text: "Check out my resume",
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert("Resume link copied to clipboard!");
    }
  };

  return (
    <div className="pt-30 bg-background min-h-screen">
      {/* Header Section */}
      <div className="shadow-sm border-b sm:px-40 px-4 py-2">
        <div className="max-w-7xl mx-auto py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Title */}
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg mr-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Resume</h1>
                <p className="text-gray-600 mt-1">
                  View my complete professional background
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>

              <button
                onClick={handlePrint}
                className="flex items-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg"
              >
                <Printer className="w-4 h-4" />
                Print
              </button>

              <button
                onClick={handleShare}
                className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors shadow-md hover:shadow-lg"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>

          {/* View Mode Toggle */}
          <div className="mt-6 flex gap-2">
            <button
              onClick={() => setViewMode("embedded")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                viewMode === "embedded"
                  ? "bg-blue-100 text-blue-700 border border-blue-200"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Eye className="w-4 h-4" />
              Embedded View
            </button>

            <button
              onClick={() => setViewMode("fullscreen")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                viewMode === "fullscreen"
                  ? "bg-blue-100 text-blue-700 border border-blue-200"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <ExternalLink className="w-4 h-4" />
              Full Screen
            </button>
          </div>
        </div>
      </div>

      {/* Resume Viewer Section */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {viewMode === "embedded" ? (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Loading State */}
            {isLoading && (
              <div className="flex items-center justify-center h-96 bg-gray-50">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading resume...</p>
                </div>
              </div>
            )}

            {/* PDF Viewer */}
            <div className="relative">
              <iframe
                src={resumeUrl}
                className="w-full h-screen border-0"
                title="Resume PDF"
                onLoad={() => setIsLoading(false)}
                style={{ minHeight: "800px" }}
              />

              {/* Fallback for browsers that don't support iframe */}
              <div
                className="absolute inset-0 flex items-center justify-center bg-gray-50"
                style={{ display: "none" }}
              >
                <div className="text-center p-8">
                  <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    PDF Viewer Not Supported
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Your browser doesn't support embedded PDFs. Please download
                    the resume to view it.
                  </p>
                  <button
                    onClick={handleDownload}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Download Resume
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Full Screen Mode */
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="max-w-md mx-auto">
              <div className="p-6 bg-blue-50 rounded-lg mb-6">
                <ExternalLink className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Full Screen View
                </h3>
                <p className="text-gray-600 mb-6">
                  Open the resume in a new tab for the best viewing experience.
                </p>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Open in New Tab
                </a>
              </div>

              <div className="text-sm text-gray-500">
                <p>Or switch back to embedded view using the toggle above</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Additional Info Section */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-semibold text-gray-900 mb-2">Quick Download</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get a copy of my resume for your records
            </p>
            <button
              onClick={handleDownload}
              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              Download PDF →
            </button>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-semibold text-gray-900 mb-2">Print Friendly</h3>
            <p className="text-gray-600 text-sm mb-4">
              Print directly from your browser
            </p>
            <button
              onClick={handlePrint}
              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              Print Resume →
            </button>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-semibold text-gray-900 mb-2">Share</h3>
            <p className="text-gray-600 text-sm mb-4">
              Share this resume with others
            </p>
            <button
              onClick={handleShare}
              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              Share Link →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
