import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileQuestion, Newspaper } from "lucide-react";
import UserProfileQuestions from "./UserProfileQuestions";
import UserAnswers from "./UserAnswers";

function UserProfileInfo() {
  return (
    <section>
      <div className="flex flex-col gap-2 ">
        <div className="user-stats">
          <div className="w-36 h-28 border border-slate-700">
            <div className="stats text-xs grid grid-rows-2 grid-cols-2 gap-4 px-3 py-1">
              <div className="flex flex-col ">
                <span className="text-base">138</span>
                <span className="text-slate-600">reputation</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base">2k</span>
                <span className="text-slate-600">reached</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base">12</span>
                <span className="text-slate-600">answers</span>
              </div>
              <div className="flex flex-col">
                <span className="text-base">18</span>
                <span className="text-slate-600">questions</span>
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
                <UserAnswers />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserProfileInfo;
