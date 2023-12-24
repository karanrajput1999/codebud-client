import { User2 } from "lucide-react";
import { Link } from "react-router-dom";

function Question() {
  return (
    <div className="bg-questionbg w-[100%]">
      <div className="question-container flex pr-2 py-1 border-b border-primarycb">
        {/* questions left side */}
        <div className="question-stats flex flex-[25%] md:flex-[20%] justify-center items-center  text-sm md:text-base">
          <div className="flex flex-col gap-1">
            <span>5 Votes</span>
            <span>3 Answers</span>
            <span>23 Views</span>
          </div>
        </div>
        {/* question right side */}
        <div className=" pl-2 flex-[75%] md:flex-[80%]">
          <div className="question-text">
            <Link to="/questions/question">
              <span className="text-base/[1] md:text-xl ">
                Having issue while making navigation bar responsive.
              </span>
            </Link>
          </div>
          <div className="question-tags text-xs flex gap-3 mt-2">
            <span className="px-2 py-[2px] rounded-sm   text-white  bg-primarycb ">
              HTML
            </span>
            <span className="px-2 py-[2px] rounded-sm text-white  bg-primarycb  ">
              Javascript
            </span>
            <span className="px-2 py-[2px] rounded-sm text-white  bg-primarycb  ">
              CSS
            </span>
          </div>
          <div className="question-owner text-sm mt-3">
            <div className="flex items-center justify-end">
              <User2 />

              <span>someone asked 17 mins ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
