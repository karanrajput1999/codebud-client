import { Link } from "react-router-dom";
import HomepageNavbar from "../homagepageNavbar/HomepageNavbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays, Clock7, Flame, User2 } from "lucide-react";
import HomepageSidebar from "../homepageSidebar/HomepageSidebar";

function Homepage() {
  return (
    <main className="flex " style={{ height: "calc(100vh - 4rem)" }}>
      <HomepageNavbar />
      <section className="home-body flex-[50%]  border border-x-primarycb">
        <div>
          <div className="border-b border-primarycb pb-6">
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

          <div className="questions-container ">
            <div className="question-container flex pr-2 py-1 border-b border-primarycb">
              {/* questions left side */}
              <div className="question-stats flex flex-[25%] md:flex-[20%] justify-center items-center  text-sm md:text-base">
                <div className="flex flex-col gap-2">
                  <span>5 Votes</span>
                  <span>3 Answers</span>
                  <span>23 Views</span>
                </div>
              </div>
              {/* question right side */}
              <div className=" pl-2 flex-[75%] md:flex-[80%]">
                <div className="question-text">
                  <span className="text-base/[1] md:text-xl ">
                    Having issue while making navigation bar responsive. and
                    adding this extra line to check responsiveness.and adding
                    this extra line to check responsiveness
                  </span>
                </div>
                <div className="question-tags text-xs flex gap-3 mt-2">
                  <span className="px-2 py-[1px] rounded-sm border border-primarycb text-black  ">
                    HTML
                  </span>
                  <span className="px-2 py-[1px] rounded-sm border border-primarycb text-black  ">
                    Javascript
                  </span>
                  <span className="px-2 py-[1px] rounded-sm border border-primarycb text-black  ">
                    CSS
                  </span>
                </div>
                <div className="question-owner text-sm mt-3">
                  <div className="flex items-center justify-end">
                    <User2 />
                    <span>asked 17 mins ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomepageSidebar />
    </main>
  );
}

export default Homepage;
