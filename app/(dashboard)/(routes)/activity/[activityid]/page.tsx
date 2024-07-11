"use client";

import ActivityDetailsPage from "@/components/activity-details-page";
import axios from "axios";
import { useEffect, useState } from "react";

const page = () => {
  const [activity, setActivity] = useState();

  async function getActivity() {
    const response = await axios.post("/api/activity/get-activity");
    setActivity(response.data.data.habits);
  }

  useEffect(() => {
    getActivity();
  }, []);

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Activity</h1>
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
            />
          )}
        </div>
      </div>
    </>
  );
};

export default page;
