import { useState } from "react";

export const Hello = () => {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => {
        console.log("click");
        setCount((c) => c + 1);
      }}
    >
      click count {count}
    </button>
  );
};
