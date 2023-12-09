import { X } from "lucide-react";
import { useState } from "react";
import HomepageSidebarTagsInput from "./HomepageSidebarTagsInput";

function HomepageSidebarWatchedTags() {
  // these are temporary tags which are going to fetched user's profile
  const tempTags = ["html", "css", "javascript"];
  const [editMode, setEditMode] = useState(false);

  function handleEditMode() {
    setEditMode(!editMode);
  }

  return (
    <div className="w-min border border-primarycb  rounded-md overflow-hidden">
      <div className="watched-tags-header py-2 px-2 flex justify-between bg-slate-200">
        <span className="text-xl font-bold ">Watched Tags</span>
        <button onClick={handleEditMode}>edit</button>
      </div>
      <div className="tags-container mt-3 px-3 pb-3">
        <div className="flex gap-2">
          {tempTags.map((tag, i) => (
            <span
              className={`flex items-center  ${
                editMode ? "pl-2" : "px-2"
              } py-[2px] rounded-sm text-white bg-primarycb`}
              key={i}
            >
              {tag}
              {editMode && (
                <button>
                  <X size={18} />
                </button>
              )}
            </span>
          ))}
        </div>
      </div>
      {editMode && (
        <div>
          <HomepageSidebarTagsInput />
        </div>
      )}
    </div>
  );
}

export default HomepageSidebarWatchedTags;
