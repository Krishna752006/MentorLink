import React from 'react';
import Template from './template';

const Resources = () => {
    const content = (
        <>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        <div className="lg:col-span-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                                    <div className="h-40 bg-brand-light flex items-center justify-center">
                                        <span className="material-icons-outlined text-brand-primary text-5xl">play_circle_outline</span>
                                    </div>
                                    <div className="p-4">
                                        <span className="inline-block bg-brand-light text-brand-primary text-xs font-semibold px-2 py-1 rounded-full mb-2">Video</span>
                                        <h4 className="font-semibold text-gray-800 text-lg">Introduction to Product Management</h4>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                                    <div className="h-40 bg-brand-light flex items-center justify-center">
                                        <span className="material-icons-outlined text-brand-primary text-5xl">description</span>
                                    </div>
                                    <div className="p-4">
                                        <span className="inline-block bg-brand-light text-brand-primary text-xs font-semibold px-2 py-1 rounded-full mb-2">Guide</span>
                                        <h4 className="font-semibold text-gray-800 text-lg">The Ultimate Guide to Data Science</h4>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                                    <div className="h-40 bg-brand-light flex items-center justify-center">
                                        <span className="material-icons-outlined text-brand-primary text-5xl">article</span>
                                    </div>
                                    <div className="p-4">
                                        <span className="inline-block bg-brand-light text-brand-primary text-xs font-semibold px-2 py-1 rounded-full mb-2">Article</span>
                                        <h4 className="font-semibold text-gray-800 text-lg">10 Tips for Effective Communication</h4>
                                    </div>
                                 </div>
                                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                                    <div className="h-40 bg-brand-light flex items-center justify-center">
                                        <span className="material-icons-outlined text-brand-primary text-5xl">build</span>
                                    </div>
                                    <div className="p-4">
                                        <span className="inline-block bg-brand-light text-brand-primary text-xs font-semibold px-2 py-1 rounded-full mb-2">Tool</span>
                                        <h4 className="font-semibold text-gray-800 text-lg">Agile Project Management Board</h4>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                                    <div className="h-40 bg-brand-light flex items-center justify-center">
                                        <span className="material-icons-outlined text-brand-primary text-5xl">picture_as_pdf</span>
                                    </div>
                                    <div className="p-4">
                                        <span className="inline-block bg-brand-light text-brand-primary text-xs font-semibold px-2 py-1 rounded-full mb-2">PDF</span>
                                        <h4 className="font-semibold text-gray-800 text-lg">Software Engineering Principles</h4>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                                    <div className="h-40 bg-brand-light flex items-center justify-center">
                                        <span className="material-icons-outlined text-brand-primary text-5xl">play_circle_outline</span>
                                    </div>
                                    <div className="p-4">
                                        <span className="inline-block bg-brand-light text-brand-primary text-xs font-semibold px-2 py-1 rounded-full mb-2">Video</span>
                                        <h4 className="font-semibold text-gray-800 text-lg">Cracking the PM Interview</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <aside className="lg:col-span-1 lg:order-first">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Resources</h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-gray-700 mb-3">Topics</h3>
                                    <div className="space-y-2">
                                        <label className="flex items-center">
                                            <input className="h-4 w-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary" type="checkbox" />
                                            <span className="ml-2 text-gray-600">Software Engineering</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input defaultChecked className="h-4 w-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary" type="checkbox" />
                                            <span className="ml-2 text-gray-600">Product Management</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input className="h-4 w-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary" type="checkbox" />
                                            <span className="ml-2 text-gray-600">Data Science</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input className="h-4 w-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary" type="checkbox" />
                                            <span className="ml-2 text-gray-600">UX/UI Design</span>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-700 mb-3">Difficulty</h3>
                                    <div className="space-y-2">
                                        <label className="flex items-center">
                                            <input className="h-4 w-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary" type="checkbox" />
                                            <span className="ml-2 text-gray-600">Beginner</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input className="h-4 w-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary" type="checkbox" />
                                            <span className="ml-2 text-gray-600">Intermediate</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input className="h-4 w-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary" type="checkbox" />
                                            <span className="ml-2 text-gray-600">Advanced</span>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-700 mb-3">Format</h3>
                                    <div className="space-y-2">
                                        <label className="flex items-center">
                                            <input className="h-4 w-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary" type="checkbox" />
                                            <span className="ml-2 text-gray-600">Video</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input className="h-4 w-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary" type="checkbox" />
                                            <span className="ml-2 text-gray-600">Guide</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input className="h-4 w-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary" type="checkbox" />
                                            <span className="ml-2 text-gray-600">Article</span>
                                        </label>
                                        <label className="flex items-center">
                                            <input className="h-4 w-4 text-brand-primary border-gray-300 rounded focus:ring-brand-primary" type="checkbox" />
                                            <span className="ml-2 text-gray-600">Tool</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
        </>
    );

    return <Template activePage="resources">{content}</Template>;
}

export default Resources;
