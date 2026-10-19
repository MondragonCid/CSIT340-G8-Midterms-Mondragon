import { useState } from "react";

export default function Feedback() {
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);

  function handleYes() {
    setYes((prev) => prev + 1);
  }

  function handleNo() {
    setNo((prev) => prev + 1);
  }

  function handleClear() {
    setYes(0);
    setNo(0);
  }

  return (
    <div className="px-20 py-6">
      <h3 className="text-2xl font-bold">Was this page helpful?</h3>
      <div className="mt-4 flex gap-4">
        <button
          className="cursor-pointer rounded-lg bg-[#5C766D] px-8 py-3 text-xl font-bold text-[#EDE9E6]"
          onClick={handleYes}
        >
          Yes ({yes})
        </button>
        <button
          className="cursor-pointer rounded-lg bg-[#C9996B] px-8 py-3 text-xl font-bold text-[#5C4F4A]"
          onClick={handleNo}
        >
          No ({no})
        </button>
        <button
          className="cursor-pointer rounded-lg border-2 border-[#5C4F4A] px-8 py-3 text-xl font-bold"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
}