import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white px-6">
            <div className="max-w-xl text-center space-y-6">
                <h1 className="text-4xl font-bold">Thank You!</h1>
                <p className="text-lg">
                    Your message has been successfully sent. I will get back to you as soon as possible.
                </p>
                <Link to="/">
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold transition duration-300">
                        Go Back to Home
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default ThankYou;
