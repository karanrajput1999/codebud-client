import { Input } from "../ui/input";

function UsersHeader() {
  return (
    <div className="flex justify-between items-center px-2 py-2 h-20 ">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Users</h1>
      </div>
      <div>
        <Input type="text" placeholder="Search user" />
      </div>
    </div>
  );
}

export default UsersHeader;
