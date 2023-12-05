import HomepageNavbar from "../homagepageNavbar/HomepageNavbar";
import HomepageSidebar from "../homepageSidebar/HomepageSidebar";

function Users() {
  return (
    <main className="flex" style={{ height: "calc(100vh - 4rem)" }}>
      <HomepageNavbar />
      <section className="home-body flex-[50%] border border-x-primarycb">
        <div>Users body</div>
      </section>

      <HomepageSidebar />
    </main>
  );
}

export default Users;
