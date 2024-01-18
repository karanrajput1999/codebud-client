import React from "react";
import { answerType } from "@/types/types";
import QuestionAndAnswerPageAnswer from "./QuestionAndAnswerPageAnswer";

interface QuestionAndAnswerPageAnswersType {
  answers: answerType[];
  setAnswers: React.Dispatch<React.SetStateAction<answerType[]>>;
}

function QuestionAndAnswerPageAnswers({
  answers,
  setAnswers,
}: QuestionAndAnswerPageAnswersType) {
  return (
    <div className="mt-5">
      {answers?.map((answer, i) => (
        <QuestionAndAnswerPageAnswer
          answer={answer}
          setAnswers={setAnswers}
          key={i}
        />
      ))}
    </div>
  );
}

export default QuestionAndAnswerPageAnswers;
