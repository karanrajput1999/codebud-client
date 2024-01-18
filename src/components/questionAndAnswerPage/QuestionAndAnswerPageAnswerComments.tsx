import React, { useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import axios from "axios";
import SERVER_URL from "@/serverUrl";
import { useParams } from "react-router-dom";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import QuestionAndAnswerPageAnswerComment from "./QuestionAndAnswerPageAnswerComment";
import { commentType } from "@/types/types";

interface QuestionAndAnswerPageAnswerCommentsType {
  answerComments: commentType[];
  setAnswerComments: (
    val: boolean | ((prev: { [key: string]: boolean }) => void)
  ) => void;
  answerId: string;
  deleteComment: (commentId: string) => void;
}

function QuestionAndAnswerPageAnswerComments({
  answerComments,
  setAnswerComments,
  answerId,
  deleteComment,
}: QuestionAndAnswerPageAnswerCommentsType) {
  // this form is for editing the comment
  const [editCommentForm, setEditCommentForm] = useState<{
    [key: string]: boolean;
  }>({});
  const [toggleCommentForm, setToggleCommentForm] = useState(false);
  const { id } = useParams();

  const formSchema = z.object({
    commentText: z.string().min(15, "Comment must contain atleast 15 chars."),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      commentText: "",
    },
  });

  function showEditCommentForm(commentId: string) {
    setEditCommentForm((prev) => ({ ...prev, [commentId]: !prev[commentId] }));
  }

  function cancelEditCommentForm(commentId: string) {
    // console.log("this is updated form value", newValue);

    setEditCommentForm((prev) => ({ ...prev, [commentId]: false }));
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    form.setValue("commentText", "");

    axios
      .post(
        `${SERVER_URL}/questions/${id}/answer/${answerId}/comment`,
        { ...values, answerId },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        // setLatestComments(res.data.commentText, res.data.id);

        // this prevents an error if there is no comments on an answer.
        {
          answerComments
            ? setAnswerComments((prev: { [key: string]: boolean }) => ({
                ...prev,
                [answerId]: [...answerComments, res.data],
              }))
            : // @ts-ignore
              setAnswerComments({ [answerId]: [res.data] });
        }
      })
      .catch((error) => {
        console.log("error commenting", error);
      });
  }

  function showCommentForm() {
    setToggleCommentForm(!toggleCommentForm);
  }

  function cancelForm(e: React.MouseEvent) {
    e.preventDefault();
    setToggleCommentForm(false);
  }

  return (
    <div className="comments-container mt-5 border-t border-slate-200">
      <QuestionAndAnswerPageAnswerComment
        answerComments={answerComments}
        // @ts-ignore
        setAnswerComments={setAnswerComments}
        deleteComment={deleteComment}
        editCommentForm={editCommentForm}
        setEditCommentForm={setEditCommentForm}
        showEditCommentForm={showEditCommentForm}
        cancelEditCommentForm={cancelEditCommentForm}
        answerId={answerId}
      />

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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex gap-5 ">
              <FormField
                control={form.control}
                name="commentText"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Textarea
                        placeholder="Write your comment..."
                        {...field}
                      />
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
        </Form>
      </div>
    </div>
  );
}

export default QuestionAndAnswerPageAnswerComments;
