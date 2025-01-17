import React from 'react';
import "../styles/results.css";

const Results = () => {
    const results = [
        {
            id: 1,
            text: "Fintech Client: Led content and marketing initiatives that resulted in 14,000 monthly visits to blog posts, driving a 2963% increase in traffic compared to other marketing channels. Email campaigns directly generated over £35,000 in sales in a single quarter.",
        },
        {
            id: 2,
            text: "SaaS Business: Crafted blog posts that ranked on the first page of Google, attracting 9,000+ visits per month and driving a 6% increase in monthly subscription revenue. My work also contributed to a £155K annual return through content and email strategies.",
        },
        {
            id: 3,
            text: "Global E-commerce Client: Developed high-performing blogs and reports, contributing to 2 of their top 5 traffic sources and supporting sales efforts that generated an estimated £50,000 in new leads in just 6 months.",
        },
        {
            id: 4,
            text: "B2B Brand: Created targeted email sequences and direct mail campaigns that booked 7 meetings in the first month, leading to £600,000 in business within the first quarter, with £37,000 in sales closed by year-end.",
        },
    ];

    return (
        <div id="results">
            <h1><span className="white-underline">Results</span> I have delivered</h1>
            <ul className="custom-bullet-list">
                {results.map((result) => (
                    <li key={result.id}>
                        {result.text}
                    </li>
                ))}
            </ul>
            <div id = "results-bottom-curve"></div>
        </div>
    );
};

export default Results;
