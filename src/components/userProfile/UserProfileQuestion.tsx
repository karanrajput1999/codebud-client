import { FileQuestion } from "lucide-react";
import { Link } from "react-router-dom";

function UserProfileQuestion() {
  return (
    <div className="question w-[100%] py-2 px-1 flex gap-3 items-center border border-b-slate-500">
      <div className="question-icon">
        <FileQuestion size={30} />
      </div>
      <div className="question-votes">
        <div className="text-xs md:text-sm border border-slate-500 p-1 rounded">
          <span>10</span>
        </div>
      </div>
      <div className="question-text">
        <Link to="users/user" className="underline md:text-xl text-primarycb">
          How to create a selection rectangle with rotate, resize and move
          abilities?
        </Link>
      </div>
      <div className="question-time text-xs md:text-sm shrink-0">
        <span>2 hours ago</span>
      </div>
    </div>
  );
}

export default UserProfileQuestion;
