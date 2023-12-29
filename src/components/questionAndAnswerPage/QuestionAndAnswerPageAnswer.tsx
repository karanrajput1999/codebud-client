import { useState } from "react";
// import QuestionAndAnswerPageComments from "./QuestionAndAnswerPageComments";
import QuestionAndAnswersPageUserCard from "./QuestionAndAnswersPageUserCard";

function QuestionAndAnswerPageAnswer() {
  const [upvoteIconColor, setUpvoteIconColor] = useState(false);
  const [downvoteIconColor, setDownvoteIconColor] = useState(false);
  const [acceptAnswerIconColor, setAcceptAnswerIconColor] = useState(false);

  function toggleUpvotingColor() {
    setUpvoteIconColor(!upvoteIconColor);

    // if question had been already downvoted then remove that downvote (so that vote and downvote can not be triggered at the same time)
    if (downvoteIconColor) {
      setDownvoteIconColor(false);
    }
  }
  function toggleDownvotingColor() {
    setDownvoteIconColor(!downvoteIconColor);

    // if question had been already upvoted then remove that upvote (so that vote and downvote can not be triggered at the same time)
    if (upvoteIconColor) {
      setUpvoteIconColor(false);
    }
  }
  function toggleAcceptAnswerColor() {
    setAcceptAnswerIconColor(!acceptAnswerIconColor);
  }

  return (
    <div>
      <div className="question-section flex gap-2 md:gap-5 pt-2">
        <div className="vote-section flex flex-col gap-2 items-center pl-1 md:pl-3">
          <button
            className={`p-3 md:p-4 border border-primarycb rounded-[50%] ${
              upvoteIconColor && "bg-primarycb"
            }`}
            onClick={toggleUpvotingColor}
          >
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              className={`${upvoteIconColor && "fill-current text-white"}`}
            >
              <path d="M1 12h16L9 4l-8 8Z"></path>
            </svg>
          </button>

          <span className="text-xl md:text-2xl">15</span>

          <button
            className={`p-3 md:p-4 border border-primarycb rounded-[50%] ${
              downvoteIconColor && "bg-primarycb"
            }`}
            onClick={toggleDownvotingColor}
          >
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              className={`${downvoteIconColor && "fill-current text-white"}`}
            >
              <path d="M1 6h16l-8 8-8-8Z"></path>
            </svg>
          </button>

          <button onClick={toggleAcceptAnswerColor}>
            {" "}
            {/*Only show to question owner and after accepting a answer use "text-green-600" color*/}
            <svg
              aria-hidden="true"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              className={`fill-current ${
                acceptAnswerIconColor ? "text-green-600" : "text-gray-300"
              }`}
            >
              <path d="m6 14 8 8L30 6v8L14 30l-8-8v-8Z"></path>
            </svg>
          </button>
        </div>

        <div className="question-main ">
          <div className="pr-2">
            <p className="question-text flex flex-col gap-3">
              I have a pretty common (i guess) problem. Many of my projects
              utilize nodejs, some for business logic, others only for some
              building task.
              <span>
                I need to have different runtime in different projects, one of
                my electron apps requires node 7.10.0, a typical build suite
                requires node 8.x.
              </span>{" "}
              <span>
                Now i know - i can use sudo n 7.10.0 or sudo n latest to switch
                the runtime globally on my computer (For those, who dont know
                this - have a look at "n")
              </span>
              <span>
                Anyway, IMO this is not so convenient (some times, i need to
                rebuild all the modules after switching versions, often i forget
                to switch and so on). Is there a way of telling node which
                interpreter to use? Can i use a .npmrc file in a project
                directory to force a specific nodejs version within that
                subdirectory?
              </span>
              <span>
                I searched exactly for this (npmrc node version) but was not
                lucky enough to find something.
              </span>
            </p>
          </div>

          <div className="qusetion-modification-user-card flex items-start justify-between mt-5 pr-2 ">
            <div className="flex gap-2">
              <button className="text-primarycb">Edit</button>
              <button className="text-primarycb">Delete</button>
              <span>(show only when owner)</span>
            </div>
            <div className="user-card">
              <QuestionAndAnswersPageUserCard />
            </div>
          </div>
          {/* comments to be rendered later */}
          {/* <QuestionAndAnswerPageComments /> */}
        </div>
      </div>
    </div>
  );
}
export default QuestionAndAnswerPageAnswer;
