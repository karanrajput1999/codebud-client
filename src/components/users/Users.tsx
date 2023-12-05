import {
  ArrowUp,
  Medal,
  PartyPopper,
  SquareUserRound,
  User,
} from "lucide-react";
import HomepageNavbar from "../homagepageNavbar/HomepageNavbar";
import HomepageSidebar from "../homepageSidebar/HomepageSidebar";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";

function Users() {
  return (
    <main className="flex" style={{ height: "calc(100vh - 4rem)" }}>
      <HomepageNavbar />
      <section className="users-body flex-[50%]  border border-x-primarycb">
        <div>
          <div className="border-b border-primarycb pb-3">
            <div className="flex justify-between items-center px-2 py-2 h-20 ">
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Users
                </h1>
              </div>
              <div>
                <Input type="text" placeholder="Search user" />
              </div>
            </div>

            <div className="filter-tabs mt-1 flex pr-2">
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
          <div className="users-card-container mt-2 flex justify-around flex-wrap gap-2">
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
