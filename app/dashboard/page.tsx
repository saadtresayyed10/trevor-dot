import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Dashboard = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div>
      <p>{user?.id}</p>
      <p>
        {user?.given_name} {user?.family_name}
      </p>
      <p>{user?.email}</p>
    </div>
  );
};

export default Dashboard;
