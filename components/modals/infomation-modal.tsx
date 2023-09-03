"use client";

import { useModal } from "@/hooks/use-modal-store";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const InfomationsModal = () => {
  const { isOpen, onClose, type } = useModal();
  const isModalOpen = isOpen && type === "infomations";
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Infomations
          </DialogTitle>
        </DialogHeader>
        <div className="h-[20vh]">{/* INFOMATIONS */}</div>
      </DialogContent>
    </Dialog>
  );
};
