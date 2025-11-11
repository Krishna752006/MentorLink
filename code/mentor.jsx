import React from 'react';
import Template from './template';

const Mentor = () => {
    const content = (
        <>
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Find Mentors</h2>
                    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="relative">
                                <span className="material-icons-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">search</span>
                                <input className="bg-gray-100 rounded-lg py-3 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Search by name..." type="text" />
                            </div>
                            <div>
                                <select className="w-full bg-gray-100 rounded-lg py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                                    <option>Filter by Skill</option>
                                    <option>Software Engineering</option>
                                    <option>Product Management</option>
                                    <option>Data Science</option>
                                    <option>UX Design</option>
                                </select>
                            </div>
                            <div>
                                <select className="w-full bg-gray-100 rounded-lg py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                                    <option>Filter by Industry</option>
                                    <option>Tech</option>
                                    <option>Finance</option>
                                    <option>Healthcare</option>
                                    <option>Education</option>
                                </select>
                            </div>
                            <div>
                                <select className="w-full bg-gray-100 rounded-lg py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                                    <option>Filter by Availability</option>
                                    <option>Available this week</option>
                                    <option>Available next week</option>
                                    <option>Weekends only</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end items-center mb-6">
                        <label className="text-gray-600 mr-2" htmlFor="sort">Sort by:</label>
                        <select className="bg-white border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500" id="sort">
                            <option>Relevance</option>
                            <option>Rating</option>
                            <option>Experience</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                            <img alt="Liam Harper's profile picture" className="w-24 h-24 rounded-full mb-4 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrxLb93rKVeuSPj5iw41xYiJCgXuPvrz2cz90WxN2XYHNqgleIR_vhcr6BKnvq0STv0_Co7JUVYQcggmxlaDQlsaPSkULspCGe_OIe2Txd-gMEKIQorA3iIpiJku4i88tjpv9vjeXFQ1n9V8L4HXcP0pWboNlZWtYl5vReZ2aLFY4OBQ0k_Ij-WGXiDSZpDI89afxzf7msDNxD3r4s36jLwQLRjWnWAX5op290jSpWuruBoJCSv7qtnKw_5eSnok-FXcjn5RN0vOTe" />
                            <h3 className="text-lg font-semibold text-gray-800">Liam Harper</h3>
                            <p className="text-gray-500 mb-3">Software Engineering</p>
                            <div className="inline-flex items-center bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                                Available this week
                            </div>
                            <button className="w-full bg-white border border-purple-500 text-purple-600 font-semibold py-2 px-4 rounded-lg hover:bg-purple-50 transition-colors">Connect</button>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                            <img alt="Olivia Bennett's profile picture" className="w-24 h-24 rounded-full mb-4 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqEJL6p8vae8jCzSo7lkfGt6OQGPM1OkTo8pJM4fG3XVnqfPiG6tZpjjrBiOhRL6nwXaT8Cv_SfOxagrmTWhnVcikjSjDbqbnhX6JfC8l5P4qgDyyutj5EP8-31IjE1eS7ENz1y4F6Hra0QQhdO2545al4WPVC1lg9xRGxC2-9yoE1u1Bb680oYUOFmyiXhpN-K5NHKoUTmOmjds9mROLU7_24KHVcdpP5irCfBJoo6ASaW66wHzeSr3UcUlynu0XmzH5J5Q5VoZwM" />
                            <h3 className="text-lg font-semibold text-gray-800">Olivia Bennett</h3>
                            <p className="text-gray-500 mb-3">Product Management</p>
                            <div className="inline-flex items-center bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                                Available this week
                            </div>
                            <button className="w-full bg-white border border-purple-500 text-purple-600 font-semibold py-2 px-4 rounded-lg hover:bg-purple-50 transition-colors">Connect</button>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                            <img alt="Noah Foster's profile picture" className="w-24 h-24 rounded-full mb-4 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUe9GyThKCUZJGJn8ZfBfO01YoEiPVbpLaymM4CSy1mQZTf8vy9wZ0k9pJDohWh_AIEjjxeTwQluMfy7HmfPE1qKHkpl9Jr1TmelHgkrDfUGVC85AGQrXL-lIG1LympK5quDtzmJoZPTHirVt7JD-c9SSIOV_lTKlgM3lY0DjQxEKT2JhV_6xEtYe1Icyx2If6SQNTjiG-9sageM41rkZFxxzM0CRCVzyXl-u2ofpOKT5YOMKKLT3hrHjW_lcLTWAhqSHCselnh8uA" />
                            <h3 className="text-lg font-semibold text-gray-800">Noah Foster</h3>
                            <p className="text-gray-500 mb-3">Data Science</p>
                            <div className="inline-flex items-center bg-yellow-100 text-yellow-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                                Available next week
                            </div>
                            <button className="w-full bg-white border border-purple-500 text-purple-600 font-semibold py-2 px-4 rounded-lg hover:bg-purple-50 transition-colors">Connect</button>
                        </div>
                        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                            <img alt="Emma Hayes's profile picture" className="w-24 h-24 rounded-full mb-4 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs57EhZMicE5osz6CUXCRUntCFF6DoRsJDfAFCpzdT0uFi64B0fnwZv5yb5Bg2jCK4HDM6u_Gxz0gQhSKYe0HU3y2iG_dczcOuQkrG6rJ0mJ3Bx1sMqihqA-IBLIkY0OivvrRyXDbry8JVm3HmfgbWKQSEAbymYEXMbOMmVrfET8X7nM99pzpwjE3dVfCeN70wVjgaGjdY_8NdrYeBWuvgqJwd5Y0bsiH3O3HJ-zAvFVDe_-X-WdfOg2Td6pwyROyy2RfqhNNF6mYW" />
                            <h3 className="text-lg font-semibold text-gray-800">Emma Hayes</h3>
                            <p className="text-gray-500 mb-3">UX Design</p>
                            <div className="inline-flex items-center bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
                                Available this week
                            </div>
                            <button className="w-full bg-white border border-purple-500 text-purple-600 font-semibold py-2 px-4 rounded-lg hover:bg-purple-50 transition-colors">Connect</button>
                        </div>
                    </div>
        </>
    );

    return <Template activePage="mentor">{content}</Template>;
};

export default Mentor;
