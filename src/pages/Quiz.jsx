import { useParams, useNavigate } from "react-router-dom";
import {
  useEffect,
  useState,
} from "react";
import { useDispatch } from "react-redux";
import { setScore } from "../redux/quizSlice";

const Quiz = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const quizzes =
    JSON.parse(localStorage.getItem("quizzes")) || [];

  const quiz = quizzes.find(
    (q) => q.id === Number(id)
  );

  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  const attempts =
    JSON.parse(localStorage.getItem("attempts")) || {};

  // Prevent Reattempt
  useEffect(() => {
    if (
      attempts[
        `${user.name}_${quiz?.id}`
      ]
    ) {
      alert(
        "You have already attempted this quiz"
      );

      navigate("/");
    }
  }, []);

  // Disable Browser Back
  useEffect(() => {
    window.history.pushState(
      null,
      "",
      window.location.href
    );

    const handlePopState = () => {
      window.history.pushState(
        null,
        "",
        window.location.href
      );
    };

    window.addEventListener(
      "popstate",
      handlePopState
    );

    return () => {
      window.removeEventListener(
        "popstate",
        handlePopState
      );
    };
  }, []);

  // Prevent Refresh Exit
  useEffect(() => {
    const handleBeforeUnload = (
      e
    ) => {
      e.preventDefault();

      e.returnValue =
        "Quiz is in progress";
    };

    window.addEventListener(
      "beforeunload",
      handleBeforeUnload
    );

    return () => {
      window.removeEventListener(
        "beforeunload",
        handleBeforeUnload
      );
    };
  }, []);

  // Current Question
  const [current, setCurrent] =
    useState(
      Number(
        localStorage.getItem(
          `currentQuestion_${id}`
        )
      ) || 0
    );

  // Score
  const [score, setLocalScore] =
    useState(
      Number(
        localStorage.getItem(
          `quizScore_${id}`
        )
      ) || 0
    );

  // Timer
  const [time, setTime] = useState(
    () => {
      const savedTime =
        localStorage.getItem(
          `timer_${id}`
        );

      return savedTime
        ? Number(savedTime)
        : 600;
    }
  );

  // Save Timer
  useEffect(() => {
    localStorage.setItem(
      `timer_${id}`,
      time
    );
  }, [time]);

  // Save Current Question
  useEffect(() => {
    localStorage.setItem(
      `currentQuestion_${id}`,
      current
    );
  }, [current]);

  // Save Score
  useEffect(() => {
    localStorage.setItem(
      `quizScore_${id}`,
      score
    );
  }, [score]);

  // Timer Logic
  useEffect(() => {
    if (time <= 0) {
      finishQuiz();
      return;
    }

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  // Finish Quiz
  const finishQuiz = () => {
    dispatch(setScore(score));

    const scores =
      JSON.parse(localStorage.getItem("scores")) || [];

    scores.push({
      username: user.name,
      score: score,
      quiz: quiz.title,
      quizId: quiz.id,
      date: new Date().toLocaleDateString(),
    });

    localStorage.setItem(
      "scores",
      JSON.stringify(scores)
    );

    // Lock Attempt
    attempts[
      `${user.name}_${quiz.id}`
    ] = true;

    localStorage.setItem(
      "attempts",
      JSON.stringify(attempts)
    );

    // Clear Quiz State
    localStorage.removeItem(
      `timer_${id}`
    );

    localStorage.removeItem(
      `currentQuestion_${id}`
    );

    localStorage.removeItem(
      `quizScore_${id}`
    );

    // Prevent Back
    navigate("/result", {
      replace: true,
    });
  };

  // Handle Answer
  const handleAnswer = (option) => {
    let updatedScore = score;

    if (
      option ===
      quiz.questions[current].answer
    ) {
      const updatedScore =
  option ===
  quiz.questions[current].answer
    ? score + 1
    : score;

setLocalScore(updatedScore);
    }

    // Move ONLY Forward
    if (
      current + 1 <
      quiz.questions.length
    ) {
      setCurrent(current + 1);
    } else {
      dispatch(setScore(updatedScore));

      const scores =
        JSON.parse(
          localStorage.getItem(
            "scores"
          )
        ) || [];

      scores.push({
        username: user.name,
        score: updatedScore,
        quiz: quiz.title,
        quizId: quiz.id,
        date: new Date().toLocaleDateString(),
      });

      localStorage.setItem(
        "scores",
        JSON.stringify(scores)
      );

      // Lock Attempt
      attempts[
        `${user.name}_${quiz.id}`
      ] = true;

      localStorage.setItem(
        "attempts",
        JSON.stringify(attempts)
      );

      // Clear Quiz State
      localStorage.removeItem(
        `timer_${id}`
      );

      localStorage.removeItem(
        `currentQuestion_${id}`
      );

      localStorage.removeItem(
        `quizScore_${id}`
      );

      navigate("/result", {
        replace: true,
      });
    }
  };

  // Format Timer
  const formatTime = (
    seconds
  ) => {
    const mins = Math.floor(
      seconds / 60
    );

    const secs = seconds % 60;

    return `${mins}:${
      secs < 10 ? "0" : ""
    }${secs}`;
  };

  // Quiz Not Found
  if (!quiz) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white text-4xl font-bold">
        Quiz Not Found
      </div>
    );
  }

  // Progress
  const progress =
    ((current + 1) /
      quiz.questions.length) *
    100;

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#312e81] p-6">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 mb-8">

          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

            <div>

              <h1 className="text-5xl font-extrabold text-cyan-300 mb-3">
                {quiz.title}
              </h1>

              <p className="text-gray-300 text-lg">
                Question {current + 1} of{" "}
                {quiz.questions.length}
              </p>

            </div>

            {/* Timer */}
            <div>

              <div
                className={`px-8 py-5 rounded-3xl text-4xl font-bold shadow-2xl ${
                  time < 60
                    ? "bg-red-500 animate-pulse text-white"
                    : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                }`}
              >
                ⏳ {formatTime(time)}
              </div>

              <p className="text-red-300 mt-3 text-sm text-center">
                Quiz auto submits when
                timer ends
              </p>

            </div>

          </div>

          {/* Progress */}
          <div className="mt-8">

            <div className="flex justify-between text-gray-300 mb-3">

              <span>Quiz Progress</span>

              <span>
                {Math.round(progress)}%
              </span>

            </div>

            <div className="w-full h-5 bg-white/10 rounded-full overflow-hidden">

              <div
                className="h-5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 transition-all duration-500"
                style={{
                  width: `${progress}%`,
                }}
              ></div>

            </div>

          </div>

        </div>

        {/* Question Navigator */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-6 mb-8">

          <h2 className="text-cyan-300 text-2xl font-bold mb-6">
            Question Navigator
          </h2>

          <div className="flex flex-wrap gap-4">

            {quiz.questions.map(
              (_, index) => (
                <div
                  key={index}
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold ${
                    index < current
                      ? "bg-green-500 text-white"
                      : index ===
                        current
                      ? "bg-cyan-500 text-white"
                      : "bg-white/10 text-gray-300"
                  }`}
                >
                  {index + 1}
                </div>
              )
            )}

          </div>

        </div>

        {/* Question Card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 transition-all duration-500">

          {/* Badge */}
          <div className="inline-block bg-cyan-500/20 border border-cyan-400 text-cyan-300 px-5 py-2 rounded-2xl font-bold mb-6">
            QUESTION {current + 1}
          </div>

          {/* Question */}
          <h2 className="text-4xl font-bold text-white leading-relaxed mb-12">
            {quiz.questions[current]
              .question}
          </h2>

          {/* Options */}
          <div className="grid grid-cols-1 gap-6">

            {quiz.questions[
              current
            ].options.map(
              (option, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswer(
                      option
                    )
                  }
                  className="bg-gradient-to-r from-blue-600/80 to-indigo-700/80 hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 hover:scale-[1.02] text-white p-6 rounded-3xl text-left shadow-xl"
                >

                  <div className="flex items-center">

                    <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mr-5 text-2xl font-bold">
                      {String.fromCharCode(
                        65 + index
                      )}
                    </div>

                    <div className="text-xl font-semibold">
                      {option}
                    </div>

                  </div>

                </button>
              )
            )}

          </div>

          {/* Locked Message */}
          <div className="mt-8 bg-red-500/10 border border-red-400 text-red-300 p-5 rounded-2xl text-lg">
            🔒 Once answered, you
            cannot return to previous
            questions
          </div>

        </div>

      </div>

    </div>
  );
};

export default Quiz;