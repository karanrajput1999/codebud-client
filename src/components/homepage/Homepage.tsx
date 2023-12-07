import HomepageNavbar from "../homagepageNavbar/HomepageNavbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, Clock7, Flame } from "lucide-react";
import HomepageSidebar from "../homepageSidebar/HomepageSidebar";
import HomePageHeader from "./HomePageHeader";
import Questions from "../questions/Questions";

function Homepage() {
  return (
    <main className="flex " style={{ height: "calc(100vh - 4rem)" }}>
      <HomepageNavbar />
      <section className="home-body flex-[50%]  border border-x-primarycb">
        <div>
          <div className="pb-3">
            <HomePageHeader />

            <div className="filter-tabs mt-1 flex w-[100%] ">
              <Tabs
                defaultValue="hot"
                className="w-[100%] flex flex-col items-end justify-start"
              >
                <div className="w-[100%] flex justify-end pr-2 pb-4  border-b border-primarycb">
                  <TabsList className="items-center bg-white border border-black rounded-sm">
                    <TabsTrigger
                      value="hot"
                      className="border-r border-black rounded-none"
                    >
                      <span className="flex items-center gap-2">
                        <Flame /> Hot
                      </span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="week"
                      className="border-r border-black rounded-none"
                    >
                      <span className="flex items-center gap-2">
                        <Clock7 />
                        Week
                      </span>
                    </TabsTrigger>
                    <TabsTrigger value="month">
                      {" "}
                      <span className="flex items-center gap-2">
                        <CalendarDays />
                        Month
                      </span>
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="hot" className="w-[100%] mt-0">
                  {/* These are hot questions. */}
                  <Questions />
                  <Questions />
                </TabsContent>
                <TabsContent value="week" className="w-[100%] mt-0">
                  {/* These are questions for this week. */}
                  <Questions />
                  <Questions />
                  <Questions />
                </TabsContent>
                <TabsContent value="month" className="w-[100%] mt-0">
                  {/* These are questions for this month. */}
                  <Questions />
                  <Questions />
                  <Questions />
                  <Questions />
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

export default Homepage;
