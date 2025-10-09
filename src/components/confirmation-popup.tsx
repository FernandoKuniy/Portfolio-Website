"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ConfirmationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConfirmationPopup({ isOpen, onClose }: ConfirmationPopupProps) {
  // Auto-close after 2 seconds
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === 'undefined') return null;

  const modalContent = (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center animate-in fade-in duration-300">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-lg animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-[var(--bg)] border border-[var(--border)] rounded-lg shadow-2xl max-w-sm w-full mx-4 z-[100000] animate-in zoom-in-95 fade-in duration-300">
        {/* Content */}
        <div className="p-8 text-center">
          {/* Success Icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-500/10 mb-4">
            <svg className="h-8 w-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          {/* Message */}
          <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
            Message Sent!
          </h3>
          <p className="text-sm text-[var(--muted)]">
            Thank you for reaching out. I'll get back to you soon.
          </p>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
