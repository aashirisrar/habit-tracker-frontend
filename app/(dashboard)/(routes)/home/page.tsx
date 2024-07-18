import ActivitiesPage from "@/components/activities-page";
import { CreateActivity } from "@/components/create-acitivity";
import React from "react";

const page = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Activities</h1>
        <div className="flex gap-x-3">
          {/* // check if user is logged in */}
          {<CreateActivity />}
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
          <ActivitiesPage />
        </div>
      </div>
    </>
  );
};

export default page;
