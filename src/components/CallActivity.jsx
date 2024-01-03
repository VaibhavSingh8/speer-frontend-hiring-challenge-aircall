import "../css/CallActivity.css";

const CallActivity = ({ call }) => {
  return (
    <div className={`call-card ${call.is_archived ? "archived" : ""}`}>
      <div className="call-info">
        <div className="direction">
          {call.direction === "inbound" ? "Incoming Call" : "Outgoing Call"}
        </div>
        <div className="caller">From: {call.from}</div>
        <div className="duration">Duration: {call.duration} seconds</div>
        <div className="call-type">Call Type: {call.call_type}</div>
      </div>
      <div className="archive-button">
        <button>{call.is_archived ? "Unarchive" : "Archive"}</button>
      </div>
    </div>
  );
};

export default CallActivity;
