import { RootState } from "@/app/store";
import HomepageNavbar from "@/components/homagepageNavbar/HomepageNavbar";
import HomepageSidebar from "@/components/homepageSidebar/HomepageSidebar";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import SERVER_URL from "@/serverUrl";
import axios from "axios";
import ReactQuill from "react-quill";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

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
    message: "Your problem explanation must be atleast 40 chars long.",
  }),
});

function EditAnswer() {
  const questions = useSelector(
    (state: RootState) => state.fetchQuestions.data
  );

  const { id, answerId } = useParams();

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bodyText: "",
    },
  });

  const question = questions?.find((ques) => {
    return ques.id === id;
  });

  const answer = question?.answers?.find((answer) => {
    return answer.id === answerId;
  });

  // set the form input values to answer values
  useEffect(() => {
    form.setValue("bodyText", answer?.bodyText || "");
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    axios
      .patch(`${SERVER_URL}/questions/${id}/answer/${answerId}/edit`, values, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("edit answer form response", res);
        // go to the previous page (which was the question page we were on)
        navigate(-1);
      })
      .catch((error) => {
        console.log("got error while updating question", error);
      });
  }

  return (
    <main className="flex" style={{ height: "calc(100vh - 4rem)" }}>
      <HomepageNavbar />
      <section className="home-body flex-[50%]  border border-x-primarycb">
        <div className="question-heading text-2xl sm:text-3xl md:text-4xl px-4 pt-5 font-bold">
          <h1>Edit your answer</h1>
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
                  Update your answer
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </section>

      <HomepageSidebar />
    </main>
  );
}

export default EditAnswer;
