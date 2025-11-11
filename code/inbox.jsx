import React from 'react';
import Template from './template';

const Inbox = () => {
    const content = (
        <>
                    <div className="w-1/3 bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="p-4 border-b border-gray-200">
                            <h2 className="text-xl font-bold text-gray-800">Inbox</h2>
                            <div className="flex space-x-4 mt-4 text-sm text-gray-500">
                                <a href="#" className="font-semibold text-brand-primary">All</a>
                                <a href="#" className="hover:text-brand-primary">Unread</a>
                                <a href="#" className="hover:text-brand-primary">Sent</a>
                                <a href="#" className="hover:text-brand-primary">Archived</a>
                            </div>
                        </div>
                        <div className="overflow-y-auto">
                            <div className="p-4 border-b border-gray-200 cursor-pointer bg-indigo-50 border-l-4 border-brand-primary">
                                <div className="flex items-start space-x-4">
                                    <img alt="Liam Harper avatar" className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkvEN5TExjKeroNZlkCaurAQn6SCDrj07T61yA3TW8v80Yc4TQknZ1pKbZweKXsY1eP2PGHrpg3BMpGBRmRKnYU6xTJClBCzS-5mAz2rEtOQ0VhR0s8oE_aT82KbBhCopl3c1ZoWK6wTYlDHtT1FyaWIyOP_NvOYMxz9eC5TCN9Y13GfTrtEVCLxbnuVJl5oVG9_U0M5NuVHnF8undZ4-Vrlb2CQI9nvDNoG_M8C1RHveMC7t378cyPNlIvbYad3ey2w6Xp8BQ3oc" />
                                    <div className="flex-1">
                                        <div className="flex justify-between items-baseline">
                                            <p className="font-semibold text-gray-800">Liam Harper</p>
                                            <p className="text-xs text-gray-500">10:30 AM</p>
                                        </div>
                                        <p className="text-sm font-semibold text-gray-800 mt-1">Re: Project Collaboration</p>
                                        <p className="text-sm text-gray-500 truncate mt-1">Hey Sarah, that sounds like a great idea. I'm available...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100">
                                <div className="flex items-start space-x-4">
                                    <img alt="Olivia Bennett avatar" className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB87llkJrU5GPXoXDb69aNLi-TegDtilaL4EXTchDU314O8pn8TVDgYJv_77EakTv4oH7hnN2ZE_H9mCTpYZ_MkyZ8TEgBJdp75nLy2jutreGCakq1QWDi44jw47AEo_wiU5D4OGp2kIdzq0HN-iVPBrrKQLygxvy86cHqpmh-stx4uajoEopgcF-ebZFyLD8uOO4di7lMx6Mp1jlh-NnzlcpP0UukiWmJhC6AdXJ4wg4nFpgx6edcBw4pyg1Hq0VpdDoYCReWHBM0" />
                                    <div className="flex-1">
                                        <div className="flex justify-between items-baseline">
                                            <p className="font-semibold text-gray-800">Olivia Bennett</p>
                                            <p className="text-xs text-gray-500">Yesterday</p>
                                        </div>
                                        <p className="text-sm font-semibold text-gray-800 mt-1">Following up on our session</p>
                                        <p className="text-sm text-gray-500 truncate mt-1">Just wanted to follow up on our last session. Did you have...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100">
                                <div className="flex items-start space-x-4">
                                    <img alt="Noah Foster avatar" className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4MwSZL_js1ZkmHv0BJHlzffkByEcX9zSLGED5_Ge5PxfuWh6A3zbJFtHprI2Gh1RIoWT_8IFB1HR-DVhmEpq0xHV69F8k2T-35q_hC9X9mpw5591S56sTvmzYTdv_CImb8GpyH8hFDz-CqMSKcaESF-QSmQbxYeiGsrOLguFmZxXtmGpb9eCjcIgBRLyz5dvKngzCPAVoxLUY0FlnTVgCGqYW7KY2Vj6i7NUXHj8mZQj-K-5GbAdBmPRDD3uNACh7GEjbwkW_nuE" />
                                    <div className="flex-1">
                                        <div className="flex justify-between items-baseline">
                                            <p className="font-semibold text-gray-800">Noah Foster</p>
                                            <p className="text-xs text-gray-500">July 10</p>
                                        </div>
                                        <p className="text-sm font-semibold text-gray-800 mt-1">Quick Question</p>
                                        <p className="text-sm text-gray-500 truncate mt-1">Hi Sarah, had a quick question about the resources you...</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100">
                                <div className="flex items-start space-x-4">
                                    <img alt="Ethan Carter avatar" className="w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARvN541Ib3-eKv212xvq_kR_FrJl9JH-m2Gm8j8VP0DtyxbNqjwHTDL-fc6FsZyBPBwhWE0zF7Y23qcrMX_4Ox7zaJMUBn0lOfTGD7Ln7_n_dVQ29cwL1a7duECSTEnyr0hBYbSIu5UfIY8yvTZt756IcZRgBDIq0lt6jmeH7o8BeMb25w3VHeXEjjvs7IUUCbMwojMTxbemBfN1GCXAHlUqxKEh-rzK3xznhtfpUFrl2v0cSVzHo1aPJhhiYLXgtYxtRKL87KAX8" />
                                    <div className="flex-1">
                                        <div className="flex justify-between items-baseline">
                                            <p className="font-semibold text-gray-800">Ethan Carter</p>
                                            <p className="text-xs text-gray-500">July 9</p>
                                        </div>
                                        <p className="text-sm font-semibold text-gray-800 mt-1">Session Confirmation</p>
                                        <p className="text-sm text-gray-500 truncate mt-1">Confirming our session for next week. Looking forward to it!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/3 bg-white rounded-lg shadow-sm flex flex-col border border-gray-200">
                        <div className="p-4 border-b border-gray-200">
                            <h3 className="text-xl font-bold text-gray-800">Re: Project Collaboration</h3>
                            <div className="flex items-center space-x-4 mt-4">
                                <img alt="Liam Harper avatar" className="w-12 h-12 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBv1Gncxyp22V6gsIh6e6Q8avVug0ZF47ngQb0NqMQs2zgQuLCGD4K1rAnjTw2_3eNkT1ll-lIm8ddAx4Czb0E2OxYyfJzO2hfyHo7CxCXG7Dt-RQ090XF6XVyuyKJ7i4ybhKbut1kPBIj89O9yRtQbqES5NU3p9VrQEbhWaZd__yMHf1dWLSDo96qnp2jeiq2wEfTJndp_GKRQvfBhdAxlr-hjsMEKPTbtqCmk6INXpWpHh-Dlz7BH67eNR6dg1zhfzkDZUspen9k" />
                                <div>
                                    <p className="font-semibold text-gray-800">Liam Harper</p>
                                    <p className="text-sm text-gray-500">To: Sarah</p>
                                </div>
                                <div className="flex-grow text-right">
                                    <p className="text-sm text-gray-500">July 16, 2024, 10:30 AM</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 p-6 overflow-y-auto space-y-4 text-gray-800">
                            <p>Hey Sarah,</p>
                            <p>That sounds like a great idea. I'm available to chat more about this tomorrow afternoon. Would 2 PM work for you?</p>
                            <p>We can discuss the project scope, timeline, and how we can best leverage our skills to make it a success. I've already jotted down a few initial thoughts that I'm excited to share.</p>
                            <p>Let me know what time works best.</p>
                            <p>Best,<br />Liam</p>
                        </div>
                        <div className="p-6 border-t border-gray-200 bg-gray-50 rounded-b-lg">
                            <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary" placeholder="Type your reply..." rows="4"></textarea>
                            <div className="flex justify-end mt-4">
                                <React.Fragment>
                                    <button className="bg-brand-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary">
                                        Reply
                                    </button>
                                </React.Fragment>
                            </div>
                        </div>
                    </div>
        </>
    );

    return <Template activePage="inbox">{content}</Template>;
};

export default Inbox;