import { useState } from "react";
import { updateCall } from "../services/api";

const CallCard = ({ call }) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleExpandToggle = () => {
    setExpanded(!isExpanded);
  };

  const handleArchive = async () => {
    try {
      console.log(call);
      if (call.is_archived === true) {
        const archivedCall = { ...call, is_archived: false };
        await updateCall(archivedCall);
      }
      const archivedCall = { ...call, is_archived: true };
      await updateCall(archivedCall);

      console.log(call);
    } catch (error) {
      throw new Error("An error occurred while archiving the call: ", error);
    }
  };

  return (
    <div className="bg-white p-4 mb-4 border rounded-lg shadow-md">
      <div className="flex justify-between">
        <ul className="flex float-start list-none">
          <li className="mx-8 min-w-48">
            {call.from !== undefined ? call.from : "Unknown"}
          </li>

          <li className="mx-8 min-w-48">
            {call.call_type === "missed"
              ? "Missed call"
              : call.call_type !== "answered" || "voicemail"
              ? "Spam call"
              : call.call_type}
          </li>

          <li className="mx-8 ">
            {new Date(call.created_at).toLocaleString()}
          </li>
        </ul>

        <button
          className="text-blue-500 hover:text-blue-700 focus:outline-none"
          onClick={handleArchive}
        >
          {call.is_archived ? "Unarchive" : "Archive"}
        </button>

        <button
          className="text-blue-500 hover:text-blue-700 focus:outline-none"
          onClick={handleExpandToggle}
        >
          {isExpanded ? "Collapse" : "Details"}
        </button>
      </div>
      {isExpanded && (
        <div className="mt-4">
          <p>Direction: {call.direction}</p>
          <p>To: {call.to}</p>
          <p>Via: {call.via}</p>
          <p>ID: {call.id}</p>
        </div>
      )}
    </div>
  );
};

export default CallCard;
