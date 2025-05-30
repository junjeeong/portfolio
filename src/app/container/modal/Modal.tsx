"use client";

import { ReactNode, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";

const Modal = ({ children }: { children: ReactNode }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({ top: 0 });
    }
  }, []);
  return createPortal(
    <dialog
      ref={dialogRef}
      className="modal"
      onClose={() => router.back()}
      onClick={(e) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((e.target as any).nodeName === "DIALOG") router.back();
      }}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root") as HTMLElement,
  );
};

export default Modal;
