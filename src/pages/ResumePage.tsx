import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  Eye,
  FileText,
  ExternalLink,
  Printer,
  Share2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Squares from "@/components/util/Squares";
import BlurText from "@/components/util/BlutText";
import { useTheme } from "@/components/util/theme-provider";

export default function ResumePage() {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"embedded" | "fullscreen">("embedded");
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const [shareStatus, setShareStatus] = useState<"idle" | "success" | "error">("idle");
  const [mounted, setMounted] = useState(false);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Replace with your actual resume URL
  const resumeUrl = "/resume.pdf";

  const handleAnimationComplete = () => {
    setIsAnimationComplete(true);
  };

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
    setShareStatus("idle");
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My Resume",
          text: "Check out my resume",
          url: window.location.href,
        });
        setShareStatus("success");
      } catch (error) {
        console.log("Error sharing:", error);
        setShareStatus("error");
      }
    } else {
      // Fallback: copy URL to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        setShareStatus("success");
        setTimeout(() => setShareStatus("idle"), 3000);
      } catch (error) {
        setShareStatus("error");
        setTimeout(() => setShareStatus("idle"), 3000);
      }
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen bg-custom-background">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.2}
          squareSize={25}
          direction="right"
          borderColor={theme === "light" ? "#e5e7eb" : "#374151"}
          hoverFillColor={theme === "light" ? "#f3f4f6" : "#1f2937"}
        />
      </div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-custom-background/30 to-custom-background z-10"></div>

      <div className="relative z-20 pt-24">
        {/* Header Section */}
        <div className="sm:px-40 px-4 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Animated Title */}
            <div className="text-center mb-12">
              {!isAnimationComplete ? (
                <BlurText
                  text="Resume"
                  delay={100}
                  animateBy="words"
                  direction="top"
                  className="text-6xl md:text-8xl mb-6 font-bold text-custom-foreground"
                  onAnimationComplete={handleAnimationComplete}
                />
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-6xl md:text-8xl mb-6 font-bold text-custom-foreground">
                    Resume
                  </h1>
                </motion.div>
              )}
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-custom-muted-foreground max-w-2xl mx-auto"
              >
                View my complete professional background and download for your records
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 mb-8"
            >
              <Button
                onClick={handleDownload}
                className="bg-gradient-primary text-custom-primary-foreground px-6 py-3 shadow-glow hover-lift transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </Button>

              <Button
                onClick={handlePrint}
                variant="outline"
                className="px-6 py-3 hover:bg-custom-muted transition-all duration-300"
              >
                <Printer className="w-4 h-4 mr-2" />
                Print
              </Button>

              <Button
                onClick={handleShare}
                variant="outline"
                className="px-6 py-3 hover:bg-custom-muted transition-all duration-300 relative"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
                <AnimatePresence>
                  {shareStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute -top-2 -right-2"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </motion.div>
                  )}
                  {shareStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute -top-2 -right-2"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>

            {/* View Mode Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center gap-2 mb-12"
            >
              <Button
                onClick={() => setViewMode("embedded")}
                variant={viewMode === "embedded" ? "default" : "outline"}
                className={`px-4 py-2 transition-all duration-300 ${
                  viewMode === "embedded"
                    ? "bg-gradient-primary text-custom-primary-foreground shadow-glow"
                    : ""
                }`}
              >
                <Eye className="w-4 h-4 mr-2" />
                Embedded View
              </Button>

              <Button
                onClick={() => setViewMode("fullscreen")}
                variant={viewMode === "fullscreen" ? "default" : "outline"}
                className={`px-4 py-2 transition-all duration-300 ${
                  viewMode === "fullscreen"
                    ? "bg-gradient-primary text-custom-primary-foreground shadow-glow"
                    : ""
                }`}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Full Screen
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Resume Viewer Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-7xl mx-auto sm:px-40 px-4 pb-12"
        >
          {viewMode === "embedded" ? (
            <div className="bg-custom-card rounded-2xl shadow-2xl overflow-hidden border border-custom-border">
              {/* Loading State */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center h-96 bg-custom-muted/20"
                  >
                    <div className="text-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-12 h-12 border-4 border-primary-teal border-t-transparent rounded-full mx-auto mb-4"
                      />
                      <p className="text-custom-muted-foreground">Loading resume...</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* PDF Viewer */}
              <div className="relative">
                <iframe
                  src={resumeUrl}
                  className="w-full h-screen border-0 rounded-2xl"
                  title="Resume PDF"
                  onLoad={() => setIsLoading(false)}
                  style={{ minHeight: "800px" }}
                />

                {/* Fallback for browsers that don't support iframe */}
                <div
                  className="absolute inset-0 flex items-center justify-center bg-custom-muted/10 rounded-2xl"
                  style={{ display: "none" }}
                >
                  <div className="text-center p-8">
                    <FileText className="w-16 h-16 text-custom-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-custom-foreground mb-2">
                      PDF Viewer Not Supported
                    </h3>
                    <p className="text-custom-muted-foreground mb-6">
                      Your browser doesn't support embedded PDFs. Please download
                      the resume to view it.
                    </p>
                    <Button
                      onClick={handleDownload}
                      className="bg-gradient-primary text-custom-primary-foreground shadow-glow"
                    >
                      Download Resume
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Full Screen Mode */
            <div className="bg-custom-card rounded-2xl shadow-2xl p-12 text-center border border-custom-border">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-md mx-auto"
              >
                <div className="p-8 bg-gradient-to-br from-primary-teal/10 to-primary-light-teal/10 rounded-2xl mb-8 border border-primary-teal/20">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ExternalLink className="w-16 h-16 text-primary-teal mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-custom-foreground mb-4">
                    Full Screen View
                  </h3>
                  <p className="text-custom-muted-foreground mb-8">
                    Open the resume in a new tab for the best viewing experience with full zoom and navigation controls.
                  </p>
                  <Button
                    asChild
                    className="bg-gradient-primary text-custom-primary-foreground px-8 py-3 shadow-glow hover-lift"
                  >
                    <a
                      href={resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open in New Tab
                    </a>
                  </Button>
                </div>

                <div className="text-sm text-custom-muted-foreground">
                  <p>Or switch back to embedded view using the toggle above</p>
                </div>
              </motion.div>
            </div>
          )}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="max-w-7xl mx-auto sm:px-40 px-4 pb-16"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Download,
                title: "Quick Download",
                description: "Get a copy of my resume for your records",
                action: "Download PDF",
                onClick: handleDownload,
                color: "from-blue-500/10 to-blue-600/10 border-blue-500/20",
                iconColor: "text-blue-500",
                textColor: "text-blue-600 hover:text-blue-700"
              },
              {
                icon: Printer,
                title: "Print Friendly",
                description: "Print directly from your browser with optimized formatting",
                action: "Print Resume",
                onClick: handlePrint,
                color: "from-green-500/10 to-green-600/10 border-green-500/20",
                iconColor: "text-green-500",
                textColor: "text-green-600 hover:text-green-700"
              },
              {
                icon: Share2,
                title: "Share",
                description: "Share this resume link with others instantly",
                action: "Share Link",
                onClick: handleShare,
                color: "from-purple-500/10 to-purple-600/10 border-purple-500/20",
                iconColor: "text-purple-500",
                textColor: "text-purple-600 hover:text-purple-700"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 border hover:shadow-lg transition-all duration-300 group hover-lift`}
              >
                <item.icon className={`w-8 h-8 ${item.iconColor} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="font-bold text-custom-foreground mb-3 text-lg">
                  {item.title}
                </h3>
                <p className="text-custom-muted-foreground text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>
                <button
                  onClick={item.onClick}
                  className={`${item.textColor} font-semibold text-sm transition-all duration-300 hover:translate-x-1`}
                >
                  {item.action} →
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center pb-16"
        >
          <div className="max-w-2xl mx-auto sm:px-40 px-4">
            <h3 className="text-2xl font-bold text-custom-foreground mb-4">
              Let's Work Together
            </h3>
            <p className="text-custom-muted-foreground mb-8">
              Interested in my background? I'd love to discuss how I can contribute to your team.
            </p>
            <Button className="bg-gradient-primary text-custom-primary-foreground px-8 py-3 text-lg shadow-glow hover-lift">
              Get In Touch
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}