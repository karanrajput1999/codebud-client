import { ArrowUp, Medal, PartyPopper } from "lucide-react";
import HomepageNavbar from "../homagepageNavbar/HomepageNavbar";
import HomepageSidebar from "../homepageSidebar/HomepageSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UsersHeader from "./UsersHeader";
import UsersCardContainer from "./UsersCardContainer";

function Users() {
  return (
    <main className="flex" style={{ height: "calc(100vh - 4rem)" }}>
      <HomepageNavbar />
      <section className="users-body flex-[50%]  border border-x-primarycb">
        <div>
          <div>
            {/* users header */}
            <UsersHeader />

            <div className="filter-tabs mt-1  flex ">
              <Tabs
                defaultValue="reputation"
                className="w-[100%] flex flex-col items-end justify-start"
              >
                <div className="w-[100%] flex justify-end pr-2 pb-4  border-b border-primarycb">
                  <TabsList className=" items-center bg-white border border-black rounded-sm">
                    <TabsTrigger
                      value="reputation"
                      className="border-r border-black rounded-none"
                    >
                      <span className="flex items-center gap-2">
                        <Medal /> Reputation
                      </span>
                    </TabsTrigger>

                    <TabsTrigger
                      value="newest"
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
                </div>

                <TabsContent value="reputation" className="w-[100%] mt-0">
                  <UsersCardContainer />
                </TabsContent>
                <TabsContent value="newest" className="w-[100%] mt-0">
                  <UsersCardContainer />
                </TabsContent>
                <TabsContent value="voter" className="w-[100%] mt-0">
                  <UsersCardContainer />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <HomepageSidebar />
    </main>
  );
}

export default Users;
