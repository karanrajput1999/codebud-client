import HomepageNavbar from "../../homagepageNavbar/HomepageNavbar";
import HomepageSidebar from "../../homepageSidebar/HomepageSidebar";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
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
import { useEffect, useState } from "react";
import EditQuestionTagInput from "./EditQuestionTagInput";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
  title: z
    .string()
    .min(20, { message: "Title must be atleast 20 chars long." }),
  bodyText: z.string().min(40, {
    message: "Your problem explanation must be atleast 40 chars long.",
  }),
});

function EditQuestionForm() {
  // these tags are passed to tag input
  const [tags, setTags] = useState<string[]>([]);

  const { id } = useParams();

  const navigate = useNavigate();

  const questions = useSelector(
    (state: RootState) => state.fetchQuestions.data
  );

  const editQuestion = questions?.find((question) => question.id === id);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      bodyText: "",
    },
  });

  // set the form input values to question values
  useEffect(() => {
    form.setValue("title", editQuestion?.title || "");
    form.setValue("bodyText", editQuestion?.bodyText || "");
    setTags(editQuestion?.tags || []);
  }, []);

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (tags.length === 0) {
      return;
    }
    axios
      .patch(
        `${SERVER_URL}/questions/${id}/edit`,
        { ...values, tags },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log("edit questions form response", res);
        // go to the previous (which was the question page we were editing)
        navigate(-1);
      })
      .catch((error) => {
        console.log("got error while creating question", error);
      });
  }

  return (
    <main className="flex" style={{ height: "calc(100vh - 4rem)" }}>
      <HomepageNavbar />
      <section className="home-body flex-[50%]  border border-x-primarycb">
        <div className="question-heading text-2xl sm:text-3xl md:text-4xl px-4 pt-5 font-bold">
          <h1>Edit your question</h1>
        </div>

        <div className="form-container px-5 mt-5">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-2">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Title</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="How to center a div?"
                          {...field}
                          id="question-title"
                          name="question-title"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              {/* Question editor */}
              {/* <div className="flex flex-col gap-2">
                <label htmlFor="question-body" className="font-bold">
                  Body
                </label>
                <QuestionEditor />
              </div> */}

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
              <div className="tag-input">
                <EditQuestionTagInput tags={tags} setTags={setTags} />
                {tags.length === 0 ? (
                  <p className="text-sm font-medium ">
                    You must provide atleast 1 tag (Press space to create a
                    tag).
                  </p>
                ) : null}
              </div>

              <div className="flex justify-end">
                <Button type="submit" className="bg-primarycb">
                  Update your question
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

export default EditQuestionForm;

{
  /* <form className="flex flex-col gap-4">
<div className="flex flex-col gap-2">
  <label htmlFor="question-title" className="font-bold">
    Title
  </label>
  <Input
    type="text"
    id="question-title"
    name="question-title"
    placeholder="eg: How to center a div?"
  />
</div> */
}
{
  /* Question editor */
}
{
  /* <div className="flex flex-col gap-2">
  <label htmlFor="question-body" className="font-bold">
    Body
  </label>
  <QuestionEditor />
</div>
<QuestionTagInput />
<div className="flex justify-end">
  <Button type="submit" className="bg-primarycb">
    Post your question
  </Button>
</div>
</form> */
}
