import { useEffect, useState } from "react";


export function Counter() {
  const [count, setCount] = useState(0)
//   const count = 0
  const handleClick = () => {
    // count = count + 1;
    setCount(count + 1)
    console.log(count);   // prints 1, 2, 3 ...
  };

  return (
    <div>
      <p >Count: {count}</p>
      <button className="owo" onClick={handleClick}>Add one</button>
    </div>
  );
}