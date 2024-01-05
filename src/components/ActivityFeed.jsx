import { useEffect, useState } from "react";
import { getActivities, updateMultipleCalls } from "../services/api";
import CallCard from "./CallsCard";

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

  const handleArchiveAll = async () => {
    try {
      const archivedCalls = calls.map((call) => ({
        ...call,
        is_archived: true,
      }));
      await updateMultipleCalls(archivedCalls);
      setCalls(archivedCalls);
    } catch (error) {
      console.error("An error occurred while updating calls: ", error);
    }
  };

  return (
    <div>
      <button
        className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 "
        onClick={handleArchiveAll}
      >
        Archive all calls
      </button>
      <div className="mx-2">
        {calls
          .filter((call) => !call.is_archived)
          .map((call) => (
            <CallCard key={call.id} call={call} />
          ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
