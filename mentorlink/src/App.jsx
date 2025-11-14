import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './components/Home Page/Dashboard';
import Inbox from './components/Home Page/inbox';
import Mentor from './components/Home Page/mentor';
import Resources from './components/Home Page/resources';
import Roadmap from './components/Home Page/roadmap';
import Profile from './components/Home Page/profile';
import Settings from './components/Home Page/settings';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import ProtectedRoute from "./routes/ProtectedRoute";
import "./index.css";
import "./styles/tailwind.css"

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root path "/" to "/signin" */}
        <Route path="/" element={<Navigate to="/signin" replace />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/mentorship" element={<Dashboard />} />
                <Route path="/inbox" element={<Inbox />} />
                <Route path="/mentor" element={<Mentor />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<Navigate to="/" />} />

        {/* Protected Dashboard Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Catch all - redirect unknown routes to signin */}
        <Route path="*" element={<Navigate to="/signin" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
