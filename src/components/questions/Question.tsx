import { User2 } from "lucide-react";
import { Link } from "react-router-dom";
import formattedTime from "@/utils/timeFormatter";
import { questionType } from "@/types/types";

export interface argumentQuestionType {
  question: questionType;
}

function Question({ question }: argumentQuestionType) {
  return (
    <div className="bg-questionbg w-[100%]">
      <div className="question-container flex pr-2 py-1 border-b border-primarycb">
        {/* questions left side */}
        <div className="question-stats flex flex-[25%] md:flex-[20%] justify-center items-center  text-sm md:text-base">
          <div className="flex flex-col gap-1">
            <span>5 Votes</span>
            <span>3 Answers</span>
            <span>{question?.views} views</span>
          </div>
        </div>
        {/* question right side */}
        <div className=" pl-2 flex-[75%] md:flex-[80%]">
          <div className="question-text">
            <Link to={`/questions/${question.id}`}>
              <span className="text-base/[1] md:text-xl ">
                {question.title}
              </span>
            </Link>
          </div>
          <div className="question-tags text-xs flex gap-3 mt-2">
            {question.tags.map((tag, i) => (
              <span
                className="px-2 py-[2px] rounded-sm   text-white  bg-primarycb"
                key={i}
              >
                {tag}
              </span>
            ))}
            {/* <span className="px-2 py-[2px] rounded-sm text-white  bg-primarycb  ">
              Javascript
            </span>
            <span className="px-2 py-[2px] rounded-sm text-white  bg-primarycb  ">
              CSS
            </span> */}
          </div>
          <div className="question-owner text-sm mt-3">
            <div className="flex items-center justify-end">
              <User2 />

              <span>
                {question.user.username} asked{" "}
                {formattedTime(question.createdAt)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
