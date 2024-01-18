import formattedTime from "@/utils/timeFormatter";
import { commentType } from "@/types/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import EditAnswerCommentForm from "../edit/editAnswerComment/EditAnswerCommentForm";
import { Dispatch, SetStateAction } from "react";

interface QuestionAndAnswerPageAnswerCommentType {
  answerComments: commentType[];
  editCommentForm: { [key: string]: boolean };
  setEditCommentForm: Dispatch<SetStateAction<{ [key: string]: boolean }>>;
  showEditCommentForm: (commentId: string) => void;
  cancelEditCommentForm: (commentId: string) => void;
  deleteComment: (commentId: string) => void;
  setAnswerComments: SetStateAction<commentType[]>;
  answerId: string;
}

function QuestionAndAnswerPageAnswerComment({
  answerComments,
  editCommentForm,
  setEditCommentForm,
  showEditCommentForm,
  cancelEditCommentForm,
  deleteComment,
  setAnswerComments,
  answerId,
}: QuestionAndAnswerPageAnswerCommentType) {
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
    setEditCommentForm((prev: { [key: string]: boolean }) => ({
      ...prev,
      [commentId]: true,
    }));
  }

  // function showEditCommentForm(commentId: string) {
  //   setEditCommentForm((prev) => ({ ...prev, [commentId]: !prev[commentId] }));
  // }

  // function cancelEditCommentForm(commentId: string) {
  //   setEditCommentForm((prev) => ({ ...prev, [commentId]: false }));
  // }

  // console.log("comments in answer main component", answerComments);

  return (
    <div>
      {answerComments?.map((comment, i) => (
        <div key={i}>
          {editCommentForm[comment?.id] ? (
            <EditAnswerCommentForm
              // setComments={setComments}
              // comments={comments}
              editCommentForm={editCommentForm}
              cancelEditCommentForm={() => cancelEditCommentForm(comment.id)}
              commentId={comment.id}
              answerComments={answerComments}
              setAnswerComments={setAnswerComments}
              answerId={answerId}
              formSchema={formSchema}
              form={form}
            />
          ) : (
            <div className="comment border-b border-slate-200">
              <div className="text-sm">
                <span>{comment?.commentText}</span> <span>- </span>
                <span className="text-primarycb">
                  {comment?.user?.username} {formattedTime(comment?.createdAt)}
                </span>
              </div>
              <div className="comment-modification flex gap-2 text-sm mt-1">
                <button
                  className="text-primarycb"
                  onClick={() => {
                    showEditCommentForm(comment.id);
                    getEditCommentFormValue(comment.id, comment?.commentText);
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

export default QuestionAndAnswerPageAnswerComment;
