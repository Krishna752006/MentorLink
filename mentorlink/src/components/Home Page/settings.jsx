import React from 'react';
import Template from './template';

const Settings = () => {
    const content = (
        <>
        <div className="grid grid-cols-12 gap-8">
                    <aside className="col-span-3">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <nav className="space-y-1">
                                <button className="w-full text-left block px-4 py-2 text-sm font-medium text-white bg-brand-primary rounded-md">Account</button>
                                <button className="w-full text-left block px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 rounded-md">Notifications</button>
                                <button className="w-full text-left block px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 rounded-md">Privacy</button>
                                <button className="w-full text-left block px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 rounded-md">Billing</button>
                            </nav>
                        </div>
                    </aside>
                    <div className="col-span-9 space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-xl font-semibold text-gray-800 mb-6">Account Settings</h2>
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700" htmlFor="firstName">First Name</label>
                                        <input className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary sm:text-sm" id="firstName" type="text" defaultValue="Sarah" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700" htmlFor="lastName">Last Name</label>
                                        <input className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary sm:text-sm" id="lastName" type="text" defaultValue="Doe" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email Address</label>
                                    <input className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-primary sm:text-sm" id="email" type="email" defaultValue="sarah.doe@example.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="country">Country</label>
                                    <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary sm:text-sm rounded-md" id="country">
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h2 className="text-xl font-semibold text-gray-800 mb-6">Notification Settings</h2>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-700">Email Notifications</span>
                                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                        <input defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-2 appearance-none cursor-pointer" id="toggle1" name="toggle" type="checkbox" />
                                        <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" htmlFor="toggle1"></label>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-700">Push Notifications</span>
                                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                        <input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-2 appearance-none cursor-pointer" id="toggle2" name="toggle" type="checkbox" />
                                        <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" htmlFor="toggle2"></label>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-700">Weekly Newsletter</span>
                                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                        <input defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-2 appearance-none cursor-pointer" id="toggle3" name="toggle" type="checkbox" />
                                        <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" htmlFor="toggle3"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-brand-primary hover:bg-brand-secondary text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors">
                                Save Changes
                            </button>
                        </div>
                    </div>
        </div>
        </>
    );

    return <Template activePage="settings">{content}</Template>;
}

export default Settings;
