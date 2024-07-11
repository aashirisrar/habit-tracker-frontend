"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import ActivityComponent from "./activity-component";

const ActivitiesPage = () => {
  const [activities, setActivities] = useState([]);

  async function getUserActivities() {
    const response = await axios.post("/api/activity/get-user-activity");
    setActivities(response.data.habits);
  }

  useEffect(() => {
    getUserActivities();
  }, []);

  return (
    <div className="grid grid-flow-row grid-cols-3 gap-4 cursor-pointer">
      {activities?.map((activity) => (
        <ActivityComponent
          id={activity.id}
          title={activity.title}
          details={activity.details}
        />
      ))}
    </div>
  );
};

export default ActivitiesPage;
