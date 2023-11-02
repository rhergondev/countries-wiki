interface propList {
  contentTitle: string;
  content: string;
  className?: string;
}

export function CardContentLine({
  contentTitle,
  content,
  className,
}: propList) {
  return (
    <p className={className}>
      <span className="font-semibold">{contentTitle}</span>
      &nbsp;
      {content}
    </p>
  );
}
