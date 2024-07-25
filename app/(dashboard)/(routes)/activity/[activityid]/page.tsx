"use client";

import ActivityDetailsPage from "@/components/activity-details-page";
import { CreateActivityValuesButton } from "@/components/create-activity-values-button";
import { SkeletonCard } from "@/components/skeleton-card";
import { Button } from "@/components/ui/button";
import { activityValues, fetchActivityValuesaAtom } from "@/state/atoms";
import { ActivityComponentInterface } from "@/types/route";
import axios from "axios";
import { useAtom } from "jotai";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {
  const params = useParams();
  const [activity, setActivity] = useState<ActivityComponentInterface>();
  const router = useRouter();
  const [, fetchActivityValues] = useAtom(fetchActivityValuesaAtom);
  const [values] = useAtom(activityValues);
  const [isLoading, setIsLoading] = useState(true);

  async function getActivity() {
    const response = await axios.post("/api/activity/get-activity", {
      id: params.activityid,
    });
    setActivity(response.data.data.habits);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    getActivity();
  }, []);

  useEffect(() => {
    fetchActivityValues(params.activityid);
  }, [fetchActivityValues]);

  async function deleteActivity() {
    const response = await axios.post("/api/activity/delete-activity", {
      id: params.activityid,
    });

    router.push("/home");
  }

  if (isLoading) {
    return <SkeletonCard />;
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Activity</h1>
        <div className="flex gap-x-3">
          {activity && (
            <Button className="max-sm:hidden" onClick={deleteActivity}>
              Delete Activity
            </Button>
          )}
          {activity && <CreateActivityValuesButton id={activity?.id} />}
        </div>
      </div>
      <div
        className="flex justify-between gap-4 rounded-lg shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        {/* <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no products
          </h3>
          <p className="text-sm text-muted-foreground">
            You can start selling as soon as you add a product.
          </p>
          <Button className="mt-4">Add Product</Button>
        </div> */}
        <div className="mx-auto w-full">
          {activity && (
            <ActivityDetailsPage
              id={activity.id}
              title={activity.title}
              details={activity.details}
              values={values}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default page;
