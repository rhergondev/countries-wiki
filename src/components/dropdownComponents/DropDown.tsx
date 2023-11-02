import { DropDownContainer } from "./DropDownContainer";
import { DropDownElement } from "./DropDownElement";
import { DropDownHeader } from "./DropDownHeader";

import { useEffect, useState } from "react";

interface propList {
  header: string | undefined;
  className?: string;
  headerClassName?: string;
  elementContainerClassName?: string;
  elementClassName?: string;
  elementList: element[];
}

interface element {
  text: string;
  value: string;
}

export function DropDown({
  header,
  className,
  headerClassName,
  elementContainerClassName,
  elementClassName,
  elementList,
}: propList) {
  const [isLive, setIsLive] = useState(false);
  const [elementsToShow, setElementsToShow] = useState<React.ReactNode[]>([]);

  const resetLive = () => {
    setIsLive(false);
  };

  const showElements = () => {
    try {
      if (elementList && elementList.length > 0) {
        const elementsLoaded = elementList.map((element) => {
          return (
            <DropDownElement
              key={element.value}
              elementText={element.text}
              elementValue={element.value}
              className={elementClassName}
              resetLive={resetLive}
            />
          );
        });
        setElementsToShow(elementsLoaded);
      } else {
        throw new Error("Element list is empty");
      }
    } catch (error) {
      console.error(
        `Error populating the Dropdown Menu with header ${header}: ${error} `
      );
    }
  };

  useEffect(() => {
    if (isLive) {
      showElements();
    } else {
      setElementsToShow([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLive]);

  return (
    <DropDownContainer className={` flex flex-col ${className}`}>
      <DropDownHeader
        className={`w-full ${headerClassName}`}
        headerTxt={header}
        onClick={() => setIsLive(!isLive)}
      />
      <div
        className={`flex flex-col empty:hidden ${elementContainerClassName}`}
      >
        {elementsToShow}
      </div>
    </DropDownContainer>
  );
}
