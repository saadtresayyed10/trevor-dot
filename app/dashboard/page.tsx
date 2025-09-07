import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";
import DashboardUser from "../_components/Dashboard/DashboardUser";

const Dashboard = async () => {
  const { getUser } = getKindeServerSession();
  const kUser = await getUser();

  return (
    <div>
      <DashboardUser
        id={kUser?.id!}
        firstName={kUser?.given_name!}
        lastName={kUser?.family_name!}
        email={kUser?.email!}
        profilePic={kUser?.picture!}
      />
    </div>
  );
};

export default Dashboard;
