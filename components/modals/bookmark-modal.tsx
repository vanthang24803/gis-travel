"use client";

import { useModal } from "@/hooks/use-modal-store";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const BookMarkModal = () => {
  const { isOpen, onClose, type } = useModal();
  const isModalOpen = isOpen && type === "bookmark";

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Bookmark
          </DialogTitle>
        </DialogHeader>
        <div className="h-[20vh]">{/* BookMark */}</div>
      </DialogContent>
    </Dialog>
  );
};
