import { useEffect, useState } from "react";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([
    "",
    "",
    "",
    "",
  ]);
  const [answer, setAnswer] = useState("");

  const [questions, setQuestions] = useState([]);
  const [quizzes, setQuizzes] = useState([]);

  // Load quizzes
  useEffect(() => {
    const storedQuizzes =
      JSON.parse(localStorage.getItem("quizzes")) || [];

    setQuizzes(storedQuizzes);
  }, []);

  // Handle options
  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];

    updatedOptions[index] = value;

    setOptions(updatedOptions);
  };

  // Add Question
// Add Question
const handleAddQuestion = () => {

  // Remove extra spaces
  const trimmedOptions = options.map((opt) =>
    opt.trim()
  );

  const trimmedAnswer = answer.trim();

  if (
    !question.trim() ||
    trimmedOptions.some((opt) => opt === "") ||
    !trimmedAnswer
  ) {
    alert("Please fill all fields");
    return;
  }

  // Check if answer exists in options
  if (
    !trimmedOptions.includes(trimmedAnswer)
  ) {
    alert(
      "Correct answer must exactly match one of the options"
    );
    return;
  }

  const newQuestion = {
    question: question.trim(),
    options: trimmedOptions,
    answer: trimmedAnswer,
  };

  setQuestions([
    ...questions,
    newQuestion,
  ]);

  setQuestion("");
  setOptions(["", "", "", ""]);
  setAnswer("");

  // Auto Scroll
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
};

  // Save Quiz
  const handleSaveQuiz = () => {
    // Validation
    if (!title.trim()) {
      alert("Quiz title is required");
      return;
    }

    // Minimum 10 Questions
    if (questions.length < 10) {
      alert(
        "Minimum 10 questions are required to save a quiz"
      );

      return;
    }

    const newQuiz = {
      id: quizzes.length + 1,
      title,
      questions,
      createdAt:
        new Date().toLocaleDateString(),
    };

    const updatedQuizzes = [
      ...quizzes,
      newQuiz,
    ];

    setQuizzes(updatedQuizzes);

    localStorage.setItem(
      "quizzes",
      JSON.stringify(updatedQuizzes)
    );

    setTimeout(() => {
      alert(
        "🎉 Quiz Saved Successfully"
      );
    }, 300);

    // Reset
    setTitle("");
    setQuestions([]);
  };

  // Delete Quiz
  const handleDeleteQuiz = (id) => {
    const filtered = quizzes.filter(
      (quiz) => quiz.id !== id
    );

    setQuizzes(filtered);

    localStorage.setItem(
      "quizzes",
      JSON.stringify(filtered)
    );
  };

  // Reset Attempts
  const resetAttempts = () => {
    localStorage.removeItem("attempts");

    alert(
      "All quiz attempts have been reset"
    );
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#312e81] p-6">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">

          <h1 className="text-6xl font-extrabold text-cyan-300 mb-5">
            Admin Dashboard
          </h1>

          <p className="text-gray-300 text-xl">
            Create and manage quizzes professionally
          </p>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">

          {/* Total Quizzes */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 text-center">

            <h2 className="text-xl font-bold text-white">
              Total Quizzes
            </h2>

            <p className="text-6xl font-extrabold text-cyan-400 mt-5">
              {quizzes.length}
            </p>

          </div>

          {/* Questions Added */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 text-center">

            <h2 className="text-xl font-bold text-white">
              Questions Added
            </h2>

            <p className="text-6xl font-extrabold text-green-400 mt-5">
              {questions.length}
            </p>

          </div>

          {/* Minimum Required */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 text-center">

            <h2 className="text-xl font-bold text-white">
              Minimum Required
            </h2>

            <p className="text-6xl font-extrabold text-red-400 mt-5">
              10
            </p>

          </div>

        </div>

        {/* Question Progress Ring */}
        <div className="flex justify-center mb-14">

          <div className="relative w-44 h-44">

            <div className="absolute inset-0 rounded-full border-[12px] border-white/10"></div>

            <div className="absolute inset-0 rounded-full border-[12px] border-cyan-400 border-t-transparent rotate-45"></div>

            <div className="absolute inset-0 flex items-center justify-center">

              <div className="text-center">

                <h2 className="text-5xl font-bold text-white">
                  {questions.length}
                </h2>

                <p className="text-gray-300">
                  Questions
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Create Quiz */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 mb-14">

          <h2 className="text-4xl font-bold text-cyan-300 mb-10">
            Create New Quiz
          </h2>

          {/* Quiz Title */}
          <div className="mb-8">

            <label className="block text-lg font-semibold text-white mb-3">
              Quiz Title
            </label>

            <input
              type="text"
              placeholder="Enter Quiz Title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 p-5 rounded-2xl outline-none focus:border-cyan-400"
            />

          </div>

          {/* Question */}
          <div className="mb-8">

            <label className="block text-lg font-semibold text-white mb-3">
              Question
            </label>

            <textarea
              placeholder="Enter Question"
              value={question}
              onChange={(e) =>
                setQuestion(e.target.value)
              }
              rows="4"
              className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 p-5 rounded-2xl outline-none focus:border-cyan-400"
            />

          </div>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

            {options.map((option, index) => (
              <input
                key={index}
                type="text"
                placeholder={`Option ${
                  index + 1
                }`}
                value={option}
                onChange={(e) =>
                  handleOptionChange(
                    index,
                    e.target.value
                  )
                }
                className="bg-white/10 border border-white/20 text-white placeholder-gray-300 p-5 rounded-2xl outline-none focus:border-cyan-400"
              />
            ))}

          </div>

          {/* Correct Answer */}
{/* Select Correct Answer */}
{/* Options + Correct Answer Selection */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

  {options.map((option, index) => (
    <div
      key={index}
      className={`p-5 rounded-2xl border transition-all duration-300 ${
        answer === option
          ? "bg-green-500/20 border-green-400"
          : "bg-white/10 border-white/20"
      }`}
    >

      {/* Option Input */}
      <input
        type="text"
        placeholder={`Option ${index + 1}`}
        value={option}
        onChange={(e) => {
          handleOptionChange(
            index,
            e.target.value
          );

          // Reset answer if edited
          if (answer === option) {
            setAnswer("");
          }
        }}
        className="w-full bg-transparent text-white placeholder-gray-300 outline-none text-lg mb-4"
      />

      {/* Radio Select */}
      <label className="flex items-center gap-3 cursor-pointer">

        <input
          type="radio"
          name="correctAnswer"
          checked={answer === option}
          onChange={() => {

            if (!option.trim()) {
              alert(
                "Please enter option text first"
              );
              return;
            }

            const confirmSelect =
              window.confirm(
                `Set "${option}" as correct answer?`
              );

            if (confirmSelect) {
              setAnswer(option);
            }
          }}
          className="w-5 h-5 accent-green-500"
        />

        <span className="text-white font-semibold">
          Mark as Correct Answer
        </span>

      </label>

    </div>
  ))}

</div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6">

            <button
              onClick={handleAddQuestion}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 hover:shadow-cyan-500/40 hover:shadow-2xl transition-all duration-300 text-white px-10 py-5 rounded-2xl font-bold text-lg"
            >
              Add Question
            </button>

            <button
              onClick={handleSaveQuiz}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-105 hover:shadow-green-500/40 hover:shadow-2xl transition-all duration-300 text-white px-10 py-5 rounded-2xl font-bold text-lg"
            >
              Save Quiz
            </button>

          </div>

        </div>

        {/* Added Questions */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 mb-14">

          <h2 className="text-4xl font-bold text-cyan-300 mb-10">
            Added Questions (
            {questions.length})
          </h2>

          {questions.length === 0 ? (
            <div className="flex flex-col items-center py-16">

              <div className="text-8xl mb-6">
                📚
              </div>

              <p className="text-2xl text-gray-300">
                Start adding your quiz questions
              </p>

            </div>
          ) : (
            <div className="space-y-8">

              {questions.map((q, index) => (
                <div
                  key={index}
                  className="bg-white/10 border border-white/20 rounded-3xl p-8 shadow-xl"
                >

                  <h3 className="text-2xl font-bold text-white mb-6">
                    Q{index + 1}.{" "}
                    {q.question}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {q.options.map(
                      (opt, i) => (
                        <div
                          key={i}
                          className="bg-white/10 text-white p-5 rounded-2xl border border-white/10"
                        >
                          {opt}
                        </div>
                      )
                    )}

                  </div>

                  <div className="mt-6 inline-block bg-green-500/20 border border-green-400 text-green-300 px-6 py-3 rounded-2xl font-bold">
                    Correct Answer:{" "}
                    {q.answer}
                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

        {/* Existing Quizzes */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10">

          <h2 className="text-4xl font-bold text-cyan-300 mb-6">
            Existing Quizzes
          </h2>

          {/* Reset Attempts Button */}
          <button
            onClick={resetAttempts}
            className="mb-10 bg-gradient-to-r from-red-500 to-pink-600 hover:scale-105 transition-all duration-300 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl"
          >
            Reset All Attempts
          </button>

          {quizzes.length === 0 ? (
            <div className="text-center text-gray-300 text-2xl py-16">
              No Quizzes Available
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {quizzes.map((quiz) => (
                <div
                  key={quiz.id}
                  className="bg-gradient-to-br from-cyan-500 to-blue-700 rounded-3xl p-8 shadow-2xl text-white hover:scale-105 transition-all duration-300"
                >

                  <h3 className="text-3xl font-bold mb-5">
                    {quiz.title}
                  </h3>

                  <p className="text-lg mb-3">
                    Questions:{" "}
                    {
                      quiz.questions.length
                    }
                  </p>

                  <p className="opacity-80 mb-8">
                    Created:{" "}
                    {quiz.createdAt}
                  </p>

                  <button
                    onClick={() =>
                      handleDeleteQuiz(
                        quiz.id
                      )
                    }
                    className="bg-red-500 hover:bg-red-600 px-6 py-4 rounded-2xl font-bold w-full"
                  >
                    Delete Quiz
                  </button>

                </div>
              ))}

            </div>
          )}

        </div>

      </div>

    </div>
  );
};

export default Admin;