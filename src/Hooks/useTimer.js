import React from "react";

export const useTimer = (delay) => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setShow((prev) => !prev);
    }, delay);
  }, []);

  return show;
};
