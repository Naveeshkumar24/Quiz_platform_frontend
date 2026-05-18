import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginType, setLoginType] =
    useState("user");

  const [name, setName] = useState("");
  const [password, setPassword] =
    useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // USER LOGIN
    if (loginType === "user") {
      const user = {
        name,
        role: "user",
      };

      dispatch(login(user));

      navigate("/");

      return;
    }

    // ADMIN LOGIN
    if (
      name === "admin" &&
      password === "admin@12"
    ) {
      const user = {
        name,
        role: "admin",
      };

      dispatch(login(user));

      navigate("/admin");
    } else {
      alert(
        "Invalid Admin Username or Password"
      );
    }
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#312e81] flex items-center justify-center p-6">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10">

        {/* Logo */}
        <div className="text-center mb-10">

          <div className="text-7xl mb-5">
            🧠
          </div>

          <h1 className="text-5xl font-extrabold text-cyan-300 mb-4">
            Quiz Platform
          </h1>

          <p className="text-gray-300 text-lg">
            Premium Quiz Experience
          </p>

        </div>

        {/* Login Type Buttons */}
        <div className="flex gap-4 mb-8">

          <button
            type="button"
            onClick={() =>
              setLoginType("user")
            }
            className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 ${
              loginType === "user"
                ? "bg-cyan-500 text-white"
                : "bg-white/10 text-gray-300 border border-white/20"
            }`}
          >
            User Login
          </button>

          <button
            type="button"
            onClick={() =>
              setLoginType("admin")
            }
            className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 ${
              loginType === "admin"
                ? "bg-red-500 text-white"
                : "bg-white/10 text-gray-300 border border-white/20"
            }`}
          >
            Admin Login
          </button>

        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>

          {/* Username */}
          <div className="mb-6">

            <label className="block text-white text-lg font-semibold mb-3">
              Username
            </label>

            <input
              type="text"
              placeholder="Enter username"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              required
              className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 p-5 rounded-2xl outline-none focus:border-cyan-400 text-lg"
            />

          </div>

          {/* Password Only For Admin */}
          {loginType === "admin" && (
            <div className="mb-8">

              <label className="block text-white text-lg font-semibold mb-3">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                required
                className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-300 p-5 rounded-2xl outline-none focus:border-red-400 text-lg"
              />

            </div>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className={`w-full transition-all duration-300 text-white py-5 rounded-2xl font-bold text-xl shadow-2xl ${
              loginType === "admin"
                ? "bg-gradient-to-r from-red-500 to-pink-600 hover:scale-105"
                : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105"
            }`}
          >
            {loginType === "admin"
              ? "Admin Login 🔐"
              : "User Login 🚀"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;