import UserProfileQuestion from "./UserProfileQuestion";

function UserProfileQuestions() {
  return (
    <section className="mt-6">
      <div className="heading text-xl md:text-2xl font-bold">
        <span>Newest Questions</span>
      </div>
      <div className="questions-container border border-slate-600 mt-2 md:mt-5 rounded-xl overflow-hidden">
        <UserProfileQuestion />
        <UserProfileQuestion />
      </div>
    </section>
  );
}

export default UserProfileQuestions;
