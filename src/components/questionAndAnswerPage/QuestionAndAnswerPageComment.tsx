import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

function QuestionAndAnswerPageComment() {
  return (
    <div>
      <div className="comment border-b border-slate-200">
        <div className="text-sm">
          <span>
            Where are you stuck? The error message seems quite clear: you put a
            keyword argument name= first, a positional argument args second.
            This is illegal syntax.{" "}
          </span>{" "}
          <span>- </span>
          <span className="text-primarycb">Selmon Bhai 12 Sept 2023</span>
        </div>
        <div className="comment-modification flex gap-2 text-sm mt-1">
          <button className="text-primarycb">Edit</button>
          <button className="text-primarycb">Delete</button>
        </div>
      </div>{" "}
      <div className="add-comment text-sm text-slate-500 py-2 border-b border-slate-200">
        <button>Add comment</button>
      </div>
      <div className="comment-form hidden">
        <form>
          <Textarea />
          <Button>Comment</Button>
        </form>
      </div>
    </div>
  );
}

export default QuestionAndAnswerPageComment;
