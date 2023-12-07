import HomepageNavbar from "../homagepageNavbar/HomepageNavbar";
import HomepageSidebar from "../homepageSidebar/HomepageSidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarPlus, RotateCcw } from "lucide-react";

import QuestionsHeader from "./QuestionsHeader";
import Questions from "../questions/Questions";
import QuestionsFilterButton from "./QuestionsFilterButton";

function QuestionsPage() {
  return (
    <main className="flex " style={{ height: "calc(100vh - 4rem)" }}>
      <HomepageNavbar />
      <section className="home-body flex-[50%]  border border-x-primarycb">
        <div>
          <div>
            {/* Questions header */}
            <QuestionsHeader />

            <div className="filter-tabs mt-1 flex">
              <Tabs
                defaultValue="newest"
                className="w-[100%] flex flex-col items-end justify-start"
              >
                <div className="w-[100%] flex justify-end pr-2 pb-4  border-b border-primarycb">
                  <QuestionsFilterButton />
                  <TabsList className=" items-center bg-white border border-black rounded-sm">
                    {/* Filter button */}
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
                </div>

                <TabsContent value="newest" className="w-[100%] mt-0">
                  {/* These are newest questions. */}
                  <Questions />
                  <Questions />
                </TabsContent>
                <TabsContent value="oldest" className="w-[100%] mt-0">
                  {/* These are questions for this oldest. */}
                  <Questions />
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* question */}
        </div>
      </section>

      <HomepageSidebar />
    </main>
  );
}

export default QuestionsPage;
