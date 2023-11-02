interface propList {
  imgUrl: string;
  imgAlt: string;
  className?: string;
}

export function CardImg({ imgUrl, imgAlt, className }: propList) {
  return <img className={className} src={imgUrl} alt={imgAlt} />;
}
