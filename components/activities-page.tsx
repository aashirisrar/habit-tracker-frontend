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
    <div>
      {activities?.map((activity) => (
        <ActivityComponent id={activity.id} />
      ))}
    </div>
  );
};

export default ActivitiesPage;
