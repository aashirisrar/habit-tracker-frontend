"use client";

import { User } from "@/types/route";
import axios from "axios";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [user, setUser] = useState<User>();

  async function getUserProfile() {
    const id = sessionStorage.getItem("userId");
    const resp = await axios.post("/api/profile/getprofile", { id: id });
    setUser(resp.data.data);
  }

  useEffect(() => {
    getUserProfile();
  }, []);

  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Profile</h1>
        <div className="flex gap-x-3">{/* // add button here */}</div>
      </div>
      <div
        className="flex justify-between gap-4 rounded-lg shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="mx-auto w-full">{user && user.email}</div>
      </div>
    </>
  );
};

export default ProfilePage;
