import React from "react";
// import { Link } from "react-router-dom";



export default function CTA() {
    return (
        <section className="py-16 bg-transparent relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 opacity-50">
                {/* <h2 className="text-4xl font-extrabold text-white"> Hey There </h2> */}
            </div>
            <div className="relative z-10 max-w-3xl mx-auto text-center backdrop-blur-md bg-white/10 border border-white/20 p-10 rounded-2xl shadow-lg">
                <h2 className="text-4xl font-extrabold text-white">Ready to Take Control of Your Finances?</h2>
                <p className="mt-4 text-lg text-gray-200">Join thousands tracking their investments and budgets seamlessly.</p>
                {/* <Link to="/dashboard" className="mt-6 inline-block px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300">
                    Get Started Now 🚀
                </Link> */}

                <button className="mt-6 inline-block px-6 py-3 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300">
                Get Started Now 🚀
                </button>
            </div>
        </section>
    );
}
