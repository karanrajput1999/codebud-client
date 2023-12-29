import formattedTime from "@/utils/timeFormatter";
import { commentType } from "@/types/types";

interface QuestionAndAnswerPageCommentType {
  comments: commentType[];
}

function QuestionAndAnswerPageComment({
  comments,
}: QuestionAndAnswerPageCommentType) {
  return (
    <div>
      {comments?.map((comment, i) => (
        <div className="comment border-b border-slate-200" key={i}>
          <div className="text-sm">
            <span>{comment.commentText}</span> <span>- </span>
            <span className="text-primarycb">
              {comment?.user?.username} {formattedTime(comment?.createdAt)}
            </span>
          </div>
          <div className="comment-modification flex gap-2 text-sm mt-1">
            <button className="text-primarycb">Edit</button>
            <button className="text-primarycb">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuestionAndAnswerPageComment;
