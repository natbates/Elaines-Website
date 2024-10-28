import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig"; // Ensure you have the correct path to your Firebase config
import { doc, getDoc, updateDoc } from "firebase/firestore"; // Import Firestore functions
import "../../styles/analytics.css";

const Analytics = () => {
    const [analyticsData, setAnalyticsData] = useState(null); // State to hold analytics data
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state
    const [sessionStartTime, setSessionStartTime] = useState(null); // State to track session start time
    const [sessionDuration, setSessionDuration] = useState(0); // State to track session duration

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

    // Function to track analytics
    const trackAnalytics = async () => {
        if (!analyticsData) return;

        try {
            // Update page views
            await updateDoc(doc(db, "analytics", "data"), {
                pageViews: analyticsData.pageViews + 1,
            });

            // Check for unique visitor using localStorage
            const visitorKey = "uniqueVisitor"; // Key to track unique visitor
            if (!localStorage.getItem(visitorKey)) {
                // Increment unique visitors if this is a new visitor
                await updateDoc(doc(db, "analytics", "data"), {
                    uniqueVisitors: analyticsData.uniqueVisitors + 1,
                });
                localStorage.setItem(visitorKey, "true"); // Mark visitor as unique
            }
        } catch (error) {
            console.error("Error updating analytics data: ", error);
        }
    };

    useEffect(() => {
        if (analyticsData) {
            trackAnalytics(); // Call the tracking function after analyticsData is loaded
        }
    }, [analyticsData]);

    useEffect(() => {
        if (loading || error) return; // Don't run if loading or error occurred

        // Start session duration tracking
        setSessionStartTime(Date.now());

        const intervalId = setInterval(() => {
            // Calculate session duration in minutes
            const durationInMinutes = Math.floor((Date.now() - sessionStartTime) / 1000 / 60);
            setSessionDuration(durationInMinutes); // Update session duration state
        }, 60000); // Update every minute

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, [loading, error]);

    // Update session duration in Firestore when it changes
    useEffect(() => {
        const updateSessionDurationInFirestore = async () => {
            if (sessionDuration > 0 && analyticsData) {
                try {
                    await updateDoc(doc(db, "analytics", "data"), {
                        sessionDuration: sessionDuration, // Update session duration in Firestore
                    });
                } catch (error) {
                    console.error("Error updating session duration: ", error);
                }
            }
        };

        updateSessionDurationInFirestore();
    }, [sessionDuration, analyticsData]);

    if (loading) {
        return <p>Loading analytics data...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div id="analytics-section">
            <table>
                <thead>
                    <tr>
                        <th>Page Views</th>
                        <th>Unique Visitors</th>
                        <th>Session Duration</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{analyticsData.pageViews}</td>
                        <td>{analyticsData.uniqueVisitors}</td>
                        <td>{sessionDuration} minutes</td> {/* Show updated session duration */}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Analytics;
