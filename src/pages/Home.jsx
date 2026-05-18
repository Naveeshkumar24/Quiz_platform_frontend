import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [quizzes, setQuizzes] = useState([]);

  // Load quizzes from localStorage
  useEffect(() => {
    const storedQuizzes =
      JSON.parse(
        localStorage.getItem("quizzes")
      ) || [];

    setQuizzes(storedQuizzes);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#312e81] p-6">

      {/* Header */}
      <div className="text-center mb-14">

        <h1 className="text-6xl font-extrabold text-cyan-300 mb-5">
          Quiz Platform
        </h1>

        <p className="text-gray-300 text-xl">
          Test your knowledge with premium quizzes
        </p>

      </div>

      {/* No Quizzes */}
      {quizzes.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24">

          <div className="text-8xl mb-6">
            📚
          </div>

          <h2 className="text-4xl font-bold text-white mb-4">
            No Quizzes Available
          </h2>

          <p className="text-gray-300 text-lg">
            Create quizzes from Admin Dashboard
          </p>

        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {quizzes.map((quiz) => (
            <div
              key={quiz.id}
              className="group relative overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 hover:scale-105 transition-all duration-300"
            >

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-cyan-500/10 transition duration-500"></div>

              {/* Content */}
              <div className="relative z-10">

                {/* Badge */}
                <div className="inline-block bg-cyan-500/20 border border-cyan-400 text-cyan-300 px-4 py-2 rounded-2xl text-sm font-bold mb-6">
                  PREMIUM QUIZ
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold text-white mb-6">
                  {quiz.title}
                </h2>

                {/* Questions */}
                <div className="flex items-center text-gray-300 mb-4">

                  <span className="text-xl mr-3">
                    📖
                  </span>

                  <span>
                    {quiz.questions.length} Questions
                  </span>

                </div>

                {/* Created */}
              
                {/* Start Button */}
                <Link
                  to={`/quiz/${quiz.id}`}
                  className="block text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-500 hover:to-indigo-600 text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Start Quiz 🚀
                </Link>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default Home;