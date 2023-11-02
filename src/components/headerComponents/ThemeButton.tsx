interface propList {
  btnImg: string;
  btnName: string;
  className?: string;
}

export function ThemeButton({ btnImg, btnName, className }: propList) {
  return (
    <button className={className}>
      <img className="h-6" src={btnImg} alt={btnName} />
      {btnName}
    </button>
  );
}
