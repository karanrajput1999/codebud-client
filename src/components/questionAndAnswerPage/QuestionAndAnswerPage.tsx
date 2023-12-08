import HomepageNavbar from "../homagepageNavbar/HomepageNavbar";
import HomepageSidebar from "../homepageSidebar/HomepageSidebar";
import { Button } from "../ui/button";
import QuestionAndAnswersPageUserCard from "./QuestionAndAnswersPageUserCard";
import { Textarea } from "../ui/textarea";

function QuestionAndAnswerPage() {
  return (
    <main className="flex" style={{ height: "calc(100vh - 4rem)" }}>
      <HomepageNavbar />
      <section className="flex-[50%] border border-x-primarycb ">
        <div className="question-header px-2 py-2  border-b border-slate-200">
          <h1 className="text-2xl md:text-3xl">
            How to push an object while adding a property in one operation?
          </h1>
          <div className="flex gap-5 mt-2">
            <span className="text-xs">Asked 2 hours ago</span>
            <span className="text-xs">Viewed 105 times</span>
          </div>
        </div>
        <div className="question-section flex gap-2 md:gap-5 pt-2">
          <div className="vote-section flex flex-col gap-2 items-center pl-1 md:pl-3">
            <button className="p-3 md:p-4 border border-primarycb rounded-[50%]">
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M1 12h16L9 4l-8 8Z"></path>
              </svg>
            </button>
            <span className="text-xl md:text-2xl">15</span>
            <button className="p-3 md:p-4 border border-primarycb rounded-[50%]">
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path d="M1 6h16l-8 8-8-8Z"></path>
              </svg>
            </button>
          </div>

          <div className="question-main ">
            <div className="pr-2">
              <p className="question-text flex flex-col gap-3">
                I have a pretty common (i guess) problem. Many of my projects
                utilize nodejs, some for business logic, others only for some
                building task.
                <span>
                  I need to have different runtime in different projects, one of
                  my electron apps requires node 7.10.0, a typical build suite
                  requires node 8.x.
                </span>{" "}
                <span>
                  Now i know - i can use sudo n 7.10.0 or sudo n latest to
                  switch the runtime globally on my computer (For those, who
                  dont know this - have a look at "n")
                </span>
                <span>
                  Anyway, IMO this is not so convenient (some times, i need to
                  rebuild all the modules after switching versions, often i
                  forget to switch and so on). Is there a way of telling node
                  which interpreter to use? Can i use a .npmrc file in a project
                  directory to force a specific nodejs version within that
                  subdirectory?
                </span>
                <span>
                  I searched exactly for this (npmrc node version) but was not
                  lucky enough to find something.
                </span>
              </p>
            </div>
            <div className="question-tags-container text-xs flex gap-3 mt-5">
              <span className="px-2 py-[2px] rounded-sm   text-white  bg-primarycb ">
                HTML
              </span>
              <span className="px-2 py-[2px] rounded-sm text-white  bg-primarycb  ">
                Javascript
              </span>
              <span className="px-2 py-[2px] rounded-sm text-white  bg-primarycb  ">
                CSS
              </span>
            </div>
            <div className="qusetion-modification-user-card flex items-start justify-between mt-5 pr-2 ">
              <div className="flex gap-2">
                <button className="text-primarycb">Edit</button>
                <button className="text-primarycb">Delete</button>
              </div>
              <div className="user-card">
                <QuestionAndAnswersPageUserCard />
              </div>
            </div>

            <div className="comments-container mt-5 border-t border-slate-200">
              <div className="comment border-b border-slate-200">
                <div className="text-sm">
                  <span>
                    Where are you stuck? The error message seems quite clear:
                    you put a keyword argument name= first, a positional
                    argument args second. This is illegal syntax.{" "}
                  </span>
                  <span className="text-primarycb">
                    <span>-</span> Selmon Bhai 12 Sept 2023
                  </span>
                </div>
                <div className="comment-modification flex gap-2 text-sm mt-1">
                  <button className="text-primarycb">Edit</button>
                  <button className="text-primarycb">Delete</button>
                </div>
              </div>

              <div className="add-comment text-sm text-slate-500 py-2 border-b border-slate-200">
                <button>Add comment</button>
              </div>
            </div>
            {/* by default this form will be hidden but once user clicks "add comment" button it will be shown */}
            <div className="comment-form hidden">
              <form>
                <Textarea />
                <Button>Comment</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <HomepageSidebar />
    </main>
  );
}

export default QuestionAndAnswerPage;
