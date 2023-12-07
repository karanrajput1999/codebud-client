import UserCard from "./UserCard";

function UsersCardContainer() {
  return (
    <div className="users-card-container mt-2 px-2 flex flex-wrap gap-2">
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
      <UserCard />
    </div>
  );
}

export default UsersCardContainer;
