import UserProfileQuestion from "./UserProfileQuestion";

function UserProfileQuestions() {
  return (
    <section>
      <div className="heading text-xl font-bold">
        <span>New Questions</span>
      </div>
      <div className="questions-container border border-slate-600 mt-2 rounded-xl overflow-hidden">
        <UserProfileQuestion />
        <UserProfileQuestion />
      </div>
    </section>
  );
}

export default UserProfileQuestions;
