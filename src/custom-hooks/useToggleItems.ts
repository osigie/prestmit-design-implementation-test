import React, { useState, useRef } from "react";

export const useToggleItems = <T>(items: T[], desiredItemCount: number = 6) => {
  const repeatedItem = Array.from(
    { length: desiredItemCount },
    (_, index) => items[index % items.length]
  );
  const firstItemRef = useRef<HTMLDivElement | null>(null);

  const itemsPerPage = 3;

  const [visibleServices, setVisibleServices] = useState(itemsPerPage);

  const maxVisibleServices = Math.min(
    visibleServices + itemsPerPage,
    repeatedItem.length
  );

  const isMaxVisible = visibleServices === maxVisibleServices;

  const toggleItems = () => {
    if (isMaxVisible) {
      setVisibleServices(itemsPerPage);
      if (firstItemRef.current) {
        firstItemRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setVisibleServices(maxVisibleServices);
    }
  };
  return {
    toggleItems,
    firstItemRef,
    repeatedItem,
    isMaxVisible,
    visibleServices,
  };
};
