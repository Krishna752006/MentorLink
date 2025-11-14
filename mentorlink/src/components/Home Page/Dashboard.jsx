import React from 'react';
import Template from './template';

const Dashboard = () => {
    const content = (
        <>
                    <div className="welcome-header">
                        <h1 className="text-2xl font-bold text-gray-800 mb-6">Welcome back, Sarah</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="stat-card bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <p className="stat-title text-gray-600 text-sm">Mentors Connected</p>
                            <p className="stat-value text-3xl font-bold text-gray-800">12</p>
                        </div>
                        <div className="stat-card bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <p className="stat-title text-gray-600 text-sm">Sessions Scheduled</p>
                            <p className="stat-value text-3xl font-bold text-gray-800">25</p>
                        </div>
                        <div className="stat-card bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <p className="stat-title text-gray-600 text-sm">Mentorships Concluded</p>
                            <p className="stat-value text-3xl font-bold text-gray-800">3</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                        <div className="lg:col-span-2">
                            <div className="sessions-container bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming Sessions</h2>
                                <div className="session-item flex items-center justify-between py-4 border-b border-gray-200">
                                    <div className="flex items-center">
                                        <div className="mentor-avatar w-12 h-12 rounded-full bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBVECqGnVVZDhp9OuhWxsaRcHQdjSE609UTaUy7G4lZx-O_yzAerE4DUENyb9_tTfRZ5EmvsPm8I0BpQP0U0MjzVYJdKcWhg94sdHvinDo5EzJCCHeglIRmoeuOvIez7NIJbG_Dp0fefe0Y4-D1v558L9a_ZVlO9n8m30dFHXJ0IoWOR_dFjNhryXGVbyBrSKEpvMoSvaRRNhhRHpHIebUEfTZDaVbWVEnjHjbm_muEhGbKzBfP5g1plmuBodeBNL2ajvM_-bR1Ao')" }}></div>
                                        <div className="session-details ml-4">
                                            <p className="mentor-name font-semibold text-gray-800">Ethan Carter</p>
                                            <p className="session-time text-gray-600 text-sm">July 15, 2024 · 2:00 PM</p>
                                        </div>
                                    </div>
                                    <button className="join-button bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-brand-secondary">Join</button>
                                </div>
                            </div>
                            <div className="recommendations-container bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-8">
                                <h2 className="text-xl font-bold text-gray-800 mb-4">Mentor Recommendations</h2>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="recommendation-card text-center">
                                        <div className="mentor-avatar w-24 h-24 rounded-full mx-auto bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPvK_ugWcAJUc2eh0ZiZcKeY2z1WKIDaQkEgqYZoFY8wsgOrlYn1bxM7yRdpExfFRTjwdfvOgYKr9hg6uJkdE9haVQ_o6WjFP_u2uQ0ni4XbrCUxo_Utk9IUqd6bKCnAxdKJIBmZvSt9_q5XM81BKvdIQhSbQGeCT_ZFJnvbFfpbhkBXzUpZhW-zg2uhb8_mXYmtBI4wFsAJJM9A3RJCdkuCx4vF6IMGmq97FhGRQwBP3hK2AZc5j7z4waTFB5FhpAzvwpARLqZEA')" }}></div>
                                        <p className="mentor-name mt-4 font-semibold text-gray-800">Liam Harper</p>
                                        <p className="mentor-specialty text-gray-600 text-sm">Software Engineering</p>
                                        <button className="connect-button mt-4 bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-brand-secondary">Connect</button>
                                    </div>
                                    <div className="recommendation-card text-center">
                                        <div className="mentor-avatar w-24 h-24 rounded-full mx-auto bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBABKXiZAJIEcQe_1JtOBEXzZ0tCmyP66DYPxAxGsSiS6a-N_2C1pnwWcOM6bD4lHN3TshLefRH4TJ-do_e1MybhEPxXBBvlRlWJ5f8ulKisoMlqvvQvhwSIp1T07EIHUpgcYTvtGa2w75XberZ9kbfBO93QE66eZz9ZN1WrGg2O_lIzMah0BXsCTTXHBAAKden3og3Os9ybTxpJMagPxSkOQbf6b4_j-MrisIXnuRiIC9Ebag1SIyF2gO-OgG2rQMBdmQdXN1os5I')" }}></div>
                                        <p className="mentor-name mt-4 font-semibold text-gray-800">Olivia Bennett</p>
                                        <p className="mentor-specialty text-gray-600 text-sm">Product Management</p>
                                        <button className="connect-button mt-4 bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-brand-secondary">Connect</button>
                                    </div>
                                    <div className="recommendation-card text-center">
                                        <div className="mentor-avatar w-24 h-24 rounded-full mx-auto bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpTbp_7Adi2-7SYM03SsX31Osylnxocb2O8Y7ykI81-weKzSfY9OHHR67oPI6QH34w9n-NRz56izy5nhABIa5yM-rjrViSKRSpnkEEPPOJJdM4jHFm8QkD59v1O5T3Y2VrJ_YrGZOz6jLa0dNByGbuwLQuuCPMABDBcwv2wb7lMu8HqUCTRStCfABea5lg4dCHcv44dqYp0qXj4c6_VobqetQxNBfNzaRzitLIR12JDetn3Dm6vyI4jm_xBm0rTFjvToYh_1b76FM')" }}></div>
                                        <p className="mentor-name mt-4 font-semibold text-gray-800">Noah Foster</p>
                                        <p className="mentor-specialty text-gray-600 text-sm">Data Science</p>
                                        <button className="connect-button mt-4 bg-brand-primary text-white px-4 py-2 rounded-lg hover:bg-brand-secondary">Connect</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="activity-container bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
                            <div className="activity-item flex items-center py-4 border-b border-gray-200">
                                <div className="activity-avatar w-12 h-12 rounded-full bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDM7nDP0slDbGku2S-SRPvFWzzclAk4lNWEEpSvaT0DLvpBOGJa1WXlUQ4Rj4Gz6wZhteb0M5ION0I90jAZcEQK9nz-PLnjsSNpYwOXOMlZnaLcvhXwgP_0y1kq3aW60sh5z-VvcqTPY16btLnmKWLphG2o6Tr7nj3kr1gUze-XC-L8t73aLFLrW-tXrlOwx1Vhx2wy1cg7WO6IKEvBTHW3A0xq6VdJsF7SprXT6cbTJf-p1rRi9yCkwmrkpqm_y8eTcVN33vI8Zrs')" }}></div>
                                <div className="ml-4">
                                    <p className="activity-description text-gray-800">Session with Liam Harper completed</p>
                                    <p className="activity-time text-gray-600 text-sm">July 10, 2024</p>
                                </div>
                            </div>
                            <div className="activity-item flex items-center py-4">
                                <div className="activity-avatar w-12 h-12 rounded-full bg-cover" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlpwB6eInvxaj8DXylYjLTEajnzqs42j3qooDaU2bkTnulLHIZECnzc1EpGOVMGUc6eQiH1w5uzRCQvbgY4cb561EeeIqD2EY3DJoqAdDr7oqeoZnuxMiUxatwmxTU5xZ7qEZ46jr6J1DSkPNNAf5FuB0TcIweW98hD5XWoieNhrs_Afm-nGiHyC7b88xl63iYjn79ML3u2z4FarfYm3na3siuhGXO-Rsh758Bl3TpirPw-yrGmYIXHQXbA8aTSDs_TQyKmP1T9ek')" }}></div>
                                <div className="ml-4">
                                    <div>
                                        <p className="activity-description text-gray-800">New message from Olivia Bennett</p>
                                        <p className="activity-time text-gray-600 text-sm">July 8, 2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    );

    return <Template activePage="dashboard">{content}</Template>;
}

export default Dashboard;
