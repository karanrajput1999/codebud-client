import avatar from "../../assets/avatars/boy-6.png";
import avatar2 from "../../assets/avatars/boy-7.png";
import reputation from "../../assets/reputation.png";

function UserCard() {
  return (
    <>
      <div className="user-card p-1 flex  gap-2 items-center border border-black w-40 rounded-sm">
        <div className="user-avatar h-12 w-12">
          <img src={avatar} alt="user-avatar" />
        </div>
        <div className="user-info">
          <span>Elvish Bhai</span>
          <div className="flex gap-1">
            <img src={reputation} alt="reputation-icon" className="h-4 w-4" />
            <span className="text-xs text-slate-600">128 Reps</span>
          </div>
        </div>
      </div>
      <div className="user-card p-1 flex gap-2 items-center border border-black w-40 rounded-sm">
        <div className="user-avatar h-12 w-12">
          <img src={avatar2} alt="user-avatar" />
        </div>
        <div className="user-info">
          <span>Selmon Bhai</span>
          <div className="flex gap-1">
            <img src={reputation} alt="reputation-icon" className="h-4 w-4" />
            <span className="text-xs text-slate-600">197 Reps</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCard;
