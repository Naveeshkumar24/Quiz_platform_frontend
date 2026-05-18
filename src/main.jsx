import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
const defaultQuiz = [
  {
    id: 1,
    title: "JavaScript Basics",
    createdAt:
      new Date().toLocaleDateString(),

    questions: [
      {
        question:
          "Which keyword is used to declare a variable in JavaScript?",
        options: [
          "define",
          "var",
          "create",
          "int",
        ],
        answer: "var",
      },

      {
        question:
          "Which company developed React?",
        options: [
          "Google",
          "Facebook",
          "Amazon",
          "Microsoft",
        ],
        answer: "Facebook",
      },

      {
        question:
          "Which method prints output in console?",
        options: [
          "print()",
          "echo()",
          "console.log()",
          "write()",
        ],
        answer:
          "console.log()",
      },

      {
        question:
          "What does CSS stand for?",
        options: [
          "Creative Style Sheets",
          "Computer Style Sheets",
          "Cascading Style Sheets",
          "Colorful Style Sheets",
        ],
        answer:
          "Cascading Style Sheets",
      },

      {
        question:
          "Which hook is used for state in React?",
        options: [
          "useData",
          "useState",
          "useFetch",
          "useRoute",
        ],
        answer: "useState",
      },

      {
        question:
          "Which symbol is used for comments in JavaScript?",
        options: [
          "//",
          "##",
          "**",
          "<!-- -->",
        ],
        answer: "//",
      },

      {
        question:
          "Which HTML tag creates a hyperlink?",
        options: [
          "a",
          "link",
          "href",
          "hyper",
        ],
        answer: "a",
      },

      {
        question:
          "Which array method adds element at end?",
        options: [
          "push()",
          "pop()",
          "shift()",
          "slice()",
        ],
        answer: "push()",
      },

      {
        question:
          "Which hook handles side effects in React?",
        options: [
          "useEffect",
          "useMemo",
          "useData",
          "useRef",
        ],
        answer:
          "useEffect",
      },

      {
        question:
          "Which database is used in MERN stack?",
        options: [
          "Oracle",
          "MongoDB",
          "SQLite",
          "MySQL",
        ],
        answer: "MongoDB",
      },
    ],
  },
];

// Add only once
if (
  !localStorage.getItem("quizzes")
) {
  localStorage.setItem(
    "quizzes",
    JSON.stringify(defaultQuiz)
  );
}