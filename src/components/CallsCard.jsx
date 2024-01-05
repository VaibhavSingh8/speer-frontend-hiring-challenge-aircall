import { useState } from "react";
import { Link } from "react-router-dom";

const CallCard = ({ call }) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleExpandToggle = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className="bg-white p-4 mb-4 border rounded-lg shadow-md">
      <div className="flex justify-between cursor-pointer">
        <ul className="flex float-start list-none" onClick={handleExpandToggle}>
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

        <Link
          to={"/" + call.id}
          className="text-blue-500 hover:text-blue-700 focus:outline-none"
        >
          Details
        </Link>
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
