import React, { useState, useEffect } from "react";
import { getIdActivity } from "../services/api";
import { useParams } from "react-router-dom";
const ActivityDetail = () => {
  const [call, setCall] = useState([]);

  const callId = useParams();

  useEffect(() => {
    console.log();
    const fetchActivities = async () => {
      try {
        const activities = await getIdActivity(callId.elementId);
        setCall(activities);
      } catch (error) {
        console.error("An error occurred while fetching calls: ", error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div>
      <h1>Call Details</h1>
      <div className="mt-4">
        <p>Direction: {call.direction}</p>
        <p>To: {call.to}</p>
        <p>Via: {call.via}</p>
        <p>ID: {call.id}</p>
      </div>
    </div>
  );
};

export default ActivityDetail;
