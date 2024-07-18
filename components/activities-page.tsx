"use client";

import { useEffect, useState } from "react";
import ActivityComponent from "./activity-component";
import { useAtom } from "jotai";
import { activitiesAtom, fetchActivitiesAtom } from "@/state/atoms";
import { SkeletonCard } from "./skeleton-card";
import { ActivityComponentInterface } from "@/types/route";

const ActivitiesPage = () => {
  const [activities] = useAtom(activitiesAtom);
  const [, fetchActivities] = useAtom(fetchActivitiesAtom);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    fetchActivities();
  }, [fetchActivities]);

  if (isLoading) {
    return <SkeletonCard />;
  }

  return (
    <div className="grid grid-flow-row grid-cols-3 gap-4 cursor-pointer">
      {activities?.map((activity: ActivityComponentInterface) => (
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
