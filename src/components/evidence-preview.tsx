"use client";
import { useId, useRef, useState } from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import { asset } from "@/lib/site";

export function EvidencePreview({
  src,
  thumbnailSrc,
  title,
  caption,
  width = 1400,
  height = 1000,
  className = "",
}: {
  src: string;
  thumbnailSrc?: string;
  title: string;
  caption: string;
  width?: number;
  height?: number;
  className?: string;
}) {
  const [zoomed, setZoomed] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const previousOverflow = useRef("");
  const titleId = useId();
  function close() {
    dialog.current?.close();
  }
  return (
    <div className={`evidence-preview ${className}`}>
      <button
        ref={trigger}
        className="evidence-trigger"
        aria-label={`Enlarge ${title}`}
        aria-haspopup="dialog"
        onClick={() => {
          previousOverflow.current = document.body.style.overflow;
          document.body.style.overflow = "hidden";
          dialog.current?.showModal();
        }}
      >
        <Image
          src={asset(thumbnailSrc ?? src)}
          alt={title}
          width={width}
          height={height}
          loading="lazy"
        />
        <span className="evidence-enlarge">
          <Maximize2 size={15} aria-hidden="true" /> Enlarge preview
        </span>
      </button>
      <dialog
        ref={dialog}
        className="evidence-dialog"
        aria-labelledby={titleId}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onClose={() => {
          document.body.style.overflow = previousOverflow.current;
          setZoomed(false);
          trigger.current?.focus();
        }}
      >
        <div className="evidence-dialog-content">
          <div className="evidence-dialog-header">
            <h3 id={titleId}>{title}</h3>
            <button
              autoFocus
              type="button"
              className="dialog-close"
              onClick={close}
              aria-label="Close preview"
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <div className="preview-toolbar">
            <button
              type="button"
              className="preview-zoom"
              aria-pressed={zoomed}
              onClick={() => setZoomed(!zoomed)}
            >
              {zoomed ? "Fit image" : "Zoom image"}
            </button>
            <span>
              {zoomed
                ? "Scroll or swipe to inspect the enlarged image."
                : "Open a closer view to read the details."}
            </span>
          </div>
          <div
            className={`evidence-full ${zoomed ? "is-zoomed" : ""}`}
            tabIndex={zoomed ? 0 : undefined}
            aria-label={zoomed ? "Scrollable enlarged image" : undefined}
          >
            <Image
              src={asset(src)}
              alt={title}
              width={width}
              height={height}
              loading="lazy"
            />
          </div>
          <p>{caption}</p>
        </div>
      </dialog>
    </div>
  );
}
