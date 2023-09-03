"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { ContentSearch } from "@/components/content/conntent-search";
import { Separator } from "@/components/ui/separator";
import ContentSection from "./content-section";

const ContentSidebar = () => {
  return (
    <div className="flex flex-col h-full text-primary w-full dark:bg-[#2B2D31] bg-[#F2F3F5]">
      <ScrollArea className="flex-1 px-3">
        <div className="mt-2">
          <ContentSearch />
        </div>
        <Separator className="bg-zinc-200 dark:bg-zinc-700 rounded-md my-2" />
        <div className="mb-2">
          <ContentSection />
        </div>
      </ScrollArea>
    </div>
  );
};

export default ContentSidebar;
