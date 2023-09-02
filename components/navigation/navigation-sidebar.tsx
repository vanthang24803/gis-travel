"use client";

import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/toggle/toggle-themes";
import { SettingToggle } from "@/components/toggle/toggle-settings";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import NavigationLogo from "@/components/navigation/navigation-logo";
import NavigationItems from "@/components/navigation/navigation-items";

export const NavigationSidebar = () => {
  return (
    <div className="space-y-4 flex flex-col  items-center h-full text-primary w-full dark:bg-[#1E1F22] bg-[#E3E5E8] py-3">
      <NavigationLogo />
      <Separator className="h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto" />
      <ScrollArea className="flex-1 w-full">
        <NavigationItems />
      </ScrollArea>
      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
        <SettingToggle />
        <ModeToggle />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-[48px] w-[48px]",
            },
          }}
        />
      </div>
    </div>
  );
};
