import { useEffect, useState } from "react";
import QuestionAndAnswerPageAnswers from "./QuestionAndAnswerPageAnswers";
import QuestionAndAnswerPageComments from "./QuestionAndAnswerPageComments";
import QuestionAndAnswersPageUserCard from "./QuestionAndAnswersPageUserCard";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import SERVER_URL from "@/serverUrl";
import formattedTime from "@/utils/timeFormatter";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { commentType, questionType } from "@/types/types";
import { useNavigate } from "react-router-dom";
import moment from "moment";

function QuestionAndAnswerPageQuestion() {
  const [upvoteColor, setUpvoteColor] = useState(false);
  const [downvoteColor, setDownvoteColor] = useState(false);
  const [question, setQuestion] = useState<questionType | null>(null);
  const [comments, setComments] = useState<commentType[] | []>([]);

  const user = useSelector((state: RootState) => state.user.data);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${SERVER_URL}/questions/${id}`)
      .then((res) => {
        setQuestion(res.data);
        setComments(res.data.comments);

        if (res.data?.upvote?.includes(user?.id)) {
          setUpvoteColor(true);
        }
        if (res.data?.downvote?.includes(user?.id)) {
          setDownvoteColor(true);
        }
      })
      .catch((error) => {
        console.log(
          "got error while fetching question on questionAndAnswer page",
          error
        );
      });
  }, []);

  // this function is for instant comment update so that user do not have to refresh to see his comment
  function setLatestComments(commentText: string, latestCommentId: string) {
    const momentTime = moment();

    const comment = {
      id: latestCommentId,
      commentText,
      user: { id: user?.id, username: user?.username },
      createdAt: momentTime.toDate(), // getting current time
    };

    // @ts-ignore
    setComments([...comments, comment]); // ignored the typscript error because couldn't solve it :)
  }

  function deleteComment(commentId: string) {
    console.log("comment delete function called", commentId);
    axios
      .delete(`${SERVER_URL}/questions/${id}/comment/${commentId}`, {
        withCredentials: true,
      })
      .then((res) => {
        const remainingComments = comments?.filter(
          (comment) => comment.id !== res.data.id
        );

        setComments([...remainingComments]);
      })
      .catch((error) => {
        console.log("error while deleting comment", error);
      });
  }

  function toggleUpvote() {
    axios
      .patch(
        `${SERVER_URL}/questions/${id}/upvote`,
        {},
        { withCredentials: true }
      )
      .then(() => {
        const alreadyUpvoted = question?.upvote?.includes(user?.id ?? "");
        const alreadyDownvoted = question?.downvote?.includes(user?.id ?? "");

        const updateIncreasedUpvoteCount = question?.upvote && [
          ...question?.upvote,
          user?.id,
        ];
        const updateDecreasedUpvoteCount = question?.upvote?.filter(
          (userId) => userId !== user?.id
        );
        const updateDecreasedDownvoteCount = question?.downvote?.filter(
          (userId) => userId !== user?.id
        );

        if (alreadyUpvoted) {
          setQuestion({
            ...question!,
            upvote: updateDecreasedUpvoteCount || [],
          });

          setUpvoteColor(false);
          return;
        }

        if (alreadyDownvoted) {
          setQuestion({
            ...question!,
            downvote: updateDecreasedDownvoteCount || [],
            upvote: updateIncreasedUpvoteCount || [],
          });
          setUpvoteColor(true);
          setDownvoteColor(false);
          return;
        }

        setQuestion({
          ...question!,
          upvote: updateIncreasedUpvoteCount || [],
        });
        setUpvoteColor(true);
      })
      .catch((error) => {
        console.log("error while trying to upvote", error);
      });
  }

  function toggleDownvote() {
    axios
      .patch(
        `${SERVER_URL}/questions/${id}/downvote`,
        {},
        { withCredentials: true }
      )
      .then(() => {
        const alreadyDownvoted = question?.downvote?.includes(user?.id ?? "");
        const alreadyUpvoted = question?.upvote?.includes(user?.id ?? "");

        const updateDecreasedUpvoteCount = question?.upvote?.filter(
          (userId) => userId !== user?.id
        );

        const updateIncreasedDownvoteCount = question?.downvote && [
          ...question?.downvote,
          user?.id,
        ];

        const updateDecreasedDownvoteCount = question?.downvote?.filter(
          (userId) => userId !== user?.id
        );

        if (alreadyUpvoted) {
          setQuestion({
            ...question!,
            upvote: updateDecreasedUpvoteCount || [],
            downvote: updateIncreasedDownvoteCount || [],
          });

          setUpvoteColor(false);
          setDownvoteColor(true);

          return;
        }

        if (alreadyDownvoted) {
          setQuestion({
            ...question!,
            downvote: updateDecreasedDownvoteCount || [],
          });
          setDownvoteColor(false);
          return;
        }

        setQuestion({
          ...question!,
          downvote: updateIncreasedDownvoteCount || [],
        });
        setDownvoteColor(true);
      })
      .catch((error) => {
        console.log("error while trying to downvote", error);
      });
  }

  function deleteQuestion() {
    axios
      .delete(`${SERVER_URL}/questions/${id}`, { withCredentials: true })
      .then((res) => {
        console.log(res);
        navigate("/homepage");
      })
      .catch((error) => {
        console.log("error while delete question", error);
      });
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
                upvoteColor && "bg-primarycb"
              }`}
              onClick={toggleUpvote}
            >
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                className={`${upvoteColor && "fill-current text-white"}`}
              >
                <path d="M1 12h16L9 4l-8 8Z"></path>
              </svg>
            </button>

            <span className="text-xl md:text-2xl">
              {/* this solves an error where NAN is being rendered as child of span and a error is being thrown in the console */}
              {question?.upvote && question?.downvote
                ? question?.upvote?.length - question?.downvote?.length
                : null}
            </span>

            <button
              className={`p-3 md:p-4 border border-primarycb rounded-[50%] ${
                downvoteColor && "bg-primarycb"
              }`}
              onClick={toggleDownvote}
            >
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                className={`${downvoteColor && "fill-current text-white"}`}
              >
                <path d="M1 6h16l-8 8-8-8Z"></path>
              </svg>
            </button>
          </div>

          {/* ql-snow and ql-editor classNames are from to react quill so that it shows proper styles for code block */}
          <div className="question-main ql-snow w-full">
            <div>
              <div
                className="pr-2 pl-0 ql-editor"
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
                <Link to={`/questions/${id}/edit`} className="text-primarycb">
                  Edit
                </Link>
                <button className="text-primarycb" onClick={deleteQuestion}>
                  Delete
                </button>
                <span>(show only when owner)</span>
              </div>
              <div className="user-card">
                <QuestionAndAnswersPageUserCard />
              </div>
            </div>
            <QuestionAndAnswerPageComments
              comments={comments}
              setLatestComments={setLatestComments}
              deleteComment={deleteComment}
            />
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
