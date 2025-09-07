"use client";

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const Home = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  return (
    <div>
      {!isUserAuthenticated ? (
        <LoginLink>Sign In</LoginLink>
      ) : (
        redirect("/dashboard")
      )}
    </div>
  );
};

export default Home;
