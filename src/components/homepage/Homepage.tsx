function Homepage() {
  return (
    <main className="flex" style={{ height: "calc(100vh - 4rem)" }}>
      <section className="home-navbar h-[100vh] flex-[25%] sm:block hidden">
        <nav>
          <ul>
            <li>Home</li>
            <li>Questions</li>
            <li>Users</li>
          </ul>
        </nav>
      </section>

      <section className="home-body flex-[50%] border border-x-primarycb">
        <div>home body</div>
      </section>

      <section className="flex-[25%] md:block hidden">
        <div> home sidebar</div>
      </section>
    </main>
  );
}

export default Homepage;
