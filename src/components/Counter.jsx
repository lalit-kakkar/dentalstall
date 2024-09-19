import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);
  const handleAddCount = () => {
    setCount(count + 1);
  };
  const handleRemoveCount = () => {
    count > 1 && setCount(count - 1);
  };
  return (
    <div className="flex items-center gap-2">
      <button
        className="bg-blue-light rounded-xl p-2"
        onClick={handleRemoveCount}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
      <div className="outline-none w-16 text-center border rounded-xl p-2">
        {count}
      </div>
      <button className="bg-blue-light rounded-xl p-2" onClick={handleAddCount}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    </div>
  );
};

export default Counter;
