import HomepageNavbar from "../homagepageNavbar/HomepageNavbar";
import HomepageSidebar from "../homepageSidebar/HomepageSidebar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import QuestionEditor from "./QuestionEditor";

function QuestionForm() {
  return (
    <main className="flex" style={{ height: "calc(100vh - 4rem)" }}>
      <HomepageNavbar />
      <section className="home-body flex-[50%]  border border-x-primarycb">
        <div className="question-heading text-2xl px-4 pt-5 font-bold">
          <h1>Write your question</h1>
        </div>

        <div className="form-container px-5 mt-5">
          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="question-title" className="font-bold">
                Title
              </label>
              <Input
                type="text"
                id="question-title"
                name="question-title"
                placeholder="eg: How to center a div?"
              />
            </div>
            {/* Question editor */}
            <div>
              <label htmlFor="question-body" className="font-bold">
                Body
              </label>
              <QuestionEditor />
            </div>
            <div>
              <label htmlFor="question-title" className="font-bold">
                Tags
              </label>
              <Input
                type="text"
                id="question-title"
                name="question-title"
                placeholder="eg: javascript, react.js, node.js"
              />
            </div>
            <Button type="submit" className="bg-primarycb">
              Post your question
            </Button>
          </form>
        </div>
      </section>

      <HomepageSidebar />
    </main>
  );
}

export default QuestionForm;
