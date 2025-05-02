import { useRef } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import FormRouter from "./FormRouter";
import { FormType } from "../../types/FormType";

type OverlayPortalProps = {
    isOpen: boolean;
    formType: FormType;
    onClose: () => void;
    setFormType: (type: FormType) => void;
};

export default function FormContainer({
    isOpen,
    formType,
    onClose,
    setFormType,
}: OverlayPortalProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (e: React.MouseEvent) => {
        if (
            containerRef.current &&
            !containerRef.current.contains(e.target as Node)
        ) {
            onClose?.();
        }
    };


    return createPortal(
        <div
            onClick={handleClickOutside}
            className={clsx(
                "fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/20 transition-500 z-100",
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
        >
            <div
                ref={containerRef}
                onClick={(e) => e.stopPropagation()}
                className="transition duration-300 z-110 flex items-center justify-center"
            >
                <FormRouter
                    formType={formType}
                    onClose={onClose}
                    setFormType={setFormType}
                />
            </div>
        </div>,
        document.body
    );
}
