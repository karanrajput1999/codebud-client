import { SlidersHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";

function QuestionsFilterButton() {
  const [filterVisible, setFilterVisible] = useState(false);

  return (
    <div className="flex flex-col items-end ">
      <div className="filter-btn pr-2">
        <Button
          className="flex gap-1 items-center bg-white border-2 border-primarycb text-primarycb hover:bg-primarycb hover:text-white"
          onClick={() => setFilterVisible(!filterVisible)}
        >
          {" "}
          <SlidersHorizontal />
          <span>Filter</span>
        </Button>
      </div>
      <div
        className={`filter-container pr-2 justify-end ${
          filterVisible ? "flex" : "hidden"
        }`}
      >
        <div className="filters-container mt-3 text-sm flex justify-start">
          <div className="border border-primarycb flex flex-col items-start gap-2 p-3 rounded-md">
            <div className="flex items-center flex-row-reverse gap-2">
              <label htmlFor="no-answers">No answers</label>
              <Checkbox id="no-answers" name="no-answers" />
            </div>
            <div className="flex items-center flex-row-reverse gap-2">
              <label htmlFor="no-accepted-answer">No accepted answer</label>
              <Checkbox id="no-accepted-answer" name="no-accepted-answer" />
            </div>
            <div className="flex items-center flex-row-reverse gap-2">
              <label htmlFor="watched-tags">Watched tags</label>
              <Checkbox id="watched-tags" name="watched-tags" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionsFilterButton;
