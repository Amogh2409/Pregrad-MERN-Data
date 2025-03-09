import React from "react";
import { motion } from "framer-motion";
import { AiOutlineBarChart, AiOutlineFundProjectionScreen, AiOutlineSafetyCertificate } from "react-icons/ai"


const features = [
    {
        title: "Smart Investment Tracking",
        description: "Monitor your assets with real-time AI insights and maximize your portfolio growth.",
        icon: <AiOutlineBarChart className="text-4xl text-yellow-400" />,
    },
    {
        title: "Automated Budgeting",
        description: "Set budgets, track expenses, and receive AI-driven spending suggestions.",
        icon: <AiOutlineFundProjectionScreen className="text-4xl text-green-400" />,
    },
    {
        title: "Bank-Level Security",
        description: "Your financial data is protected with the highest-grade encryption and authentication.",
        icon: <AiOutlineSafetyCertificate className="text-4xl text-blue-400" />,
    },
];


const Features = () => {

    return (
        <section className="py-16 bg-gray-900 text-white rounded-xl shadow-lg p-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">
                    Why Choose <span className="text-yellow-400">Ai Finance ?</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                    Advanced AI-powered features to make your finance tracking seamless and efficient.
                </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {features.map((features, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="p-8 bg-gray-800 rounded-2xl text-center shadow-lg border border-gray-700"
                    >

                        <div className="mb-4">{features.icon}</div>
                        <h3 className="text-2xl font-bold">{features.title}</h3>
                        <p className="mt-2 text-gray-400">{features.description}</p>
                    </motion.div>

                ))}
            </div>

        </section>
    );

}

export default Features;