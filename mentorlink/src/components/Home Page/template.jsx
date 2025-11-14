import React from 'react';
import { Link } from 'react-router-dom';

const Template = ({ children, activePage }) => {
    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
        { id: 'inbox', label: 'Mailbox', icon: 'mail_outline', path: '/inbox' },
        { id: 'roadmap', label: 'AI Roadmaps', icon: 'timeline', path: '/roadmap' },
        { id: 'mentor', label: 'Find Mentors', icon: 'search', path: '/mentor' },
        { id: 'resources', label: 'Resources', icon: 'school', path: '/resources' },
        { id: 'settings', label: 'Settings', icon: 'settings', path: '/settings' }
    ];

    return (
        <div className="flex h-screen">
            <aside className="w-64 bg-black border-r border-gray-800 flex flex-col">
                <div className="p-6">
                    <h1 className="text-2xl font-bold text-white">MentorLink</h1>
                </div>
                <nav className="flex-grow px-4 py-2 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            className={`flex items-center px-4 py-2 rounded-lg transition-colors no-underline ${
                                activePage === item.id
                                    ? 'text-white bg-brand-primary'
                                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                            }`}
                        >
                            <span className="material-icons-outlined">{item.icon}</span>
                            <span className="ml-3">{item.label}</span>
                        </Link>
                    ))}
                </nav>
            </aside>
            <main className="flex-1 flex flex-col">
                <header className="flex items-center justify-between p-6 bg-white border-b border-gray-200">
                    <div className="relative w-96">
                        <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                        <input className="pl-10 pr-4 py-2 w-full bg-gray-100 rounded-lg focus:outline-none focus:ring-2 ring-brand-primary" placeholder="Search" type="text" />
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-500">
                            <span className="material-icons-outlined">notifications</span>
                        </button>
                        <Link to="/profile">
                            <img alt="User avatar" className="w-10 h-10 rounded-full cursor-pointer hover:opacity-80 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtUIf_WxJ2vu4hwmSgDOlBJITk_0TJGYqYH9aBtTP-vXC55UTvhinsg2wx8L-wshINBJQqkxAV_0C1setzSBg2gumYsty1q9ktuFGD-OFVjlkqpDsjc3DYVI5hTRaRydZwsM4PkTpjXdkVvDG3SwaROQ7UPALknUHvwyZLR7jtVgJ8lGXkFqpE6cug0biMFW8Z7GvWCWLwGZAgcF6bss2kEK2OrjnlWMpxZ5VS8kOL6lCfpnFENIhySlmuvlktA4Z-xMoXuZdggPof"/>
                        </Link>
                    </div>
                </header>
                <div className="flex-1 p-8 overflow-y-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}

export default Template;