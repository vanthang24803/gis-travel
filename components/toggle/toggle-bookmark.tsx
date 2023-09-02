"use client";

import * as React from "react";
import { Bookmark } from "lucide-react";

import { Button } from "@/components/ui/button";

export function BookMarkToggle() {
  return (
    <Button className="bg-transparent border-0" variant="outline" size="icon">
      <Bookmark className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Bookmark className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle API</span>
    </Button>
  );
}
