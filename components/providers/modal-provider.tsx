"use client";

import { useEffect, useState } from "react";
import { SettingsModal } from "@/components/modals/settings-modal";
import { InfomationsModal } from "@/components/modals/infomation-modal";
import { APIModal } from "@/components/modals/api-modal";
import { InputFileModal } from "@/components/modals/input-file-modal";
import { BookMarkModal } from "@/components/modals/bookmark-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <SettingsModal />
      <InfomationsModal />
      <APIModal />
      <InputFileModal />
      <BookMarkModal />
    </>
  );
};
