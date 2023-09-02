"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { ContentSearch } from "./conntent-search";
import { ContentHeader } from "./content-header";

const ContentSidebar = () => {
  return (
    <div className="flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] bg-[#F2F3F5]">
        <ContentHeader />

      <ScrollArea className="flex-1 px-3">
        <div className="mt-2">
          <ContentSearch />
        </div>
      </ScrollArea>
    </div>
  );
};

export default ContentSidebar;
