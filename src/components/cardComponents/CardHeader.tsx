interface propList {
  header: string;
  className?: string;
}

export function CardHeader({ header, className }: propList) {
  return <h2 className={className}>{header}</h2>;
}
