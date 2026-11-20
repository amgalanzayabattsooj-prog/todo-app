"use client";

import { useState, type KeyboardEvent } from "react";

type Props = { onAdd: (title: string) => void };

export const PageTaskInput = ({ onAdd }: Props) => {
  const [value, setValue] = useState("");
  const canAdd = value.trim().length > 0;

  const submit = () => {
    const title = value.trim();
    if (!title) return;
    onAdd(title);
    setValue("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") submit();
  };

  return (
    <>
      <section className="flex flex-col px-8">
        <div className="flex items-center gap-3 rounded-2xl border border-[#E3EAE4] bg-[#F3F6F3] p-2">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="What needs to get done?"
            className="h-10 flex-1 rounded-xl bg-transparent px-3 text-lg text-[#1F3D36] outline-none transition placeholder:text-[#7C8F85] focus:bg-white"
          />
          <button
            type="button"
            onClick={submit}
            className={`flex h-10 items-center gap-2 rounded-xl px-4 text-base font-medium transition ${
              canAdd
                ? "bg-[#1B4D3E] text-white hover:bg-[#153D31]"
                : "bg-[#D9E5DC] text-[#4F6B5D]"
            }`}
          >
            <span className="text-xl leading-none">+</span>
            Add task
          </button>
        </div>
      </section>
      <div className="flex items-center justify-end gap-1.5 pb-7 pl-8 pr-9 pt-3 text-sm text-[#6B7F74]">
        <span aria-hidden>↵</span>
        Enter to add a task
      </div>
    </>
  );
};