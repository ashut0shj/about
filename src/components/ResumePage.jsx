import { Link } from "react-router-dom";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import * as pdfjs from "pdfjs-dist";
import "pdfjs-dist/build/pdf.worker.min.js";
import ParticlesBackground from "../components/ParticlesBackground";

// Ensure pdf.js uses the correct worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`;

const ResumePage = () => {
  const layoutPlugin = defaultLayoutPlugin();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-darkBg0 text-white p-6">
      {/* Background Particles */}
      <ParticlesBackground />

      <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 bg-clip-text text-transparent mb-8">My Resume</h2>

{/* Download Button */}
<a
        href="/resume.pdf"
        download="Ashutosh_Jaiswal_Resume.pdf"
        className="mt-4 px-6 py-3 bg-purpleCard text-white rounded-lg shadow-md hover:bg-yellowAccent transition"
      >
        Download Resume
      </a>

      <div className="h-6"></div>

      {/* PDF Viewer */}
      <div className="w-full max-w-3xl h-[600px] border border-gray-700 shadow-lg bg-white">
        <Worker workerUrl={pdfjs.GlobalWorkerOptions.workerSrc}>
          <Viewer fileUrl="/resume.pdf" plugins={[layoutPlugin]} />
        </Worker>
      </div>

      

      {/* Back Button */}
      <Link to="/" className="mt-6 text-yellowAccent hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
};

export default ResumePage;
