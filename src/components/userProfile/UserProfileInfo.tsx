import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileQuestion, Newspaper } from "lucide-react";
import UserProfileQuestions from "./UserProfileQuestions";
import UserProfileAnswers from "./UserProfileAnswers";

function UserProfileInfo() {
  return (
    <section>
      <div className="flex flex-col gap-2 ">
        <div className="user-stats">
          <div className="flex items-center justify-center w-36 h-28 md:w-48 md:h-36 border border-slate-700 rounded">
            <div className="stats text-xs grid grid-rows-2 grid-cols-2 gap-4 md:gap-5">
              <div className="flex flex-col ">
                <span className="text-base md:text-xl">138</span>
                <span className="text-slate-600 md:text-base">reputation</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base md:text-xl">2k</span>
                <span className="text-slate-600 md:text-base">reached</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base md:text-xl">12</span>
                <span className="text-slate-600 md:text-base">answers</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base md:text-xl">18</span>
                <span className="text-slate-600 md:text-base">questions</span>
              </div>
            </div>
          </div>
        </div>
        <div className="user-profile-right mt-4">
          <div className="question-tab">
            <Tabs defaultValue="questions" className="w-[100%]">
              <TabsList className=" items-center bg-white border border-black rounded-sm">
                <TabsTrigger
                  value="questions"
                  className="border-r border-black rounded-none"
                >
                  <span className="flex items-center gap-2">
                    <FileQuestion />
                    Questions
                  </span>
                </TabsTrigger>
                <TabsTrigger value="answers">
                  <span className="flex items-center gap-2">
                    <Newspaper />
                    Answers
                  </span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="questions">
                <UserProfileQuestions />
              </TabsContent>
              <TabsContent value="answers">
                <UserProfileAnswers />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserProfileInfo;
