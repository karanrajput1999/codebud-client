import Question from "./Question";
import { questionType } from "@/types/types";

export interface argumentQuestionArrayType {
  questions: questionType[] | null;
}

function Questions({ questions }: argumentQuestionArrayType) {
  return (
    <div className="questions-container">
      {questions?.map((question) => (
        <Question question={question} key={question.id} />
      ))}
    </div>
  );
}

export default Questions;
