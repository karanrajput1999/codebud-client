import React, { Dispatch, SetStateAction, useState } from "react";
import { Input } from "../../ui/input";
import { X } from "lucide-react";

interface tagsType {
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
}

function EditQuestionTagInput({ tags, setTags }: tagsType) {
  const [tagInputValue, setTagInputValue] = useState<string>("");

  function handleTagInput(e: React.FormEvent<HTMLInputElement>) {
    const inputTarget = e.target as HTMLInputElement;
    const trimmedValue = inputTarget.value.trim().toLowerCase();

    // Check if the input is empty, and if so, return early
    if (!trimmedValue) {
      return;
    }

    // Check if nativeEvent is available and has the data property
    if (
      e.nativeEvent instanceof InputEvent &&
      e.nativeEvent.data !== undefined
    ) {
      if (e.nativeEvent.data === " ") {
        setTags([...tags, trimmedValue]);
        setTimeout(() => {
          setTagInputValue("");
        }, 0);
      }
    }
  }

  function handleBackspace(e: React.KeyboardEvent) {
    const inputTarget = e.target as HTMLInputElement;

    if (inputTarget.value.length === 0 && e.key === "Backspace") {
      const lastTag = tags[tags.length - 1];
      const otherTags = tags.filter((el) => el !== lastTag);
      setTags([...otherTags]);
      if (lastTag !== undefined)
        // adding this extra space (" ") helps to not delete the last letter when pressed backspace for the first time
        setTagInputValue(lastTag + " ");
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
          className="focus-visible:ring-0 focus-visible:ring-offset-0 border-none rounded-none"
          onKeyDown={(e) => handleBackspace(e)}
          onInput={(e) => handleTagInput(e)}
          onChange={(e) => setTagInputValue(e.target.value)}
        />
      </div>
    </div>
  );
}

export default EditQuestionTagInput;
