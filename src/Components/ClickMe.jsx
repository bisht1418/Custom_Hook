import React from "react";

export default function ClickMe() {
  let { current: id } = React.useRef;

  const debounce = (funk, delay) => {
    id && clearTimeout(id);
    id = setTimeout(() => {
      funk();
    }, delay);
  };

  const handleClick = () => {
    console.log("Network Request");
  };

  return (
    <div>
      <button onClick={() => debounce(handleClick, 1500)}>ClickMe</button>
    </div>
  );
}

//This is done without the use of custom Hook
