import { useState } from "react";

const Leaderboard = () => {
  const scores =
    JSON.parse(
      localStorage.getItem("scores")
    ) || [];

  // Get Unique Quiz Names
  const quizNames = [
    ...new Set(scores.map((s) => s.quiz)),
  ];

  const [selectedQuiz, setSelectedQuiz] =
    useState(quizNames[0] || "");

  // Filter Quiz Scores
  const filteredScores = scores
    .filter(
      (item) =>
        item.quiz === selectedQuiz
    )
    .sort((a, b) => b.score - a.score);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#312e81] p-6">

      {/* Header */}
      <div className="text-center mb-12">

        <h1 className="text-6xl font-extrabold text-cyan-300 mb-5">
          Leaderboard
        </h1>

        <p className="text-gray-300 text-xl">
          Quiz-wise rankings
        </p>

      </div>

      {/* Quiz Selector */}
      <div className="max-w-xl mx-auto mb-12">

        <select
          value={selectedQuiz}
          onChange={(e) =>
            setSelectedQuiz(
              e.target.value
            )
          }
          className="w-full bg-white/10 border border-white/20 text-white p-5 rounded-2xl outline-none text-xl"
        >

          {quizNames.map((quiz, index) => (
            <option
              key={index}
              value={quiz}
              className="text-black"
            >
              {quiz}
            </option>
          ))}

        </select>

      </div>

      {/* No Scores */}
      {filteredScores.length === 0 ? (
        <div className="flex flex-col items-center py-24">

          <div className="text-8xl mb-6">
            🏆
          </div>

          <h2 className="text-4xl font-bold text-white mb-4">
            No Scores Yet
          </h2>

        </div>
      ) : (
        <div className="max-w-6xl mx-auto">

          {/* Leaderboard */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden">

            {/* Header */}
            <div className="grid grid-cols-5 bg-cyan-500/20 text-cyan-300 text-xl font-bold p-6 border-b border-white/10">

              <div>Rank</div>

              <div>User</div>

              <div>Quiz</div>

              <div>Score</div>

              <div>Date</div>

            </div>

            {/* Rows */}
            {filteredScores.map(
              (item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-5 items-center p-6 border-b border-white/10 text-white hover:bg-white/10 transition-all duration-300"
                >

                  {/* Rank */}
                  <div className="flex items-center text-xl font-bold">

                    <span className="mr-3">

                      {index === 0
                        ? "🥇"
                        : index === 1
                        ? "🥈"
                        : index === 2
                        ? "🥉"
                        : "🏅"}

                    </span>

                    #{index + 1}

                  </div>

                  {/* Username */}
                  <div className="text-lg">
                    {item.username}
                  </div>

                  {/* Quiz */}
                  <div className="text-lg">
                    {item.quiz}
                  </div>

                  {/* Score */}
                  <div className="text-2xl font-bold text-cyan-300">
                    {item.score}
                  </div>

                  {/* Date */}
                  <div className="text-gray-300">
                    {item.date}
                  </div>

                </div>
              )
            )}

          </div>

        </div>
      )}

    </div>
  );
};

export default Leaderboard;