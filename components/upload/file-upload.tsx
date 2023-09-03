"use client";

import { FileIcon, X } from "lucide-react";
import Image from "next/image";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
}

export const FileUpload = ({ onChange, value }: FileUploadProps) => {
  const fileType = value?.split(".").pop();

  return (
    <div className="relative flex items-center p-6 mt-2 rounded-md dark:bg-background/10 bg-neutral-200 hover:cursor-pointer ">
      <FileIcon className="h-10 w-10 fill-indigo-200 stroke-indigo-400" />
      <a
        href={value}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
      >
        {value}
      </a>
    </div>
  );
};
