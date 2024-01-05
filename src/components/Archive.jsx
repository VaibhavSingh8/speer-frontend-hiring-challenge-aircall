import React, { useEffect, useState } from "react";
import CallsCard from "./CallsCard";
import { getActivities, updateMultipleCalls } from "../services/api";

const Archive = () => {
  const [archivedCalls, setArchivedCalls] = useState([]);

  useEffect(() => {
    const fetchArchivedCalls = async () => {
      try {
        const activities = await getActivities({ is_archived: true });

        setArchivedCalls(activities);
      } catch (error) {
        throw error;
      }
    };

    fetchArchivedCalls();
  }, []);

  const handleUnarchiveAll = async () => {
    try {
      const unarchivedCalls = archivedCalls.map((call) => ({
        ...call,
        is_archived: false,
      }));
      await updateMultipleCalls(unarchivedCalls);
      setArchivedCalls([]);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      {archivedCalls.length > 0 ? (
        <div>
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 "
            onClick={handleUnarchiveAll}
          >
            Un-archive all calls
          </button>
          <div className="mx-2">
            {archivedCalls.map((call) => (
              <CallsCard key={call.id} call={call} />
            ))}
          </div>
        </div>
      ) : (
        <p>No archived calls.</p>
      )}
    </div>
  );
};

export default Archive;
