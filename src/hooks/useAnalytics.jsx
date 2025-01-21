import { useEffect, useState } from "react";
import { db } from "../services/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const useAnalytics = () => {
    const [analyticsData, setAnalyticsData] = useState(null);
    const [sessionStartTime, setSessionStartTime] = useState(null);

    // Fetch analytics data on mount
    useEffect(() => {
        const fetchAnalyticsData = async () => {
            try {
                const analyticsDocRef = doc(db, "analytics", "data");
                const docSnapshot = await getDoc(analyticsDocRef);

                if (docSnapshot.exists()) {
                    setAnalyticsData(docSnapshot.data());
                } else {
                    console.error("No analytics data found.");
                }
            } catch (error) {
                console.error("Error fetching analytics data: ", error);
            }
        };

        fetchAnalyticsData();
    }, []);

    // Track analytics for page views and unique visitors
    useEffect(() => {
        const trackAnalytics = async () => {
            if (!analyticsData) return;

            try {
                // Update page views
                await updateDoc(doc(db, "analytics", "data"), {
                    pageViews: analyticsData.pageViews + 1,
                });

                // Check for unique visitor using localStorage
                const visitorKey = "uniqueVisitor";
                if (!localStorage.getItem(visitorKey)) {
                    await updateDoc(doc(db, "analytics", "data"), {
                        uniqueVisitors: analyticsData.uniqueVisitors + 1,
                    });
                    localStorage.setItem(visitorKey, "true");
                }
            } catch (error) {
                console.error("Error updating analytics data: ", error);
            }
        };

        if (analyticsData) {
            trackAnalytics();
        }
    }, [analyticsData]);

    // Track session duration
    useEffect(() => {
        setSessionStartTime(Date.now());

        const intervalId = setInterval(async () => {
            const durationInMinutes = Math.floor((Date.now() - sessionStartTime) / 1000 / 60);

            try {
                await updateDoc(doc(db, "analytics", "data"), {
                    sessionDuration: durationInMinutes,
                });
            } catch (error) {
                console.error("Error updating session duration: ", error);
            }
        }, 60000);

        return () => clearInterval(intervalId);
    }, [sessionStartTime]);

    return analyticsData; // Optionally return the data for use in other components
};

export default useAnalytics;
