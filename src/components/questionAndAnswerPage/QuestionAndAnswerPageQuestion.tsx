import { useEffect, useState } from "react";
import QuestionAndAnswerPageAnswers from "./QuestionAndAnswerPageAnswers";
import QuestionAndAnswerPageComments from "./QuestionAndAnswerPageComments";
import QuestionAndAnswersPageUserCard from "./QuestionAndAnswersPageUserCard";
import axios from "axios";
import { useParams } from "react-router-dom";
import SERVER_URL from "@/serverUrl";
import formattedTime from "@/utils/timeFormatter";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { questionType } from "@/types/types";

function QuestionAndAnswerPageQuestion() {
  const [upvoteIconColor, setUpvoteIconColor] = useState(false);
  const [downvoteIconColor, setDownvoteIconColor] = useState(false);
  const [question, setQuestion] = useState<questionType | null>(null);

  const user = useSelector((state: RootState) => state.user.data);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/questions/${id}`)
      .then((res) => {
        // console.log("fetched particular question", res);
        setQuestion(res.data);
      })
      .catch((error) => {
        console.log(
          "got error while fetching question on questionAndAnswer page",
          error
        );
      });
  }, []);

  console.log();

  function toggleUpvote() {
    setUpvoteIconColor(!upvoteIconColor);

    axios
      .patch(
        `${SERVER_URL}/questions/${id}/upvote`,
        {},
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log("error while trying to upvote", error);
      });

    // if question had been already downvoted then remove that downvote (so that vote and downvote can not be triggered at the same time)
    if (downvoteIconColor) {
      setDownvoteIconColor(false);
    }
  }
  function toggleDownvote() {
    setDownvoteIconColor(!downvoteIconColor);

    axios
      .patch(
        `${SERVER_URL}/questions/${id}/downvote`,
        {},
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log("error while trying to downvote", error);
      });

    // if question had been already upvoted then remove that upvote (so that vote and downvote can not be triggered at the same time)
    if (upvoteIconColor) {
      setUpvoteIconColor(false);
    }
  }

  return (
    <div>
      <div>
        <div className="question-header px-2 py-2  border-b border-slate-200">
          <h1 className="text-2xl md:text-3xl">
            {/* How to push an object while adding a property in one operation? */}
            {question?.title}
          </h1>
          <div className="flex gap-5 mt-2">
            <span className="text-xs">
              Asked {question?.createdAt && formattedTime(question?.createdAt)}
            </span>
            <span className="text-xs">Viewed {question?.views} times</span>
          </div>
        </div>
        <div className="question-section flex gap-2 md:gap-5 pt-2">
          <div className="vote-section flex flex-col gap-2 items-center pl-1 md:pl-3">
            <button
              className={`p-3 md:p-4 border border-primarycb rounded-[50%] ${
                question?.upvote?.includes(user?.id ?? "") && "bg-primarycb"
              }`}
              onClick={toggleUpvote}
            >
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                className={`${
                  question?.upvote?.includes(user?.id ?? "") &&
                  "fill-current text-white"
                }`}
              >
                <path d="M1 12h16L9 4l-8 8Z"></path>
              </svg>
            </button>

            <span className="text-xl md:text-2xl">
              {/* this solves an error where nan is being rendered as child of span and a error is being thrown in the console */}
              {question?.upvote && question?.downvote
                ? question?.upvote?.length - question?.downvote?.length
                : null}
            </span>

            <button
              className={`p-3 md:p-4 border border-primarycb rounded-[50%] ${
                question?.downvote?.includes(user?.id ?? "") && "bg-primarycb"
              }`}
              onClick={toggleDownvote}
            >
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                className={`${
                  question?.downvote?.includes(user?.id ?? "") &&
                  "fill-current text-white"
                }`}
              >
                <path d="M1 6h16l-8 8-8-8Z"></path>
              </svg>
            </button>
          </div>

          {/* ql-snow and ql-editor classNames are from to react quill so that it shows proper styles for code block */}
          <div className="question-main ql-snow">
            <div>
              <div
                className="pr-2 ql-editor"
                dangerouslySetInnerHTML={{ __html: question?.bodyText || "" }}
              />
            </div>
            {/* <p className="question-text flex flex-col gap-3">
                I have a pretty common (i guess) problem. Many of my projects
                utilize nodejs, some for business logic, others only for some
                building task.
                <span>
                  I need to have different runtime in different projects, one of
                  my electron apps requires node 7.10.0, a typical build suite
                  requires node 8.x.
                </span>{" "}
                <span>
                  Now i know - i can use sudo n 7.10.0 or sudo n latest to
                  switch the runtime globally on my computer (For those, who
                  dont know this - have a look at "n")
                </span>
                <span>
                  Anyway, IMO this is not so convenient (some times, i need to
                  rebuild all the modules after switching versions, often i
                  forget to switch and so on). Is there a way of telling node
                  which interpreter to use? Can i use a .npmrc file in a project
                  directory to force a specific nodejs version within that
                  subdirectory?
                </span>
                <span>
                  I searched exactly for this (npmrc node version) but was not
                  lucky enough to find something.
                </span>
              </p> */}
            <div className="question-tags-container text-xs flex gap-3 mt-5">
              {question?.tags?.map((tag, i) => (
                <span
                  className="px-2 py-[2px] rounded-sm   text-white  bg-primarycb "
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
            <QuestionAndAnswerPageComments />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-5 px-2">
        <span className=" text-xl md:text-2xl">1 Answer</span>
        <div>Sort Answers</div>
      </div>
      <QuestionAndAnswerPageAnswers />
    </div>
  );
}

export default QuestionAndAnswerPageQuestion;
