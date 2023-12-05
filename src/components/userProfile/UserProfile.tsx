import HomepageNavbar from "../homagepageNavbar/HomepageNavbar";
import HomepageSidebar from "../homepageSidebar/HomepageSidebar";
import avatar from "../../assets/avatars/boy-4.png";
import { Cake } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserProfileInfo from "./UserProfileInfo";
import UserEditProfile from "./UserEditProfile";

function UserProfile() {
  return (
    <main className="flex" style={{ height: "calc(100vh - 4rem)" }}>
      <HomepageNavbar />
      <section className="user-profile-body flex-[50%] pt-3 px-2 border border-x-primarycb">
        <div className="flex flex-col items-start gap-5 sm:gap-10">
          <div className="profile-top flex gap-3">
            <div className="user-profile-avatar w-20 h-20 sm:w-32 sm:h-32 border shrink-0">
              <img src={avatar} alt="user-avatar" />
            </div>
            <div className="user-details">
              <div className="user-name">
                <h1 className="text-3xl">Jagdish Bhagat</h1>
              </div>
              <div className="join-time flex items-center text-sm mt-1">
                <Cake className="w-5 h-4" />
                <span>Member for 2 years 4 months</span>
              </div>
              <div className="user-bio mt-1">
                <span>Senior software engineer @ Google</span>
              </div>
            </div>
          </div>

          <div className="profile-body">
            <div className="profile-tab">
              <Tabs
                defaultValue="profile"
                className="w-[100%] flex flex-col pr-2"
              >
                <TabsList className="bg-white border border-black rounded-sm">
                  <TabsTrigger
                    value="profile"
                    className="border-r border-black rounded-none"
                  >
                    <span>Profile</span>
                  </TabsTrigger>
                  <TabsTrigger value="editProfile">
                    <span>Edit Profile</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="profile">
                  <UserProfileInfo />
                </TabsContent>
                <TabsContent value="editProfile">
                  <UserEditProfile />
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

export default UserProfile;
