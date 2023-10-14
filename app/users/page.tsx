import UserCard, { User } from "@/components/UserCard";
import React from "react";

async function getUsersData() {
  const res = await fetch("http://localhost:3000/api/users", {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Users = async () => {
  const allUsers: User[] = await getUsersData();
  console.log(allUsers);
  return (
    <div className="bg-black p-20 min-h-screen text-white flex flex-row flex-wrap">
      {allUsers?.map((user: User) => {
        return (
          <UserCard
            key={user.uid}
            full_name={user.full_name}
            image={user.image}
            email_address={user.email_address}
            job_title={user.job_title}
          />
        );
      })}
    </div>
  );
};

export default Users;
