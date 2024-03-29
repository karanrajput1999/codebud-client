import formattedTime from "@/utils/timeFormatter";
import { commentType } from "@/types/types";
import EditCommentForm from "../edit/editComment/EditCommentForm";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";

import * as z from "zod";

interface QuestionAndAnswerPageCommentType {
  comments: commentType[];
  setComments: Dispatch<SetStateAction<commentType[] | []>>;
  deleteComment: (commentId: string) => void;
  editCommentForm: boolean;
  setEditCommentForm: Dispatch<SetStateAction<{ [key: string]: boolean }>>;
  showEditCommentForm: (commentId: string) => void;
  cancelEditCommentForm: (commentId: string) => void;
}

function QuestionAndAnswerPageComment({
  comments,
  setComments,
  deleteComment,
  editCommentForm,
  setEditCommentForm,
  showEditCommentForm,
  cancelEditCommentForm,
}: QuestionAndAnswerPageCommentType) {
  // this form is for editing the comment
  // const [editCommentForm, setEditCommentForm] = useState({});

  const formSchema = z.object({
    commentText: z.string().min(15, "Comment must contain atleast 15 chars."),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      commentText: "",
    },
  });

  // this function is for when we click on edit button on comment it sets the inputs value to that comment's value
  function getEditCommentFormValue(
    commentId: string,
    editedCommentValue: string
  ) {
    form.setValue("commentText", editedCommentValue);
    setEditCommentForm((prev) => ({ ...prev, [commentId]: true }));
  }

  // function showEditCommentForm(commentId: string) {
  //   setEditCommentForm((prev) => ({ ...prev, [commentId]: !prev[commentId] }));
  // }

  // function cancelEditCommentForm(commentId: string) {
  //   setEditCommentForm((prev) => ({ ...prev, [commentId]: false }));
  // }

  return (
    <div>
      {comments?.map((comment, i) => (
        <div key={i}>
          {/* @ts-ignore */}
          {editCommentForm[comment?.id] ? (
            <EditCommentForm
              setComments={setComments}
              comments={comments}
              editCommentForm={editCommentForm}
              cancelEditCommentForm={() => cancelEditCommentForm(comment.id)}
              commentId={comment.id}
              form={form}
            />
          ) : (
            <div className="comment border-b border-slate-200">
              <div className="text-sm">
                <span>{comment.commentText}</span> <span>- </span>
                <span className="text-primarycb">
                  {comment?.user?.username} {formattedTime(comment?.createdAt)}
                </span>
              </div>
              <div className="comment-modification flex gap-2 text-sm mt-1">
                <button
                  className="text-primarycb"
                  onClick={() => {
                    showEditCommentForm(comment.id);
                    getEditCommentFormValue(comment.id, comment.commentText);
                  }}
                >
                  Edit
                </button>
                <button
                  className="text-primarycb"
                  onClick={() => deleteComment(comment.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default QuestionAndAnswerPageComment;
