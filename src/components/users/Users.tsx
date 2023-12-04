import HomepageNavbar from "../homagepageNavbar/HomepageNavbar";

function Users() {
  return (
    <main className="flex" style={{ height: "calc(100vh - 4rem)" }}>
      <HomepageNavbar />
      <section className="home-body flex-[50%] border border-x-primarycb">
        <div>Users body</div>
      </section>

      <section className="flex-[25%] lg:block hidden">
        <div> home sidebar</div>
      </section>
    </main>
  );
}

export default Users;
