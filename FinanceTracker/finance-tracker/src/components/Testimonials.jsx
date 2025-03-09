import React from "react";
import { motion } from "framer-motion";



const testimonials = [
    {
        name: "Aryan Patel",
        review: "AI Finance has completely changed how I track my investments. The insights are game-changing!",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
        name: "Sneha Sharma",
        review: "Budgeting and expense tracking have never been this easy. Highly recommend this platform!",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
        name: "Rohan Verma",
        review: "Secure, intuitive, and feature-packed! The AI-driven suggestions are top-notch.",
        image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
];


const Testimonials = () => {
    return (
        <section className="py-20 bg-gray-800 text-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold">What Our Users Say</h2>
                <p className="mt-4 text-gray-300">Trusted by thousands of users worldwide.</p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((user, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="p-6 bg-gray-700 rounded-xl text-center shadow-lg border border-gray-600"
          >
            <img src={user.image} alt={user.name} className="mx-auto w-20 h-20 rounded-full border-4 border-yellow-400" />
            <h3 className="mt-4 text-xl font-bold">{user.name}</h3>
            <p className="mt-2 text-gray-300 italic">"{user.review}"</p>
          </motion.div>
        ))}
      </div>

        </section>
    );
}

export default Testimonials;