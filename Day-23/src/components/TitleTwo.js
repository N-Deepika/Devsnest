import React, { useState } from "react";
import useDocumentTitle from "./useDocumentTitle";

function TitleTwo() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);
  return (
    <div>
      Count
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
}

export default TitleTwo;
