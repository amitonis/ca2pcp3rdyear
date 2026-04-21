// components/ActivityItem.jsx
import React from "react";

const ActivityItem = ({ activity, onToggle }) => {
  return (
    <div data-testid="activity-item" className="activity-item">
      <h3>{activity.name || "Unknown"}</h3>
      <p>
        <strong>Activity ID:</strong> {activity.activityld}
      </p>
      <p>
        <strong>Steps:</strong> {activity.steps}
      </p>
      <p>
        <strong>Calories Burned:</strong> {activity.caloriesBurned}
      </p>
      <p>
        <strong>Workout Minutes:</strong> {activity.workoutMinutes}
      </p>
      <p>
        <strong>Date:</strong> {activity.date || "No date"}
      </p>
      <p>
        <strong>Goal Achieved:</strong>{" "}
        {activity.goalAchieved ? "Yes" : "No"}
      </p>
      <button onClick={() => onToggle(activity.activityld)}>
        Toggle Goal Status
      </button>
    </div>
  );
};

export default ActivityItem;
