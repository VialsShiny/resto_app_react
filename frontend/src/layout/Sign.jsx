import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

export default function Modal({ isOpen, onClose, children, label = "Modal" }) {
  const overlayRef = useRef(null);
  const firstFocusableRef = useRef(null);


  useEffect(() => {
    if (!isOpen) return;
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);


  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        firstFocusableRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);


  if (!isOpen) return null;


  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
      aria-label={label}
    >
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={(e) => {
          if (e.target === overlayRef.current) onClose();
        }}
      />


      <div className="relative z-10 w-full max-w-lg mx-4 bg-white rounded-2xl shadow-2xl p-6 animate__animated animate__bounceInDown">
        <button
          ref={firstFocusableRef}
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          aria-label="Fermer la fenêtre"
        >
          ✕
        </button>


        {children}
      </div>
    </div>,
    document.body
  );
}