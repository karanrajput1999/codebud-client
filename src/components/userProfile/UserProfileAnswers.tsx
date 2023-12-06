import UserProfileAnswer from "./UserProfileAnswer";

function UserProfileAnswers() {
  return (
    <section className="mt-6">
      <div className="heading text-xl md:text-2xl font-bold">
        <span>Newest Answers</span>
      </div>
      <div className="answers-container border border-slate-600 mt-2 md:mt-5 rounded-xl overflow-hidden">
        <UserProfileAnswer />
      </div>
    </section>
  );
}

export default UserProfileAnswers;
