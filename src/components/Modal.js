import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = ({ onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 z-50 h-screen w-full bg-[#eeececa7] md:hidden"
      onClick={onClose}
    ></div>
  );
};

const ModalOverlay = ({ children }) => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0
       z-50 rounded-tl-3xl rounded-tr-3xl bg-[#fdfdfdf7] p-6 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.2)] duration-1000 md:hidden"
    >
      {children}
    </div>
  );
};

const Modal = ({ onClose, children }) => {
  const portalElement = document.getElementById("overlays");

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </Fragment>
  );
};

export default Modal;
