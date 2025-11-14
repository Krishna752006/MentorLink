import React, { useState } from 'react';
import Template from './template';

const roadmaps = {
    'data-science': {
        title: 'Data Science Roadmap',
        milestones: [
            { icon: 'functions', name: 'Module 1: Foundations', tooltip: 'Math and Stats' },
            { icon: 'code', name: 'Module 2: Programming', tooltip: 'Python & SQL' },
            { icon: 'analytics', name: 'Module 3: Data Analysis', tooltip: 'Pandas, NumPy' },
            { icon: 'model_training', name: 'Module 4: Machine Learning Basics', tooltip: 'Scikit-learn' },
            { icon: 'visibility', name: 'Module 5: Data Visualization', tooltip: 'Matplotlib, Seaborn' },
            { icon: 'work', name: 'Project: Titanic Survival Prediction', tooltip: 'Practical Application' }
        ]
    },
    'machine-learning': {
        title: 'Machine Learning Roadmap',
        milestones: [
            { icon: 'calculate', name: 'Module 1: Linear Algebra', tooltip: 'Core Concepts' },
            { icon: 'trending_up', name: 'Module 2: Regression Models', tooltip: 'Linear & Logistic' },
            { icon: 'hub', name: 'Module 3: Neural Networks', tooltip: 'Intro to Deep Learning' },
            { icon: 'layers', name: 'Module 4: Advanced Architectures', tooltip: 'CNNs, RNNs' },
            { icon: 'cloud_upload', name: 'Module 5: MLOps', tooltip: 'Deployment & Monitoring' },
            { icon: 'emoji_objects', name: 'Project: Image Classifier', tooltip: 'Hands-on project' }
        ]
    },
    'product-ai': {
        title: 'Product AI Roadmap',
        milestones: [
            { icon: 'lightbulb', name: 'Module 1: AI Product Ideation', tooltip: 'Finding Opportunities' },
            { icon: 'group', name: 'Module 2: User-Centric AI', tooltip: 'Designing for Users' },
            { icon: 'bar_chart', name: 'Module 3: AI Product Metrics', tooltip: 'Measuring Success' },
            { icon: 'gavel', name: 'Module 4: AI Ethics & Governance', tooltip: 'Responsible AI' },
            { icon: 'rocket_launch', name: 'Module 5: Go-to-Market Strategy', tooltip: 'Launching AI Products' },
            { icon: 'assignment', name: 'Case Study: AI Feature Proposal', tooltip: 'Real-world scenario' }
        ]
    }
};

const Roadmap = () => {
    const [selectedRoadmap, setSelectedRoadmap] = useState(null);

    const openRoadmap = (roadmapId) => {
        setSelectedRoadmap(roadmaps[roadmapId]);
    };

    const closeRoadmap = () => {
        setSelectedRoadmap(null);
    };

    const content = (
        <>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">AI Roadmaps</h2>
                    {!selectedRoadmap ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" id="roadmap-cards">
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => openRoadmap('data-science')}>
                                <div className="h-40 bg-brand-light flex items-center justify-center">
                                    <span className="material-icons-outlined text-brand-primary text-5xl">functions</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold text-gray-800 text-lg">Data Science</h4>
                                    <p className="text-gray-600 text-sm">Master the skills needed to become a data scientist and work with complex data sets.</p>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                        <div className="bg-brand-primary h-2.5 rounded-full" style={{ width: '45%' }}></div>
                                    </div>
                                    <p className="text-right text-xs text-gray-500 mt-1">45% Complete</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => openRoadmap('machine-learning')}>
                                <div className="h-40 bg-brand-light flex items-center justify-center">
                                    <span className="material-icons-outlined text-brand-primary text-5xl">model_training</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold text-gray-800 text-lg">Machine Learning</h4>
                                    <p className="text-gray-600 text-sm">Learn to build and deploy machine learning models for real-world applications.</p>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                        <div className="bg-brand-primary h-2.5 rounded-full" style={{ width: '70%' }}></div>
                                    </div>
                                    <p className="text-right text-xs text-gray-500 mt-1">70% Complete</p>
                                </div>
                            </div>
                            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-shadow" onClick={() => openRoadmap('product-ai')}>
                                <div className="h-40 bg-brand-light flex items-center justify-center">
                                    <span className="material-icons-outlined text-brand-primary text-5xl">lightbulb</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-semibold text-gray-800 text-lg">Product AI</h4>
                                    <p className="text-gray-600 text-sm">Understand how to integrate AI into products to drive business value and innovation.</p>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                        <div className="bg-brand-primary h-2.5 rounded-full" style={{ width: '20%' }}></div>
                                    </div>
                                    <p className="text-right text-xs text-gray-500 mt-1">20% Complete</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div id="roadmap-flow-container" className="w-full">
                            <button className="mb-4 flex items-center text-brand-primary hover:text-brand-secondary" onClick={closeRoadmap}>
                                <span className="material-icons-outlined">arrow_back</span>
                                <span className="ml-2">Back to Roadmaps</span>
                            </button>
                            <div className="bg-white p-8 rounded-lg shadow-md" id="roadmap-flow-content">
                                <h3 className="text-2xl font-bold text-gray-800 mb-8">{selectedRoadmap.title}</h3>
                                <div className="relative">
                                    {selectedRoadmap.milestones.map((milestone, index) => (
                                        <div className="milestone" key={index}>
                                            <div className="milestone-icon group">
                                                <span className="material-icons-outlined text-brand-primary">{milestone.icon}</span>
                                                <span className="tooltip">{milestone.tooltip}</span>
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-700">{milestone.name}</h4>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
        </>
    );

    return <Template activePage="roadmap">{content}</Template>;
};

export default Roadmap;
