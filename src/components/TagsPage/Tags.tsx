import { Clock12, TrendingUp } from "lucide-react";
import HomepageNavbar from "../homagepageNavbar/HomepageNavbar";
import HomepageSidebar from "../homepageSidebar/HomepageSidebar";
import HomepageSidebarWatchedTags from "../homepageSidebar/HomepageSidebarWatchedTags";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

import TagsCardContainer from "./TagsCardContainer";
import TagsHeader from "./TagsHeader";

function Tags() {
  return (
    <main className="flex " style={{ height: "calc(100vh - 4rem)" }}>
      <HomepageNavbar />
      <section className="home-body flex-[50%]  border border-x-primarycb">
        <div>
          <TagsHeader />
          <div className="lg:hidden block px-2 mb-3">
            <HomepageSidebarWatchedTags />
          </div>

          <div className="filter-tabs mt-1  flex ">
            <Tabs
              defaultValue="popular"
              className="w-[100%] flex flex-col items-end justify-start"
            >
              <div className="w-[100%] flex justify-end pr-2 pb-4  border-b border-primarycb">
                <TabsList className=" items-center bg-white border border-black rounded-sm">
                  <TabsTrigger
                    value="popular"
                    className="border-r border-black rounded-none"
                  >
                    <span className="flex items-center gap-2">
                      <TrendingUp /> Popular
                    </span>
                  </TabsTrigger>

                  <TabsTrigger value="new" className="rounded-none">
                    <span className="flex items-center gap-2">
                      <Clock12 />
                      New
                    </span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="popular" className="w-[100%] mt-0">
                <TagsCardContainer />
              </TabsContent>
              <TabsContent value="new" className="w-[100%] mt-0">
                <TagsCardContainer />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <HomepageSidebar />
    </main>
  );
}

export default Tags;
