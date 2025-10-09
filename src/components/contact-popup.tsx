"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function ContactPopup({ isOpen, onClose, onSuccess }: ContactPopupProps) {
  const [state, set] = useState<"idle"|"sending"|"ok"|"err">("idle");

  // Prevent scrolling when popup is open
  useEffect(() => {
    if (isOpen) {
      // Store the current scroll position
      const scrollY = window.scrollY;
      
      // Prevent scrolling by setting body styles
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      // Cleanup function to restore scrolling
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    set("sending");
    const fd = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: fd.get("name"),
        email: fd.get("email"),
        message: fd.get("message"),
      }),
    });
    set(res.ok ? "ok" : "err");
    
    // Call onSuccess callback after successful submission
    if (res.ok) {
      // Reset form immediately
      (e.target as HTMLFormElement).reset();
      set("idle");
      // Transition immediately to confirmation popup
      onSuccess();
    }
  }

  if (!isOpen || typeof document === 'undefined') return null;

  const modalContent = (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center animate-in fade-in duration-200">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-lg animate-in fade-in duration-200"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-[var(--bg)] border border-[var(--border)] rounded-lg shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto z-[100000] animate-in zoom-in-95 fade-in duration-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">Get in Touch</h2>
          <button
            onClick={onClose}
            className="text-[var(--muted)] hover:text-[var(--accent-400)] transition-colors duration-200 cursor-pointer"
            aria-label="Close contact form"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="popup-name" className="block text-sm font-medium text-[var(--foreground)] mb-2">
              Name
            </label>
            <input 
              id="popup-name" 
              name="name" 
              required 
              className="w-full border border-[var(--border)] bg-[var(--bg)] text-[var(--foreground)] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-500)] focus:border-transparent transition-all duration-200" 
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="popup-email" className="block text-sm font-medium text-[var(--foreground)] mb-2">
              Email
            </label>
            <input 
              id="popup-email" 
              name="email" 
              type="email" 
              required 
              className="w-full border border-[var(--border)] bg-[var(--bg)] text-[var(--foreground)] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-500)] focus:border-transparent transition-all duration-200" 
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="popup-message" className="block text-sm font-medium text-[var(--foreground)] mb-2">
              Message
            </label>
            <textarea 
              id="popup-message" 
              name="message" 
              required 
              rows={4} 
              className="w-full border border-[var(--border)] bg-[var(--bg)] text-[var(--foreground)] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent-500)] focus:border-transparent transition-all duration-200 resize-none" 
              placeholder="Tell me about your project or just say hello!"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button 
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-[var(--border)] text-[var(--muted)] rounded-md hover:text-[var(--accent-400)] hover:border-[var(--accent-500)] transition-all duration-200 cursor-pointer"
            >
              Cancel
            </button>
            <button 
              type="submit"
              disabled={state === "sending"}
              className="flex-1 px-4 py-2 bg-[var(--accent-500)] text-white rounded-md hover:bg-[var(--accent-600)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer"
            >
              {state === "sending" ? "Sending..." : "Send Message"}
            </button>
          </div>

          {/* Error message only */}
          {state === "err" && (
            <div role="status" aria-live="polite" className="text-sm text-center">
              <span className="text-red-400 flex items-center justify-center gap-2">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Failed to send. Please try again.
              </span>
            </div>
          )}
        </form>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
