import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import Inbox from './inbox';
import Mentor from './mentor';
import Resources from './resources';
import Roadmap from './roadmap';
import Profile from './profile';
import Settings from './settings';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/mentorship" element={<Dashboard />} />
                <Route path="/inbox" element={<Inbox />} />
                <Route path="/mentor" element={<Mentor />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default App;