# 🧠 Quiz Platform

A premium frontend-only Quiz Platform built using **ReactJS**, **Redux Toolkit**, and **Tailwind CSS**.

This application simulates a real-world online examination system with:

* Admin dashboard
* Dynamic quiz creation
* Timer-based quizzes
* Leaderboards
* PDF certificate generation
* Attempt restrictions
* Protected routes
* Responsive UI/UX

---

# 🚀 Live Demo

## Frontend Deployment

```txt
https://your-vercel-link.vercel.app
```

---

# 📌 Features

# 👨‍💼 Admin Features

* Admin login access
* Create quizzes dynamically
* Add unlimited questions
* Minimum 10-question validation
* Delete quizzes
* Reset user attempts
* Dashboard statistics
* Dynamic quiz management

---

# 👨‍🎓 User Features

* User authentication
* Attend quizzes
* Real-time timer
* Auto-submit on timer end
* One-time attempt restriction
* Responsive UI
* Progress tracking
* Question navigator
* PDF certificate generation
* Quiz-wise leaderboard

---

# 🏆 Leaderboard Features

* Separate leaderboard for each quiz
* Rank-based sorting
* Top performers display
* Username tracking
* Score tracking
* Quiz-wise filtering

---

# 🔒 Security & Restrictions

* Protected routes
* Prevent reattempts
* Disable browser back navigation during quiz
* Auto-lock attempted quizzes
* Timer persistence after refresh
* Auto-submit functionality

---

# 🎨 UI/UX Features

* Glassmorphism UI
* Neon gradient theme
* Fully responsive design
* Premium dashboard design
* Animated transitions
* Interactive cards
* Modern SaaS-style layout

---

# 🛠️ Tech Stack

| Technology       | Purpose            |
| ---------------- | ------------------ |
| ReactJS          | Frontend framework |
| Redux Toolkit    | State management   |
| React Router DOM | Routing            |
| Tailwind CSS     | Styling            |
| jsPDF            | PDF generation     |
| LocalStorage     | Data persistence   |
| Vite             | Build tool         |
| Vercel           | Deployment         |

---

# 📂 Folder Structure

```txt
src/
│
├── components/
│   └── Navbar.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Quiz.jsx
│   ├── Result.jsx
│   ├── Leaderboard.jsx
│   ├── Admin.jsx
│   └── NotFound.jsx
│
├── redux/
│   ├── store.js
│   ├── authSlice.js
│   └── quizSlice.js
│
├── routes/
│   └── ProtectedRoute.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# ⚙️ Installation & Setup

# 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/quiz-platform.git
```

---

# 2️⃣ Navigate Into Project

```bash
cd quiz-platform
```

---

# 3️⃣ Install Dependencies

```bash
npm install
```

---

# 4️⃣ Start Development Server

```bash
npm run dev
```

---

# 5️⃣ Open Browser

```txt
http://localhost:5173
```

---

# 📦 Build for Production

```bash
npm run build
```

---

# 🌐 Deployment

This project is deployed using:

* Vercel

---

# 🔑 Demo Credentials

# Admin Login

```txt
Username: admin
```

---

# User Login

```txt
Enter any username
```

---

# 📖 Project Workflow

# 🔹 Authentication

* User enters username
* Admin access if username = admin
* Redux stores user session
* LocalStorage persists login

---

# 🔹 Quiz Creation

* Admin creates quiz
* Adds questions dynamically
* Quiz stored in LocalStorage
* Home page updates automatically

---

# 🔹 Quiz Attempt

* User starts quiz
* Timer begins
* Questions displayed dynamically
* Score updates in real-time
* Auto-submit when completed

---

# 🔹 Result & Certificate

* Score displayed instantly
* PDF certificate generated
* User added to leaderboard

---

# 🔹 Attempt Restriction

* Attempt status stored
* Users cannot reattempt same quiz
* Admin can reset attempts

---

# 🧠 State Management

Redux Toolkit is used for:

* Authentication state
* Quiz score state

---

# 🗂️ LocalStorage Data

| Key          | Purpose                     |
| ------------ | --------------------------- |
| user         | Stores logged-in user       |
| quizzes      | Stores all quizzes          |
| scores       | Stores leaderboard scores   |
| attempts     | Stores attempt restrictions |
| timer_quizId | Stores timer progress       |

---

# 🔥 Major Features Explained

# ⏳ Timer System

* Timer persists after refresh
* Auto-submit when timer ends
* Countdown displayed dynamically

---

# 🛡️ Protected Routes

* Only admin can access admin dashboard
* Unauthenticated users redirected to login

---

# 📜 PDF Certificate

Generated using:

```txt
jsPDF
```

Certificate contains:

* Username
* Quiz title
* Score
* Date

---

# 🏅 Leaderboard Logic

Leaderboard:

* Sorts scores descending
* Separates rankings quiz-wise
* Displays top performers

---

# 📱 Responsive Design

The application supports:

* Mobile devices
* Tablets
* Laptops
* Desktop screens

Built using:

```txt
Tailwind CSS
```

---

# 🚫 Reattempt Prevention

Once a user attempts a quiz:

* Quiz becomes locked
* User cannot reattempt
* Admin reset required

---

# 🧪 Challenges Faced

| Challenge                     | Solution                               |
| ----------------------------- | -------------------------------------- |
| Timer reset on refresh        | Stored timer in LocalStorage           |
| Dynamic quiz loading          | Replaced static data with LocalStorage |
| Reattempt prevention          | Implemented attempt locking            |
| Route refresh issue on Vercel | Added vercel.json rewrites             |
| Back navigation during quiz   | Used popstate prevention               |

---

# 📌 Future Enhancements

* Backend integration
* MongoDB database
* JWT authentication
* AI-generated quizzes
* Multiplayer quiz battles
* Analytics dashboard
* Email certificate delivery
* Real-time leaderboard

---

# 📷 Screenshots

## Login Page

(Add screenshot here)

---

## Home Page

(Add screenshot here)

---

## Admin Dashboard

(Add screenshot here)

---

## Quiz Page

(Add screenshot here)

---

## Leaderboard

(Add screenshot here)

---

# 🎥 Demo Video

```txt
Add YouTube/Loom video link here
```

---

# 📄 License

This project is created for educational and capstone project purposes.

---

# 👨‍💻 Author

## Naveesh Kumar

* GitHub: [https://github.com/Naveeshkumar24](https://github.com/Naveeshkumar24)

---

# ⭐ Conclusion

This Quiz Platform project demonstrates:

* Frontend architecture
* State management
* Responsive UI/UX
* Real-world examination workflow
* Authentication
* Dynamic quiz systems
* Modern React development
* Deployment workflow

The project successfully simulates a real online examination portal with premium industry-level UI and features.
