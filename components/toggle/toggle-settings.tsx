"use client";

import * as React from "react";
import { Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal-store";

export function SettingToggle() {
  const { onOpen } = useModal();

  return (
    <Button className="bg-transparent border-0" variant="outline" size="icon"
      onClick={() => onOpen("settings")}
    >
      <Settings className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Settings className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle Settings</span>
    </Button>
  );
}
