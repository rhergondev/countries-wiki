import { ReactNode } from "react";

interface propList {
  children: ReactNode;
  className?: string;
}

export function HeaderTitle({ children, className }: propList) {
  return <h1 className={className}>{children}</h1>;
}
