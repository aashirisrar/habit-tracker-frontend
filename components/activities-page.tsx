"use client";

import { useEffect } from "react";
import ActivityComponent from "./activity-component";
import { useAtom } from "jotai";
import { activitiesAtom, fetchActivitiesAtom } from "@/state/atoms";

const ActivitiesPage = () => {
  const [activities] = useAtom(activitiesAtom);
  const [, fetchActivities] = useAtom(fetchActivitiesAtom);

  useEffect(() => {
    fetchActivities();
  }, [fetchActivities]);

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
