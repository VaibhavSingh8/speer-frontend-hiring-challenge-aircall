import { useEffect, useState } from "react";
import { getActivities } from "../services/api";
import CallActivity from "./CallActivity";

const ActivityFeed = () => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const activities = await getActivities();
        setCalls(activities);
      } catch (error) {
        console.error("An error occurred while fetching calls: ", error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <div>
      <h1>Activity Feed</h1>
      <div className="call-list">
        {calls.map((call) => (
          <CallActivity key={call.id} call={call} />
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
