import { MouseEvent } from "react";

interface propList {
  className?: string;
  headerTxt: string | undefined;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function DropDownHeader({ className, headerTxt, onClick }: propList) {
  return (
    <button className={className} onClick={onClick}>
      {headerTxt}
    </button>
  );
}
