import React from "react";

export const useCounter = (initialValue, payload) => {
  const [state, setState] = React.useState(initialValue);

  let fun = () => {
    setState((pre) => pre + payload);
  };

  return [state, fun];
};
