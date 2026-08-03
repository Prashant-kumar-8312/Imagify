

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext.jsx";
import { ArrowLeft } from "lucide-react";


const API_BASE = import.meta.env?.VITE_API_BASE || "http://localhost:3000";

// Prompts that "type themselves" in the preview panel — swap for real ones if you have them.
const SAMPLE_PROMPTS = [
  "a lighthouse in a bottle, storm outside",
  "paper-cut mountains at sunrise",
  "a cat made of stained glass",
  "neon koi swimming through fog",
];

const useTypewriter = (words, { typingMs = 45, deletingMs = 25, pauseMs = 1400 } = {}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];

    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(t);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(() => {
      setSubIndex((s) => s + (deleting ? -1 : 1));
    }, deleting ? deletingMs : typingMs);

    return () => clearTimeout(t);
  }, [subIndex, deleting, index, words, typingMs, deletingMs, pauseMs]);

  return words[index].slice(0, subIndex);
};

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const promptText = useTypewriter(SAMPLE_PROMPTS);
   
  const {setUser} = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
    agreed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    if (!form.email.trim() || !form.password) {
      return setError("Please fill in all fields.");
    }

    if (form.password.length < 8) {
      return setError("Password must be at least 8 characters.");
    }

    setIsSubmitting(true);

    try {
      const res = await axios.post(`${API_BASE}/api/auth/login`, {
        email: form.email.trim().toLowerCase(),
        password: form.password,
      });

      console.log("Login Response:", res.data);

      login(res.data.user, res.data.token);


    


      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.response?.data?.error ||
        "Login failed"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#FBF9F6]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');

        @keyframes scan {
          0%, 100% { transform: translateY(-140%); opacity: 0; }
          15% { opacity: 1; }
          50% { transform: translateY(140%); opacity: 1; }
          65% { opacity: 0; }
        }
        @keyframes drift {
          0% { transform: translate3d(0,0,0) rotate(0deg); }
          50% { transform: translate3d(2%, -3%, 0) rotate(4deg); }
          100% { transform: translate3d(0,0,0) rotate(0deg); }
        }
        @keyframes blink {
          0%, 45% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-mono-ui { font-family: 'IBM Plex Mono', monospace; }
        .cursor-blink { animation: blink 1.1s step-end infinite; }
        .scan-line { animation: scan 5.5s ease-in-out infinite; }
        .drift-slow { animation: drift 12s ease-in-out infinite; }
      `}</style>

      {/* LEFT — the form */}
      <div className="flex items-center justify-center px-6 py-12 sm:px-10">
        <div className="w-full max-w-sm">
           
         

          <div className="mb-10">

                 <Link
  to="/"
  className="mb-6 inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
>
        <ArrowLeft size={18} />
        Back
      </Link>

            <h1 className="font-display text-2xl font-bold tracking-tight text-[#14121F]">
              Imagify<span className="text-[#FF7A59]">.</span>
            </h1>
            <p className="mt-2 text-[15px] text-[#6B6880]">
              Welcome back. Sign in to keep creating.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleLogin} noValidate>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#3A3750]">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-[#E4E1DA] bg-white px-4 py-2.5 text-[#14121F] placeholder:text-[#B3AFC4] outline-none transition focus:border-[#6C5CE0] focus:ring-2 focus:ring-[#6C5CE0]/20"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-[#3A3750]">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full rounded-lg border border-[#E4E1DA] bg-white px-4 py-2.5 text-[#14121F] placeholder:text-[#B3AFC4] outline-none transition focus:border-[#6C5CE0] focus:ring-2 focus:ring-[#6C5CE0]/20"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-[#6B6880]">
                <input
                  type="checkbox"
                  name="agreed"
                  checked={form.agreed}
                  onChange={handleChange}
                  className="h-4 w-4 rounded border-[#D5D1C8] text-[#6C5CE0] focus:ring-[#6C5CE0]/30"
                />
                Remember me
              </label>

              <Link to="/forgot-password" className="font-medium text-[#6C5CE0] hover:underline">
                Forgot password?
              </Link>
            </div>

            {error && (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600" role="alert">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-lg bg-gradient-to-r from-[#6C5CE0] to-[#8B5CF6] py-3 font-medium text-white shadow-sm transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Logging in…" : "Log in"}
            </button>
          </form>

          

          <p className="mt-8 text-center text-sm text-[#6B6880]">
            Don't have an account?{" "}
            <Link to="/signup" className="font-semibold text-[#6C5CE0] hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT — the generative preview panel (matches Signup) */}
      <div className="relative hidden overflow-hidden bg-[#14121F] px-12 py-14 lg:flex lg:flex-col lg:justify-between">
        <span className="font-mono-ui text-xs uppercase tracking-[0.2em] text-white/40">
          Generative preview
        </span>

        <div className="mx-auto w-full max-w-sm">
          <div className="drift-slow relative aspect-square w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="imagify-mesh-login" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#3DDC97" />
                  <stop offset="50%" stopColor="#6C5CE0" />
                  <stop offset="100%" stopColor="#FF7A59" />
                </linearGradient>
                <filter id="imagify-grain-login">
                  <feTurbulence type="fractalNoise" baseFrequency="0.012 0.018" numOctaves="3" seed="21" result="noise">
                    <animate
                      attributeName="baseFrequency"
                      dur="20s"
                      values="0.012 0.018;0.022 0.03;0.012 0.018"
                      repeatCount="indefinite"
                    />
                  </feTurbulence>
                  <feColorMatrix in="noise" type="hueRotate">
                    <animate attributeName="values" dur="16s" values="0;360" repeatCount="indefinite" />
                  </feColorMatrix>
                </filter>
              </defs>
              <rect width="400" height="400" fill="url(#imagify-mesh-login)" />
              <rect width="400" height="400" filter="url(#imagify-grain-login)" opacity="0.5" />
            </svg>

            <div className="scan-line absolute inset-x-0 h-1/3 bg-gradient-to-b from-white/0 via-white/25 to-white/0" />

            {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map((pos) => (
              <div key={pos} className={`absolute h-4 w-4 ${pos}`} style={{
                borderTopWidth: pos.includes("top") ? 2 : 0,
                borderBottomWidth: pos.includes("bottom") ? 2 : 0,
                borderLeftWidth: pos.includes("left") ? 2 : 0,
                borderRightWidth: pos.includes("right") ? 2 : 0,
                borderColor: "rgba(255,255,255,0.5)",
              }} />
            ))}
          </div>

          <div className="mt-5 flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 font-mono-ui text-sm text-white/80">
            <span className="text-[#3DDC97]">›</span>
            <span className="truncate">{promptText}</span>
            <span className="cursor-blink ml-0.5 h-4 w-[2px] bg-[#FF7A59]" />
          </div>
        </div>

        <p className="font-display max-w-sm text-lg font-medium leading-snug text-white/90">
          Pick up where you left off —{" "}
          <span className="text-white/50">your next image is a prompt away.</span>
        </p>
      </div>
    </section>
  );
};

export default Login;
