import { Link } from "react-router-dom";
import HomepageNavbar from "../homagepageNavbar/HomepageNavbar";
import HomepageSidebar from "../homepageSidebar/HomepageSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CalendarPlus,
  RotateCcw,
  SlidersHorizontal,
  User2,
} from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";

function Questions() {
  const [filterVisible, setFilterVisible] = useState(false);

  return (
    <main className="flex" style={{ height: "calc(100vh - 4rem)" }}>
      <HomepageNavbar />
      <section className="home-body flex-[50%]  border border-x-primarycb">
        <div>
          <div className="border-b border-primarycb pb-6">
            <div className="flex justify-between items-center px-2 py-2 h-20 ">
              <div>
                <h1 className="text-2xl md:text-4xl font-bold">
                  All Questions
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
                      <CalendarPlus /> Newest
                    </span>
                  </TabsTrigger>
                  <TabsTrigger value="oldest">
                    <span className="flex items-center gap-2">
                      <RotateCcw />
                      Oldest
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

              <div className="filter-btn">
                <Button
                  className="flex gap-1 items-center bg-white border-2 border-primarycb text-primarycb hover:bg-primarycb hover:text-white"
                  onClick={() => setFilterVisible(!filterVisible)}
                >
                  {" "}
                  <SlidersHorizontal />
                  <span>Filter</span>
                </Button>
              </div>
            </div>

            <div
              className={`filter-container pr-2 justify-end ${
                filterVisible ? "flex" : "hidden"
              }`}
            >
              <div className="filters-container mt-3 text-sm flex justify-start">
                <div className="border border-primarycb flex flex-col items-start gap-2 p-3 rounded-md">
                  <div className="flex items-center flex-row-reverse gap-2">
                    <label htmlFor="no-answers">No answers</label>
                    <Checkbox id="no-answers" name="no-answers" />
                  </div>
                  <div className="flex items-center flex-row-reverse gap-2">
                    <label htmlFor="no-accepted-answer">
                      No accepted answer
                    </label>
                    <Checkbox
                      id="no-accepted-answer"
                      name="no-accepted-answer"
                    />
                  </div>
                  <div className="flex items-center flex-row-reverse gap-2">
                    <label htmlFor="watched-tags">Watched tags</label>
                    <Checkbox id="watched-tags" name="watched-tags" />
                  </div>
                </div>
              </div>
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

export default Questions;
