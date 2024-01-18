import { SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import SERVER_URL from "@/serverUrl";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";
import { commentType } from "@/types/types";
import * as z from "zod";
import { UseFormReturn } from "react-hook-form";

interface EditCommentFormType {
  editCommentForm: { [key: string]: boolean };
  cancelEditCommentForm: (commentId: string) => void;
  commentId: string;
  // editToggleCommentFormValue: string;
  formSchema: z.ZodObject<
    { commentText: z.ZodString },
    "strip",
    z.ZodTypeAny,
    { commentText: string },
    { commentText: string }
  >;
  form: UseFormReturn<{ commentText: string }, any, undefined>;
  // comments: commentType[];
  setAnswerComments: SetStateAction<commentType[]>;
  answerComments: commentType[];
  answerId: string;
}

function EditAnswerCommentForm({
  editCommentForm,
  cancelEditCommentForm,
  form,
  commentId,
  answerComments,
  answerId,
  setAnswerComments,
}: EditCommentFormType) {
  const { id } = useParams();

  function onSubmit(values: { commentText: string }) {
    // console.log("let see if new value gets updated here", newValue);

    // form.setValue("commentText", newValue);
    cancelEditCommentForm(commentId);

    axios
      .patch(
        `${SERVER_URL}/questions/${id}/answer/${answerId}/comment/${commentId}`,
        values,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        const modifiedComments = answerComments?.map((comment) => {
          if (comment.id === commentId) {
            comment.commentText = res.data.commentText;
            return comment;
          } else {
            return comment;
          }
        });

        // modify comments with latest changes for instant changes
        // @ts-ignore
        setAnswerComments((prev: { answerId: string }) => ({
          ...prev,
          answerId: modifiedComments,
        }));
      })
      .catch((error) => {
        console.log("error commenting", error);
      });
  }

  return (
    <div
      className={`comment-form mt-2 ${editCommentForm ? "block" : "hidden"}`}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-5 ">
            <FormField
              control={form.control}
              name="commentText"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Textarea placeholder="Write your comment..." {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-2 pr-2">
              <Button
                type="submit"
                className="text-white bg-primarycb hover:bg-primarycb hover:text-white"
              >
                Update Comment
              </Button>
              <Button
                className="bg-white border border-red-600 text-red-600 hover:text-white hover:bg-red-600"
                onClick={() => cancelEditCommentForm(commentId)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default EditAnswerCommentForm;
