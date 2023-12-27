import HomepageNavbar from "../homagepageNavbar/HomepageNavbar";
import HomepageSidebar from "../homepageSidebar/HomepageSidebar";
import QuestionAndAnswerPageQuestion from "./QuestionAndAnswerPageQuestion";

function QuestionAndAnswerPage() {
  return (
    <main className="flex" style={{ minHeight: "calc(100vh - 4rem)" }}>
      <HomepageNavbar />
      <section className="flex-[50%] border-x border-primarycb ">
        <QuestionAndAnswerPageQuestion />
      </section>

      <HomepageSidebar />
    </main>
  );
}

export default QuestionAndAnswerPage;
