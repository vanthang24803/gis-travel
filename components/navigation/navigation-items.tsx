"use cliet";

import { InfomationToggle } from "@/components/toggle/toggle-infomation";
import { APIToggle } from "@/components/toggle/toggle-api";
import { FileToggle } from "@/components/toggle/toggle-file";
import { BookMarkToggle } from "@/components/toggle/toggle-bookmark";

const NavigationItems = () => {
  return (
    <div className="flex flex-col items-center space-y-3">
      <BookMarkToggle />
      <FileToggle />
      <APIToggle />
      <InfomationToggle />
    </div>
  );
};

export default NavigationItems;
