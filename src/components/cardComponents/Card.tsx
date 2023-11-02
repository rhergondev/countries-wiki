import { ReactNode } from "react";

interface propList {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: propList) {
  return <div className={className}>{children}</div>;
}
