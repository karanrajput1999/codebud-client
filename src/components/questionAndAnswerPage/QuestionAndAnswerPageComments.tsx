import QuestionAndAnswerPageComment from "./QuestionAndAnswerPageComment";
import { useState } from "react";
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

import { commentType } from "@/types/types";

interface QuestionAndAnswerPageCommentType {
  comments: commentType[];
}

function QuestionAndAnswerPageComments({
  comments,
}: QuestionAndAnswerPageCommentType) {
  const [toggleCommentForm, setToggleCommentForm] = useState(false);
  const { id } = useParams();

  const formSchema = z.object({
    commentText: z.string().min(20),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      commentText: "",
    },
  });

  function postComment() {}

  function onSubmit(values: z.infer<typeof formSchema>) {
    axios
      .post(`${SERVER_URL}/questions/${id}/comment`, values, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("posted comment", res);
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
      <QuestionAndAnswerPageComment comments={comments} />

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
                  onClick={postComment}
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

export default QuestionAndAnswerPageComments;
