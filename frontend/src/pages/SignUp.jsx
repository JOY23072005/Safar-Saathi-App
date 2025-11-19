import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus, Mail, Lock, Mountain, Loader2 } from "lucide-react";

const Signup = () => {
  const { signup, googleLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signup(email, password);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  const handleGoogle = async () => {
    try {
      setLoading(true);
      await googleLogin();
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-6">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl p-10 rounded-2xl w-full max-w-md text-white">
        
        {/* Logo */}
        <div className="flex flex-col items-center mb-8">
          <Mountain size={42} className="text-indigo-400" />
          <h1 className="text-3xl font-bold mt-3">Create Account</h1>
          <p className="text-slate-300 text-sm mt-1">Sign up to access NATPAC system</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSignup} className="space-y-5">
          <div className="relative">
            <Mail size={18} className="absolute top-3 left-3 text-slate-400" />
            <input
              type="email"
              className="w-full bg-white/5 border border-white/20 rounded-lg px-10 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative">
            <Lock size={18} className="absolute top-3 left-3 text-slate-400" />
            <input
              type="password"
              className="w-full bg-white/5 border border-white/20 rounded-lg px-10 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 transition-colors px-4 py-3 rounded-lg shadow-lg shadow-indigo-500/30 font-medium"
          >
            {loading ? <Loader2 className="animate-spin" /> : <UserPlus size={18} />}
            Create Account
          </button>
        </form>

        {/* Google login */}
        <button
          onClick={handleGoogle}
          className="w-full mt-4 flex items-center justify-center gap-2 bg-white text-slate-800 hover:bg-slate-100 transition-colors px-4 py-3 rounded-lg shadow-md font-medium"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" />
          Sign Up with Google
        </button>

        {/* Bottom links */}
        <p className="text-center text-slate-300 text-sm mt-6">
          Already have an account? <Link className="text-indigo-400 hover:underline" to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
