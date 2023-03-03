import { useDebounce } from "../Hooks/useDebounce";

export const ClickMe2 = () => {
  const handleClick = () => {
    console.log("Network Request by clickMe 2");
  };

  const debounce = useDebounce(handleClick, 1500);

  return (
    <div>
      <button onClick={debounce}>Click Me 2</button>
    </div>
  );
};
