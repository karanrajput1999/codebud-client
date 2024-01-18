import { answerType, questionType, userType } from "@/types/types";
import avatar from "../../assets/avatars/boy-6.png";
import reputation from "../../assets/reputation.png";
import formattedTime from "@/utils/timeFormatter";

interface QuestionAndAnswersPageUserCardType {
  user: userType | undefined;
  question: questionType | answerType | null;
}

function QuestionAndAnswersPageUserCard({
  user,
  question,
}: QuestionAndAnswersPageUserCardType) {
  return (
    <div className="user-card p-1 flex flex-col gap-1 border border-black w-40 rounded-sm ">
      <div className="text-xs text-center">
        <span>Asked {formattedTime(question?.createdAt)}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="user-avatar h-12 w-12">
          <img src={avatar} alt="user-avatar" />
        </div>
        <div className="user-info">
          <span>{user?.username}</span>
          <div className="flex gap-1">
            <img src={reputation} alt="reputation-icon" className="h-4 w-4" />
            <span className="text-xs text-slate-600">{user?.reputation}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionAndAnswersPageUserCard;
