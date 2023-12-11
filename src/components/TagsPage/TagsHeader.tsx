import { Search } from "lucide-react";
import { Input } from "../ui/input";

function TagsHeader() {
  return (
    <div className="flex justify-between items-center px-2 py-2 h-20">
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Tags</h1>
      </div>
      <div className="relative">
        <Input
          type="text"
          placeholder="Search tags"
          className="border border-primarycb "
        />
        <Search
          className="absolute right-3 top-[10px] text-primarycb"
          size={20}
        />
      </div>
    </div>
  );
}

export default TagsHeader;
