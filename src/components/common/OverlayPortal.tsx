import { ReactNode, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

type OverlayPortalProps = {
    children: ReactNode;
    isOpen: boolean;
    onClose?: () => void;
    className?: string;
};

export default function OverlayPortal({ children, isOpen, onClose, className }: OverlayPortalProps) {
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
                className={clsx('transition-500 z-110 flex items-center justify-center', className)}
            >
                {children}
            </div>
        </div>,
        document.body
    );
}
