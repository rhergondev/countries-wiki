import { useEffect, useState } from "react";

import { PageButton } from "./PaginationButton";

interface propList {
  itemsPerPage: number;
  dataLength: number;
  currentPage: number;
  setCurrentPage: (newPage: number) => void;
}

export function PagesNavigation({
  itemsPerPage,
  dataLength,
  currentPage,
  setCurrentPage,
}: propList) {
  const [PagesArray, setPagesArray] = useState<number[]>([]);
  const [numberOfPages, setNumberOfPages] = useState<number>();

  const paginationManager = () => {
    if (numberOfPages)
      switch (true) {
        case numberOfPages <= 1:
          return <div className="h-8 w-full invisible" />;
        case numberOfPages > 1 && numberOfPages <= 5:
          return (
            <div className="flex gap-2 w-full justify-center">
              {currentPage > 1 ? (
                <PageButton
                  buttonText="Prev"
                  pageSetterValue={currentPage - 1}
                  setterFunction={setCurrentPage}
                  className="bg-white rounded-l-full rounded-md shadow shadow-gray-100 h-8 min-w-[5rem] hover:shadow-gray-300"
                />
              ) : (
                <div className=" h-8 w-[5rem] invisible" />
              )}
              {PagesArray.map((e) => {
                return (
                  <PageButton
                    buttonText={e.toString()}
                    pageSetterValue={e}
                    setterFunction={setCurrentPage}
                    className={`bg-white  rounded-md shadow shadow-gray-100 h-8 min-w-[2.5rem] hover:shadow-gray-300 ${
                      currentPage === e
                        ? "outline outline-4 outline-gray-300"
                        : ""
                    }`}
                  />
                );
              })}
              {currentPage < numberOfPages ? (
                <PageButton
                  buttonText="Next"
                  pageSetterValue={currentPage + 1}
                  setterFunction={setCurrentPage}
                  className="bg-white rounded-r-full rounded-md shadow shadow-gray-100 h-8 min-w-[5rem] hover:shadow-gray-300"
                />
              ) : (
                <div className=" h-8 w-[5rem] invisible" />
              )}
            </div>
          );
        default:
          return (
            <div className="flex gap-2 w-full justify-center">
              {currentPage > 1 ? (
                <PageButton
                  buttonText="Prev"
                  pageSetterValue={currentPage - 1}
                  setterFunction={setCurrentPage}
                  className="bg-white rounded-l-full rounded-md shadow shadow-gray-100 h-8 min-w-[5rem] hover:shadow-gray-300"
                />
              ) : (
                <div className=" h-8 w-[5rem] invisible" />
              )}
              <PageButton
                buttonText={"1".toString()}
                pageSetterValue={1}
                setterFunction={setCurrentPage}
                className={`bg-white  rounded-md shadow shadow-gray-100 h-8 min-w-[2.5rem] hover:shadow-gray-300 ${
                  currentPage === 1 ? "outline outline-4 outline-gray-300" : ""
                }`}
              />
              <div
                className={`h-8 min-w-[2rem] text-center ${
                  currentPage <= 3 ? "hidden" : ""
                }`}
              >
                ...
              </div>
              {PagesArray.map((e) => {
                if (e >= currentPage - 1 && e <= currentPage + 1) {
                  if (e !== 1 && e !== numberOfPages) {
                    return (
                      <PageButton
                        buttonText={e.toString()}
                        pageSetterValue={e}
                        setterFunction={setCurrentPage}
                        className={`bg-white  rounded-md shadow shadow-gray-100 h-8 min-w-[2.5rem] hover:shadow-gray-300 ${
                          currentPage === e
                            ? "outline outline-4 outline-gray-300"
                            : ""
                        }`}
                      />
                    );
                  }
                } else {
                  return "";
                }
              })}
              <div
                className={`h-8 min-w-[2rem] text-center ${
                  currentPage >= numberOfPages - 2 ? "hidden" : ""
                }`}
              >
                ...
              </div>
              <PageButton
                buttonText={numberOfPages.toString()}
                pageSetterValue={numberOfPages}
                setterFunction={setCurrentPage}
                className={`bg-white  rounded-md shadow shadow-gray-100 h-8 min-w-[2.5rem] hover:shadow-gray-300 ${
                  currentPage === numberOfPages
                    ? "outline outline-4 outline-gray-300"
                    : ""
                }`}
              />
              {currentPage < numberOfPages ? (
                <PageButton
                  buttonText="Next"
                  pageSetterValue={currentPage + 1}
                  setterFunction={setCurrentPage}
                  className="bg-white rounded-r-full rounded-md shadow shadow-gray-100 h-8 min-w-[5rem] hover:shadow-gray-300"
                />
              ) : (
                <div className=" h-8 w-[5rem] invisible" />
              )}
            </div>
          );
      }
  };

  useEffect(() => {}, [dataLength]);

  useEffect(() => {
    setNumberOfPages(Math.ceil(dataLength / itemsPerPage));
    setPagesArray([]);
    if (numberOfPages) {
      for (let i = 1; i <= numberOfPages; i++) {
        setPagesArray((previousArray) => [...previousArray, i]);
      }
    }
  }, [itemsPerPage, dataLength, numberOfPages]);

  useEffect(() => {
    setCurrentPage(1);
  }, [dataLength]);

  return <div>{paginationManager()}</div>;
}
