"use client";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Dashboard = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div>
      <LogoutLink>Sign Out</LogoutLink>
      <p>{user?.email}</p>
    </div>
  );
};

export default Dashboard;
