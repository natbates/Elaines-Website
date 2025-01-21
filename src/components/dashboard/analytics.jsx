import React, { useEffect, useState } from "react";
import { storage, db } from '../../services/firebaseConfig';
import { doc, getDoc } from "firebase/firestore"; // Import Firestore functions
import "../../styles/analytics.css";

const Analytics = () => {
    const [analyticsData, setAnalyticsData] = useState(null); // State to hold analytics data
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        const fetchAnalyticsData = async () => {
            try {
                const analyticsDocRef = doc(db, "analytics", "data"); 
                const docSnapshot = await getDoc(analyticsDocRef);

                if (docSnapshot.exists()) {
                    // If the document exists, set the analytics data
                    setAnalyticsData(docSnapshot.data());
                } else {
                    setError("No analytics data found.");
                }
            } catch (error) {
                console.error("Error fetching analytics data: ", error);
                setError("Failed to load analytics data.");
            } finally {
                setLoading(false);
            }
        };

        fetchAnalyticsData();
    }, []);

    if (loading) {
        return <p>Loading analytics data...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div id="analytics-section">
            <p>Hello Elaine, your page has {analyticsData.pageViews} views with {analyticsData.uniqueVisitors} unique visitors.</p>
        </div>
    );
};

export default Analytics;
