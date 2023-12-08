import { useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

function QuestionAndAnswerPageComment() {
  const [toggleCommentForm, setToggleCommentForm] = useState(false);

  function showCommentForm() {
    setToggleCommentForm(!toggleCommentForm);
  }

  function cancelForm(e) {
    e.preventDefault();
    setToggleCommentForm(false);
  }

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
      <div
        className={`add-comment text-sm text-slate-500 py-2 border-b border-slate-200 ${
          toggleCommentForm ? "hidden" : "block"
        }`}
      >
        <button onClick={showCommentForm}>Add comment</button>
      </div>
      <div
        className={`comment-form mt-2 ${
          toggleCommentForm ? "block" : "hidden"
        }`}
      >
        <form>
          <div className="flex gap-5">
            <Textarea />

            <div className="flex flex-col gap-2 pr-2">
              <Button
                type="submit"
                className="text-white bg-primarycb hover:bg-primarycb hover:text-white"
              >
                Comment
              </Button>
              <Button
                className="bg-white border border-red-600 text-red-600 hover:text-white hover:bg-red-600"
                onClick={cancelForm}
              >
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuestionAndAnswerPageComment;
