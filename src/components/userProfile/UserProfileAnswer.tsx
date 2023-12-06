import { Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

function UserProfileAnswer() {
  return (
    <div className="answer w-[100%] py-2 px-1 flex gap-3 items-center border border-b-slate-500">
      <div className="answer-icon">
        <Newspaper size={30} />
      </div>
      <div className="answer-votes">
        <div className="text-xs md:text-sm border border-slate-500 p-1 rounded">
          <span>10</span>
        </div>
      </div>
      <div className="answer-text">
        <Link to="users/user" className="underline md:text-xl text-primarycb">
          How to create a selection rectangle with rotate, resize and move
          abilities?
        </Link>
      </div>
      <div className="answer-time text-xs md:text-sm shrink-0">
        <span>2 hours ago</span>
      </div>
    </div>
  );
}

export default UserProfileAnswer;
