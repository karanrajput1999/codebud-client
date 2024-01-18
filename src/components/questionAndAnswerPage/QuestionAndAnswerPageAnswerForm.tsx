import React from "react";
import { Button } from "../ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import SERVER_URL from "@/serverUrl";
import { useParams } from "react-router-dom";
import { answerType } from "@/types/types";

const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formSchema = z.object({
  bodyText: z.string().min(40, {
    message: "Your answer must be atleast 40 chars long.",
  }),
});

interface QuestionAndAnswerPageAnswerFormType {
  answers: answerType[];
  setAnswers: React.Dispatch<React.SetStateAction<answerType[]>>;
}

function QuestionAndAnswerPageAnswerForm({
  answers,
  setAnswers,
}: QuestionAndAnswerPageAnswerFormType) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bodyText: "",
    },
  });

  const { id } = useParams();

  function onSubmit(values: z.infer<typeof formSchema>) {
    axios
      .post(`${SERVER_URL}/questions/${id}/answer`, values, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("answer form response", res);
        setAnswers([...answers, res.data]);
        //   resetting error so that it doesn't throw error after answer field becomes empty.
        form.reset({ bodyText: "" });
      })
      .catch((error) => {
        console.log("got error while answering the question", error);
      });
  }

  return (
    <main className="flex pb-5">
      <section className="home-body flex-[50%]">
        <div className="answer-heading text-2xl sm:text-2xl md:text-2xl px-4 pt-5 ">
          <h3>Answer this question</h3>
        </div>

        <div className="form-container px-5 mt-5">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="bodyText"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Body</FormLabel>
                    <FormControl>
                      <ReactQuill theme="snow" modules={modules} {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end">
                <Button type="submit" className="bg-primarycb">
                  Post your answer
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </section>
    </main>
  );
}

export default QuestionAndAnswerPageAnswerForm;
