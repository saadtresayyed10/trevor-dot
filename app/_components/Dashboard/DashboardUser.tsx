"use client";

import axios from "axios";
import { useEffect } from "react";

type Props = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePic: string;
};

const DashboardUser = ({
  id,
  firstName,
  lastName,
  email,
  profilePic,
}: Props) => {
  useEffect(() => {
    const addUser = async () => {
      try {
        await axios.post("/api/users", {
          id,
          firstName,
          lastName,
          email,
          profilePic,
        });
      } catch (error) {
        console.log("User might already exist", error);
      }
    };

    addUser();
  }, [id, firstName, lastName, email, profilePic]);

  return (
    <div className="hidden">
      <p>
        {firstName} {lastName}
      </p>
      <p>{email}</p>
      <p>{profilePic}</p>
    </div>
  );
};

export default DashboardUser;
