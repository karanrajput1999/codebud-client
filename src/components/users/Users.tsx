import { ArrowUp, Medal, PartyPopper } from "lucide-react";
import HomepageNavbar from "../homagepageNavbar/HomepageNavbar";
import HomepageSidebar from "../homepageSidebar/HomepageSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserCard from "./UserCard";
import UsersHeader from "./UsersHeader";

function Users() {
  return (
    <main className="flex" style={{ height: "calc(100vh - 4rem)" }}>
      <HomepageNavbar />
      <section className="users-body flex-[50%]  border border-x-primarycb">
        <div>
          <div className="border-b border-primarycb pb-3">
            {/* users header */}
            <UsersHeader />

            <div className="filter-tabs mt-1 sm:px-2 flex pr-2">
              <Tabs
                defaultValue="newest"
                className="w-[100%] flex justify-end pr-2"
              >
                <TabsList className=" items-center bg-white border border-black rounded-sm">
                  <TabsTrigger
                    value="newest"
                    className="border-r border-black rounded-none"
                  >
                    <span className="flex items-center gap-2">
                      <Medal /> Reputation
                    </span>
                  </TabsTrigger>

                  <TabsTrigger
                    value="oldest"
                    className="border-r border-black rounded-none"
                  >
                    <span className="flex items-center gap-2">
                      <PartyPopper />
                      New User
                    </span>
                  </TabsTrigger>

                  <TabsTrigger value="voter">
                    <span className="flex items-center gap-2">
                      <ArrowUp />
                      Voter
                    </span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="newest">
                  {/* These are newest questions. */}
                </TabsContent>
                <TabsContent value="oldest">
                  {/* These are questions for this oldest. */}
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* user card */}
          <div className="users-card-container mt-2 sm:px-2 flex justify-around sm:justify-between flex-wrap gap-2">
            <UserCard />
            <UserCard />
          </div>
        </div>
      </section>

      <HomepageSidebar />
    </main>
  );
}

export default Users;
