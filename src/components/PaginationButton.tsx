interface propList {
  className?: string;
  buttonText: string;
  pageSetterValue: number;
  setterFunction: (arg0: number) => void;
}

export function PageButton({
  className,
  buttonText,
  pageSetterValue,
  setterFunction,
}: propList) {
  return (
    <button
      className={className}
      onClick={() => setterFunction(pageSetterValue)}
    >
      {buttonText}
    </button>
  );
}
