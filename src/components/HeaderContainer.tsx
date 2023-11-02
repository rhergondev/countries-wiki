import { Header } from "./headerComponents/Header";
import { HeaderTitle } from "./headerComponents/HeaderTitle";
import { ThemeButton } from "./headerComponents/ThemeButton";

import { Link } from "react-router-dom";

interface propList {
  className: string;
}

export function HeaderContainer({ className }: propList) {
  return (
    <Header className={className}>
      <Link to="/">
        <HeaderTitle className="text-xl font-extrabold">
          Where in the world?
        </HeaderTitle>
      </Link>
      <ThemeButton
        className="flex gap-4 font-semibold"
        btnImg="/img/icons/moon.png"
        btnName="Dark Mode"
      />
    </Header>
  );
}
