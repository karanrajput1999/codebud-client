import React, { KeyboardEvent, useState } from "react";
import { Input } from "../ui/input";
import { X } from "lucide-react";

function QuestionTagInput() {
  const [tagInputValue, setTagInputValue] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  function handleTagInput(e: KeyboardEvent) {
    const inputTarget = e.target as HTMLInputElement;
    const trimmedValue = inputTarget.value.trim().toLowerCase();
    console.log(e);

    if (e.key === " ") {
      setTags([...tags, trimmedValue]);
      setTimeout(() => {
        setTagInputValue("");
      }, 0);
      console.log(inputTarget.value);
    }

    if (inputTarget.value.length === 0 && e.code === "Backspace") {
      const lastTag = tags[tags.length - 1];
      const otherTags = tags.filter((el) => el !== lastTag);
      setTags([...otherTags]);
      setTagInputValue(lastTag);
    }
  }

  function deleteTag(
    tag: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    const otherTags = tags.filter((el) => el !== tag);
    setTags([...otherTags]);
  }

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="question-title" className="font-bold">
        Tags
      </label>
      <div className="flex items-center gap-1 border p-1 rounded-lg">
        <div className="ml-2 flex gap-1">
          {tags.map((tag, i) => (
            <span
              className="flex pl-2 py-[2px] rounded-sm text-white bg-primarycb"
              key={i}
            >
              {tag}
              <button onClick={(e) => deleteTag(tag, e)}>
                <X size={18} />
              </button>
            </span>
          ))}
        </div>

        <Input
          type="text"
          value={tagInputValue}
          id="question-title"
          name="question-title"
          placeholder="eg: javascript, react.js, node.js"
          className="focus-visible:ring-0 border-none rounded-none"
          onKeyDown={(e) => handleTagInput(e)}
          onChange={(e) => setTagInputValue(e.target.value)}
        />
      </div>
    </div>
  );
}

export default QuestionTagInput;
