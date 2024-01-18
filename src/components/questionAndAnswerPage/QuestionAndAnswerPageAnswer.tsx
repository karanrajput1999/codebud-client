import { useEffect, useState } from "react";
import QuestionAndAnswersPageUserCard from "./QuestionAndAnswersPageUserCard";
import { answerType, commentType } from "@/types/types";
import axios from "axios";
import SERVER_URL from "@/serverUrl";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import QuestionAndAnswerPageAnswerComments from "./QuestionAndAnswerPageAnswerComments";

interface QuestionAndAnswerPageAnswerType {
  answer: answerType;
  setAnswers: (
    value: answerType[] | ((prev: answerType[]) => answerType[])
  ) => void;
}

function QuestionAndAnswerPageAnswer({
  answer,
  setAnswers,
}: QuestionAndAnswerPageAnswerType) {
  const [upvoteColor, setUpvoteColor] = useState<{ [key: string]: boolean }>(
    {}
  );
  // const [answerComments, setAnswerComments] = useState<{
  //   [key: string]: commentType[];
  // }>({});
  const [answerComments, setAnswerComments] = useState<{
    [key: string]: commentType[];
  }>({});
  const [downvoteColor, setDownvoteColor] = useState<{
    [key: string]: boolean;
  }>({});
  const [acceptAnswerIconColor, setAcceptAnswerIconColor] = useState(false);

  const { id } = useParams();

  const user = useSelector((state: RootState) => state.user.data);

  useEffect(() => {
    const alreadyUpvoted = answer?.upvote?.includes(user?.id ?? "");
    const alreadyDownvoted = answer?.downvote?.includes(user?.id ?? "");

    setAnswerComments((prev) => ({
      ...prev,
      [answer?.id]: answer?.comments,
    }));

    if (alreadyUpvoted) {
      setUpvoteColor((prev) => ({ ...prev, [answer?.id]: true }));
    }
    if (alreadyDownvoted) {
      setDownvoteColor((prev) => ({ ...prev, [answer?.id]: true }));
    }
  }, [answer]);

  function toggleUpvote(answerId: string) {
    axios
      .patch(
        `${SERVER_URL}/questions/${id}/answer/${answerId}/upvote`,
        {},
        { withCredentials: true }
      )
      .then(() => {
        // const clickedAnswer = answers.find((answer) => answer.id === answerId);
        // const clickedAnswerId = clickedAnswer?.id;
        const alreadyUpvoted = answer?.upvote?.includes(user?.id || "");
        const alreadyDownvoted = answer?.downvote?.includes(user?.id || "");

        const decreaseUpvoteCount = answer?.upvote?.filter(
          (userId) => userId !== user?.id
        );
        const decreaseDownvoteCount = answer?.downvote?.filter(
          (userId) => userId !== user?.id
        );

        const increaseUpvoteCount = [...answer?.upvote, user?.id];

        const increaseUpvoteCountInAnswer = {
          ...answer,
          upvote: increaseUpvoteCount.map((vote) => vote || ""), // Ensuring each value is a string removing the map function gives typescript error because upvote array expects string value but "increaseUpvoteCount" might give undefined,
        };

        if (alreadyUpvoted) {
          const decreaseUpvoteCountInAnswer = {
            ...answer,
            upvote: decreaseUpvoteCount,
          };

          // const updateAnswerInOriginalAnswersAlreadyUpvoted = answers?.map(
          //   (answer) => {
          //     if (answer.id === clickedAnswer?.id) {
          //       return decreaseUpvoteCountInAnswer;
          //     } else {
          //       return answer;
          //     }
          //   }
          // );

          // setAnswers((prev: answerType[]) => [
          //   ...prev,
          //   decreaseUpvoteCountInAnswer,
          // ]);

          // setAnswers((prev: answerType[]) => {
          //   const filteredAnswers = prev.filter(
          //     (otherAns) => otherAns.id !== answer.id
          //   );
          //   return [...filteredAnswers, decreaseUpvoteCountInAnswer];
          // });

          setAnswers((prev: answerType[]) => {
            return prev.map((otherAns) => {
              if (otherAns.id === answer.id) {
                return decreaseUpvoteCountInAnswer;
              } else {
                return otherAns;
              }
            });
          });

          setUpvoteColor((prev) => ({ ...prev, [answer?.id]: false }));

          return;
        }

        if (alreadyDownvoted) {
          const decreaseDownvoteCountAndIncreaseUpvoteInAnswer = {
            ...answer,
            upvote: increaseUpvoteCount.map((vote) => vote || ""), // Ensuring each value is a string removing the map function gives typescript error because upvote array expects string value but "increaseUpvoteCount" might give undefined,
            downvote: decreaseDownvoteCount,
          };

          // const updateAnswerInOriginalAnswersAlreadyDownvoted = answers?.map(
          //   (answer) => {
          //     if (answer.id === clickedAnswer?.id) {
          //       return decreaseDownvoteCountAndIncreaseUpvoteInAnswer;
          //     } else {
          //       return answer;
          //     }
          //   }
          // );

          // setAnswers((prev: answerType[]) => [
          //   ...prev,
          //   decreaseDownvoteCountAndIncreaseUpvoteInAnswer,
          // ]);
          // setAnswers((prev: answerType[]) => {
          //   const filteredAnswers = prev.filter(
          //     (otherAns) => otherAns.id !== answer.id
          //   );
          //   return [
          //     ...filteredAnswers,
          //     decreaseDownvoteCountAndIncreaseUpvoteInAnswer,
          //   ];
          // });
          setAnswers((prev: answerType[]) => {
            return prev.map((otherAns) => {
              if (otherAns.id === answer.id) {
                return decreaseDownvoteCountAndIncreaseUpvoteInAnswer;
              } else {
                return otherAns;
              }
            });
          });
          setUpvoteColor((prev) => ({ ...prev, [answer?.id]: true }));
          setDownvoteColor((prev) => ({ ...prev, [answer?.id]: false }));
          return;
        }

        // const updateAnswerInOriginalAnswersNotUpvoted = answers?.map(
        //   (answer) => {
        //     if (answer.id === clickedAnswer?.id) {
        //       return increaseUpvoteCountInAnswer;
        //     } else {
        //       return answer;
        //     }
        //   }
        // );

        // setAnswers((prev: answerType[]) => [
        //   ...prev,
        //   increaseUpvoteCountInAnswer,
        // ]);
        // setAnswers((prev: answerType[]) => {
        //   const filteredAnswers = prev.filter(
        //     (otherAns) => otherAns.id !== answer.id
        //   );
        //   return [...filteredAnswers, increaseUpvoteCountInAnswer];
        // });
        setAnswers((prev: answerType[]) => {
          return prev.map((otherAns) => {
            if (otherAns.id === answer.id) {
              return increaseUpvoteCountInAnswer;
            } else {
              return otherAns;
            }
          });
        });
        setUpvoteColor((prev) => ({ ...prev, [answer?.id]: true }));
      })
      .catch((error) => {
        console.log("error while trying to upvote answer", error);
      });
  }
  function toggleDownvote(answerId: string) {
    axios
      .patch(
        `${SERVER_URL}/questions/${id}/answer/${answerId}/downvote`,
        {},
        { withCredentials: true }
      )
      .then(() => {
        // const clickedAnswer = answers.find((answer) => answer.id === answerId);
        // const answer?.id = clickedAnswer?.id;
        const alreadyUpvoted = answer?.upvote?.includes(user?.id || "");
        const alreadyDownvoted = answer?.downvote?.includes(user?.id || "");

        const decreaseUpvoteCount = answer?.upvote?.filter(
          (userId) => userId !== user?.id
        );

        const decreaseDownvoteCount = answer?.downvote?.filter(
          (userId) => userId !== user?.id
        );

        const increaseDownvoteCount = [...answer?.downvote, user?.id];

        const decreaseUpvoteCountInAnswer = {
          ...answer,
          downvote: increaseDownvoteCount.map((vote) => vote || ""), // have given explaination above that why we are using map here,
        };

        if (alreadyUpvoted) {
          const decreaseUpvoteCountAndIncreaseDownvoteInAnswer = {
            ...answer,
            upvote: decreaseUpvoteCount.map((vote) => vote || ""), // have given explaination above that why we are using map here
            downvote: increaseDownvoteCount.map((vote) => vote || ""),
          };

          // const updateAnswerInOriginalAnswersAlreadyUpvoted = answers?.map(
          //   (answer) => {
          //     if (answer.id === clickedAnswer?.id) {
          //       return decreaseUpvoteCountAndIncreaseDownvoteInAnswer;
          //     } else {
          //       return answer;
          //     }
          //   }
          // );
          // setAnswers((prev: answerType[]) => [
          //   ...prev,
          //   decreaseUpvoteCountAndIncreaseDownvoteInAnswer,
          // ]);
          setAnswers((prev: answerType[]) => {
            return prev.map((otherAns) => {
              if (otherAns.id === answer.id) {
                return decreaseUpvoteCountAndIncreaseDownvoteInAnswer;
              } else {
                return otherAns;
              }
            });
          });

          setUpvoteColor((prev) => ({ ...prev, [answer?.id]: false }));
          setDownvoteColor((prev) => ({ ...prev, [answer?.id]: true }));
          return;
        }

        if (alreadyDownvoted) {
          const decreaseDownvoteCountInAnswer = {
            ...answer,
            downvote: decreaseDownvoteCount.map((vote) => vote || ""), // have given explaination above that why we are using map here,
          };

          // const updateAnswerInOriginalAnswersAlreadyDownvoted = answers?.map(
          //   (answer) => {
          //     if (answer.id === clickedAnswer?.id) {
          //       return decreaseDownvoteCountInAnswer;
          //     } else {
          //       return answer;
          //     }
          //   }
          // );

          // setAnswers((prev: answerType[]) => [
          //   ...prev,
          //   decreaseDownvoteCountInAnswer,
          // ]);

          setAnswers((prev: answerType[]) => {
            return prev.map((otherAns) => {
              if (otherAns.id === answer.id) {
                return decreaseDownvoteCountInAnswer;
              } else {
                return otherAns;
              }
            });
          });
          setDownvoteColor((prev) => ({ ...prev, [answer?.id]: false }));
          return;
        }

        // const updateAnswerInOriginalAnswersNotDownvoted = answers?.map(
        //   (answer) => {
        //     if (answer.id === clickedAnswer?.id) {
        //       return decreaseUpvoteCountInAnswer;
        //     } else {
        //       return answer;
        //     }
        //   }
        // );

        // setAnswers((prev: answerType[]) => [
        //   ...prev,
        //   decreaseUpvoteCountInAnswer,
        // ]);
        setAnswers((prev: answerType[]) => {
          return prev.map((otherAns) => {
            if (otherAns.id === answer.id) {
              return decreaseUpvoteCountInAnswer;
            } else {
              return otherAns;
            }
          });
        });
        setUpvoteColor((prev) => ({ ...prev, [answer?.id]: false }));
        setDownvoteColor((prev) => ({ ...prev, [answer?.id]: true }));
      })
      .catch((error) => {
        console.log("error while trying to upvote answer", error);
      });
  }

  // function toggleUpvotingColor() {
  //   setUpvoteColor(!upvoteColor); // HERE

  // if question had been already downvoted then remove that downvote (so that vote and downvote can not be triggered at the same time)
  //   if (downvoteColor) {
  //     // HERE
  //     setDownvoteColor(false);
  //   }
  // }
  // function toggleDownvotingColor() {
  //   setDownvoteColor(!downvoteColor); // HERE

  // if question had been already upvoted then remove that upvote (so that vote and downvote can not be triggered at the same time)
  //   if (upvoteColor) {
  //     // HERE
  //     setUpvoteColor(false);
  //   }
  // }
  function toggleAcceptAnswerColor() {
    setAcceptAnswerIconColor(!acceptAnswerIconColor);
  }

  function deleteAnswer(answerId: string) {
    axios
      .delete(`${SERVER_URL}/questions/${id}/answer/${answerId}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        // const remainingAnswers = answers.filter(
        //   (answer) => answer.id !== answerId
        // );

        setAnswers((prev) => {
          return prev.filter((otherAnswer) => otherAnswer.id !== answerId);
        });
      })
      .catch((error) => {
        console.log("error while delete answer", error);
      });
  }

  function deleteComment(commentId: string) {
    axios
      .delete(
        `${SERVER_URL}/questions/${id}/answer/${answer.id}/comment/${commentId}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        const remainingComments = answerComments[answer.id]?.filter(
          (comment) => comment.id !== res.data.id
        );

        setAnswerComments((prev) => ({
          ...prev,
          [answer?.id]: remainingComments,
        }));
      })
      .catch((error) => {
        console.log("error while deleting comment", error);
      });
  }

  return (
    <div>
      <div
        className="question-section flex gap-2 md:gap-5 pt-2"
        key={answer?.id}
      >
        <div className="vote-section flex flex-col gap-2 items-center pl-1 md:pl-3">
          <button
            className={`p-3 md:p-4 border border-primarycb rounded-[50%] ${
              upvoteColor[answer?.id] && "bg-primarycb" // HERE
            }`}
            onClick={() => toggleUpvote(answer?.id)}
          >
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              className={`${
                upvoteColor[answer?.id] && "fill-current text-white"
              }`} // HERE
            >
              <path d="M1 12h16L9 4l-8 8Z"></path>
            </svg>
          </button>

          <span className="text-xl md:text-2xl">
            {answer?.upvote?.length - answer?.downvote?.length}
          </span>

          <button
            className={`p-3 md:p-4 border border-primarycb rounded-[50%] ${
              downvoteColor[answer?.id] && "bg-primarycb" // HERE
            }`}
            onClick={() => toggleDownvote(answer?.id)}
          >
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              className={`${
                downvoteColor[answer?.id] && "fill-current text-white"
              }`} // HERE
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

        <div className="answer-main ql-snow w-full">
          <div className="pr-2">
            {/* <p className="answer-text flex flex-col gap-3"> */}
            <div
              className="pr-2 pl-0 ql-editor"
              dangerouslySetInnerHTML={{ __html: answer?.bodyText || "" }}
            />
            {/* </p> */}
          </div>

          <div className="qusetion-modification-user-card flex items-start justify-between mt-5 pr-2 ">
            <div className="flex gap-2">
              <Link
                to={`/questions/${id}/answer/${answer?.id}/edit`}
                className="text-primarycb"
              >
                Edit
              </Link>
              <button
                className="text-primarycb"
                onClick={() => deleteAnswer(answer?.id)}
              >
                Delete
              </button>
              <span>(show only when owner)</span>
            </div>
            <div className="user-card">
              <QuestionAndAnswersPageUserCard
                user={answer?.user}
                question={answer}
              />
            </div>
          </div>

          <QuestionAndAnswerPageAnswerComments
            answerId={answer?.id}
            answerComments={answerComments[answer?.id]}
            // @ts-ignore
            setAnswerComments={setAnswerComments}
            deleteComment={deleteComment}
          />
        </div>
      </div>
    </div>
  );
}
export default QuestionAndAnswerPageAnswer;
