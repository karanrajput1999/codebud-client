import { Link } from "react-router-dom";
import HomepageNavbar from "../homagepageNavbar/HomepageNavbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, Clock7, Flame, User2 } from "lucide-react";
import HomepageSidebar from "../homepageSidebar/HomepageSidebar";
import Question from "../questions/Question";

function Homepage() {
  return (
    <main className="flex " style={{ height: "calc(100vh - 4rem)" }}>
      <HomepageNavbar />
      <section className="home-body flex-[50%]  border border-x-primarycb">
        <div>
          <div className="border-b border-primarycb pb-3">
            <div className="flex justify-between items-center px-2 py-2 h-20 ">
              <div>
                <h1 className="text-2xl md:text-4xl font-bold">
                  Top Questions
                </h1>
              </div>
              <div>
                <Link
                  to="/questions/ask"
                  className="px-5 py-2 md:px-7 md:py-3 bg-primarycb md:text-lg text-white rounded-sm "
                >
                  Ask Question
                </Link>
              </div>
            </div>

            <div className="filter-tabs mt-1 flex ">
              <Tabs
                defaultValue="hot"
                className="w-[100%] flex justify-end pr-2"
              >
                <TabsList className=" items-center bg-white border border-black rounded-sm">
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

                <TabsContent value="hot">
                  {/* These are hot questions. */}
                </TabsContent>
                <TabsContent value="week">
                  {/* These are questions for this week. */}
                </TabsContent>
                <TabsContent value="month">
                  {/* These are questions for this month. */}
                </TabsContent>
              </Tabs>
            </div>
          </div>

          <Question />
        </div>
      </section>

      <HomepageSidebar />
    </main>
  );
}

export default Homepage;
