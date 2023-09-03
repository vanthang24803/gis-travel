"use client";

import * as React from "react";
import { Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal-store";

export function InfomationToggle() {
  const { onOpen } = useModal();
  return (
    <Button className="bg-transparent border-0" variant="outline" size="icon"
      onClick={() => onOpen("infomations")}
    >
      <Info className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Info className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle Infomations</span>
    </Button>
  );
}
