import React from "react";

export const useDebounce = (funk, delay) => {
  let { current: id } = React.useRef();

  return () => {
    id && clearInterval(id);
    id = setTimeout(() => {
      funk();
    }, delay);
  };
};
