import HomepageNavbar from "../homagepageNavbar/HomepageNavbar";

function Questions() {
  return (
    <main className="flex" style={{ height: "calc(100vh - 4rem)" }}>
      <HomepageNavbar />
      <section className="home-body flex-[50%] border border-x-primarycb">
        <div>Question body</div>
      </section>

      <section className="flex-[25%] lg:block hidden">
        <div> home sidebar</div>
      </section>
    </main>
  );
}

export default Questions;
