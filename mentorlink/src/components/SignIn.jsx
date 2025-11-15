import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../index.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/api/auth/signin", formData);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Invalid credentials");
    }
  };

  const handleGoogleSignIn = () => {
    // Redirect to backend Google OAuth endpoint
    window.location.href = "http://localhost:5001/api/auth/google";
  };

  const handleGithubSignIn = () => {
    window.location.href = "http://localhost:5001/api/auth/github";
  };

  return (
    <div className="auth-container modern-bg">
      <div className="auth-card">
        <h2 className="auth-title">Sign In</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="auth-input"
              placeholder=" "
            />
            <label className="floating-label">Email</label>
          </div>

          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="auth-input"
              placeholder=" "
            />
            <label className="floating-label">Password</label>
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="auth-button">
            Sign In
          </button>
        </form>

        <p className="auth-footer">
          Don’t have an account?{" "}
          <span className="auth-link" onClick={() => navigate("/signup")}>
            Sign Up
          </span>
        </p>

        <div className="divider"><span>Or continue with</span></div>

        <div className="social-buttons">
          <button 
            className="social-btn google"
            onClick={handleGoogleSignIn}
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M21.35 11.1h-9.18v2.92h5.27c-.23 1.32-1.44 3.87-5.27 3.87-3.17 0-5.77-2.6-5.77-5.77s2.6-5.77 5.77-5.77c1.44 0 2.4.61 2.95 1.14l2.02-2.02C18.19 3.5 16.35 2.5 13.9 2.5 7.85 2.5 3 7.35 3 13.4s4.85 10.9 10.9 10.9c6.3 0 10.9-4.55 10.9-10.9 0-.73-.07-1.28-.45-2.2z"
              />
            </svg>
          </button>

          <button 
            className="social-btn github"
            onClick={handleGithubSignIn}
          >
            <svg viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
          </button>

          <button className="social-btn linkedin">
            <svg viewBox="0 0 24 24">
              <path
                fill="#fff"
                d="M4.98 3.5C3.33 3.5 2 4.83 2 6.48s1.33 2.98 2.98 2.98 2.98-1.33 2.98-2.98S6.63 3.5 4.98 3.5zM2.5 21.5h5v-11h-5v11zm7.5-11h4.79v1.54h.07c.67-1.26 2.3-2.59 4.73-2.59 5.06 0 6 3.33 6 7.66v8.39h-5v-7.43c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92v7.56h-5v-11z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;