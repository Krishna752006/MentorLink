import React from 'react';
import Template from './template';

const Profile = () => {
    const content = (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Edit Profile</h2>
            <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1 flex flex-col items-center">
                        <img alt="Profile picture" className="w-32 h-32 rounded-full mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOSa_-WyLmJyDXnQriS1iLQ0SLhDom26BKvclJYPioG2kVumorlnvmNp0WQelLb7zbIVV1Z8z0JZfSvfV_8peMSZIsx0tDXYO_ngh6-UW1Lb16mdi6CVB1bv5pjjZRYlb0G9wTuywzOgWaaRZ-_KiQS0vuU8Ko11Q1GlnfOPZ8iDaDJVVZeM0is2JrQqQYvgSJotfln-c2tVBH6DrQcOOT0CY9abRPynA05JpDEJ0jlyCcLRcHz82OCjNM6SBmfS8uoSxXmtrED-A" />
                        <button className="text-brand-primary font-medium hover:text-brand-secondary">Change Photo</button>
                    </div>
                    <div className="md:col-span-2">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="fullName">Full Name</label>
                                <input className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary" id="fullName" type="text" placeholder="Sarah Doe" />
                            </div>
                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="bio">Bio</label>
                                <textarea className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary" id="bio" rows="4" placeholder="Experienced product manager passionate about building ..."></textarea>
                            </div>
                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Expertise / Skills</label>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-brand-light text-brand-primary text-sm font-medium px-3 py-1 rounded-full flex items-center">
                                        Product Management
                                        <button className="ml-2 text-brand-primary hover:text-brand-secondary">×</button>
                                    </span>
                                    <span className="bg-brand-light text-brand-primary text-sm font-medium px-3 py-1 rounded-full flex items-center">
                                        AI
                                        <button className="ml-2 text-brand-primary hover:text-brand-secondary">×</button>
                                    </span>
                                    <span className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full cursor-pointer hover:bg-gray-300">
                                        Data Science +
                                    </span>
                                    <span className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full cursor-pointer hover:bg-gray-300">
                                        UX Design +
                                    </span>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="location">Location</label>
                                <input className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary" id="location" type="text" placeholder="San Francisco, CA" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="linkedin">LinkedIn Profile</label>
                                <input className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary" id="linkedin" placeholder="https://linkedin.com/in/..." type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="github">GitHub Profile</label>
                                <input className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary" id="github" placeholder="https://github.com/..." type="text" />
                            </div>
                            <div className="col-span-2 flex items-center justify-between mt-4">
                                <span className="text-gray-700 font-medium">Open to new mentees</span>
                                <label className="inline-flex relative items-center cursor-pointer" htmlFor="availability-toggle">
                                    <input defaultChecked className="sr-only peer" id="availability-toggle" type="checkbox" value="" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-primary"></div>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mt-8 flex justify-end space-x-4">
                    <button className="py-2 px-6 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition-colors">Cancel</button>
                    <button className="py-2 px-6 bg-brand-primary text-white font-medium rounded-lg hover:bg-brand-secondary transition-colors">Save Changes</button>
                </div>
            </div>
        </div>
    );

    return <Template activePage="profile">{content}</Template>;
};

export default Profile;