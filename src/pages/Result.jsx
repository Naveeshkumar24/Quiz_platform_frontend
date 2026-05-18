import { useSelector } from "react-redux";
import jsPDF from "jspdf";

const Result = () => {
  const { score } = useSelector(
    (state) => state.quiz
  );

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const scores =
    JSON.parse(localStorage.getItem("scores")) || [];

  const latestQuiz =
    scores[scores.length - 1] || {};

  const downloadPDF = () => {
    const doc = new jsPDF("landscape");

    // Background
    doc.setFillColor(245, 247, 250);
    doc.rect(0, 0, 300, 210, "F");

    // Border
    doc.setDrawColor(0, 102, 204);
    doc.setLineWidth(3);
    doc.rect(10, 10, 277, 190);

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(28);
    doc.setTextColor(0, 51, 102);

    doc.text(
      "AlmaBetter Quiz Certificate",
      148,
      40,
      { align: "center" }
    );

    // Subtitle
    doc.setFontSize(18);
    doc.setTextColor(80);

    doc.text(
      "Certificate of Achievement",
      148,
      60,
      { align: "center" }
    );

    // Presented To
    doc.setFontSize(16);

    doc.text(
      "This certificate is proudly presented to",
      148,
      85,
      { align: "center" }
    );

    // Username
    doc.setFontSize(30);
    doc.setTextColor(0, 102, 204);

    doc.text(
      user.name || "Student",
      148,
      105,
      { align: "center" }
    );

    // Quiz Details
    doc.setFontSize(18);
    doc.setTextColor(50);

    doc.text(
      `For successfully completing the quiz`,
      148,
      125,
      { align: "center" }
    );

    // Quiz Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);

    doc.text(
      latestQuiz.quiz || "Quiz Platform",
      148,
      142,
      { align: "center" }
    );

    // Score
    doc.setFont("helvetica", "normal");
    doc.setFontSize(18);

    doc.text(
      `Score Achieved: ${score}`,
      148,
      160,
      { align: "center" }
    );

    // Date
    doc.setFontSize(14);

    doc.text(
      `Date: ${new Date().toLocaleDateString()}`,
      148,
      178,
      { align: "center" }
    );

    // Footer
    doc.setFontSize(12);
    doc.setTextColor(120);

    doc.text(
      "Powered by Quiz Platform",
      148,
      192,
      { align: "center" }
    );

// Save PDF
doc.save(
  user?.name && latestQuiz?.quiz
    ? `${user.name}-${latestQuiz.quiz}-Certificate.pdf`
    : "AlmaBetter-Certificate.pdf"
);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-200 flex justify-center items-center p-6">
      <div className="bg-white max-w-3xl w-full rounded-3xl shadow-2xl p-10 text-center border-8 border-blue-500">
        
        {/* Header */}
        <h1 className="text-5xl font-bold text-blue-700 mb-4">
          AlmaBetter
        </h1>

        <h2 className="text-3xl font-semibold text-gray-700 mb-8">
          Certificate of Achievement
        </h2>

        {/* Content */}
        <p className="text-lg text-gray-600 mb-4">
          This certificate is proudly presented to
        </p>

        {/* Username */}
        <h3 className="text-5xl font-bold text-blue-600 mb-8">
          {user.name || "Student"}
        </h3>

        {/* Quiz */}
        <p className="text-xl text-gray-700 mb-4">
          For successfully completing
        </p>

        <h4 className="text-3xl font-bold text-gray-800 mb-8">
          {latestQuiz.quiz || "Quiz Platform"}
        </h4>

        {/* Score */}
        <div className="bg-blue-100 rounded-2xl p-6 mb-8">
          <h2 className="text-4xl font-bold text-blue-700">
            Score: {score}
          </h2>
        </div>

        {/* Date */}
        <p className="text-gray-500 mb-10">
          Date: {new Date().toLocaleDateString()}
        </p>

        {/* Download Button */}
        <button
          onClick={downloadPDF}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition"
        >
          Download Certificate PDF
        </button>
      </div>
    </div>
  );
};

export default Result;