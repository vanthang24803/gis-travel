"use client";

import * as React from "react";
import { File, FileInput, FileOutput } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useModal } from "@/hooks/use-modal-store";

export function FileToggle() {
  const { onOpen } = useModal();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="bg-transparent border-0"
          variant="outline"
          size="icon"
        >
          <File className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <File className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem
          className="flex items-center justify-between p-2  hover:cursor-pointer space-x-3"
          onClick={() => onOpen("inpufile")}
        >
          <span>Input Execl File</span>
          <FileInput size={16} />
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center justify-between p-2  hover:cursor-pointer space-x-3">
          <span>Output Execl File</span>
          <FileOutput size={16} />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
