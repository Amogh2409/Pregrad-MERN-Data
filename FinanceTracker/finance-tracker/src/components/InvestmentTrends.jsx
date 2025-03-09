import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

const data = [
    { month: "Jan", year: 2023, investment: 5000 },
    { month: "Feb", year: 2023, investment: 7000 },
    { month: "Mar", year: 2023, investment: 12000 },
    { month: "Apr", year: 2023, investment: 15000 },
    { month: "May", year: 2023, investment: 17000 },
    { month: "Jun", year: 2023, investment: 20000 },
    { month: "Jul", year: 2023, investment: 22000 },
    { month: "Aug", year: 2023, investment: 25000 },
    { month: "Sep", year: 2023, investment: 27000 },
    { month: "Oct", year: 2023, investment: 30000 },
    { month: "Nov", year: 2023, investment: 32000 },
    { month: "Dec", year: 2023, investment: 35000 },
    { month: "Jan", year: 2024, investment: 38000 },
    { month: "Feb", year: 2024, investment: 40000 },
    { month: "Mar", year: 2024, investment: 42000 },
    { month: "Apr", year: 2024, investment: 45000 },
    { month: "May", year: 2024, investment: 47000 },
    { month: "Jun", year: 2024, investment: 50000 },
    { month: "Jul", year: 2024, investment: 53000 },
    { month: "Aug", year: 2024, investment: 55000 },
    { month: "Sep", year: 2024, investment: 58000 },
    { month: "Oct", year: 2024, investment: 60000 },
    { month: "Nov", year: 2024, investment: 62000 },
    { month: "Dec", year: 2024, investment: 65000 }
];

const InvestmentTrends = () => {
    return (
        <section className="py-16 bg-gray-900 text-white rounded-xl shadow-lg p-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">
                    Investment <span className="text-yellow-400">Growth Trends</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                    Track your portfolio's performance over time with AI-driven insights.
                </p>
            </div>

            {/* Chart Container */}
            <div className="max-w-5xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={data}>
                        <defs>
                            <linearGradient id="colorInvestment" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#facc15" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#facc15" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" stroke="gray" />
                        <XAxis dataKey="month" stroke="#facc15" />
                        <YAxis stroke="#facc15" />
                        <Tooltip contentStyle={{ backgroundColor: "#1f2937", borderColor: "#facc15" }} />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="investment"
                            stroke="#facc15"
                            strokeWidth={3}
                            dot={{ fill: "#facc15", r: 4 }}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </section>
    );
};

export default InvestmentTrends;
