import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileQuestion, Newspaper } from "lucide-react";
import UserQuestions from "./UserQuestions";
import UserAnswers from "./UserAnswers";

function UserProfileInfo() {
  return (
    <section>
      <div>
        <div className="user-stats">
          <div className="w-40 h-40 border"></div>
        </div>
        <div className="user-profile-right">
          <div className="question-tab">
            <Tabs
              defaultValue="questions"
              className="w-[100%] flex flex-col pr-2"
            >
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
                <UserQuestions />
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
