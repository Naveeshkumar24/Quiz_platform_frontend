import { Link } from "react-router-dom";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import { logout } from "../redux/authSlice";
import { useState } from "react";

const Navbar = () => {
  const { user } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const handleLogout = () => {
    dispatch(logout());

    // Clear quiz progress
    localStorage.removeItem(
      "currentQuestion"
    );

    localStorage.removeItem(
      "quizScore"
    );
  };

  return (
   <nav className="sticky top-0 z-50 bg-[#0b1120]/95 backdrop-blur-2xl border-b border-cyan-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">

      <div className="max-w-7xl mx-auto px-6 py-5">

        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Quiz Platform
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">

            <Link
              to="/"
              className="text-white hover:text-cyan-300 transition text-lg font-semibold"
            >
              Home
            </Link>

            <Link
              to="/leaderboard"
              className="text-white hover:text-cyan-300 transition text-lg font-semibold"
            >
              Leaderboard
            </Link>

            {/* Admin */}
            {user?.role ===
              "admin" && (
              <Link
                to="/admin"
                className="text-white hover:text-cyan-300 transition text-lg font-semibold"
              >
                Admin Dashboard
              </Link>
            )}

            {/* User Badge */}
            {user && (
              <div className="flex items-center gap-3 bg-white/10 border border-white/20 px-5 py-3 rounded-2xl">

                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                  {user.name
                    ?.charAt(0)
                    .toUpperCase()}
                </div>

                <div>

                  <h3 className="text-white font-bold">
                    {user.name}
                  </h3>

                  <p className="text-xs text-gray-300">
                    {user.role ===
                    "admin"
                      ? "Administrator"
                      : "User"}
                  </p>

                </div>

              </div>
            )}

            {/* Login / Logout */}
            {user ? (
              <button
                onClick={
                  handleLogout
                }
                className="bg-gradient-to-r from-red-500 to-pink-600 hover:scale-105 transition-all duration-300 text-white px-6 py-3 rounded-2xl font-bold shadow-xl"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300 text-white px-6 py-3 rounded-2xl font-bold shadow-xl"
              >
                Login
              </Link>
            )}

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="md:hidden text-white text-3xl"
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-6 space-y-5 pb-6 border-t border-white/10 pt-6">

            <Link
              to="/"
              className="block text-white text-lg font-semibold"
            >
              Home
            </Link>

            <Link
              to="/leaderboard"
              className="block text-white text-lg font-semibold"
            >
              Leaderboard
            </Link>

            {/* Admin */}
            {user?.role ===
              "admin" && (
              <Link
                to="/admin"
                className="block text-white text-lg font-semibold"
              >
                Admin Dashboard
              </Link>
            )}

            {/* User Info */}
            {user && (
              <div className="bg-white/10 border border-white/20 rounded-2xl p-4">

                <h3 className="text-white font-bold text-lg">
                  {user.name}
                </h3>

                <p className="text-gray-300">
                  {user.role ===
                  "admin"
                    ? "Administrator"
                    : "User"}
                </p>

              </div>
            )}

            {/* Login / Logout */}
            {user ? (
              <button
                onClick={
                  handleLogout
                }
                className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white py-4 rounded-2xl font-bold"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="block text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-2xl font-bold"
              >
                Login
              </Link>
            )}

          </div>
        )}

      </div>

    </nav>
  );
};

export default Navbar;