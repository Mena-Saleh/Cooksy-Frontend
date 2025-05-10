interface ErrorMessageProps {
    message?: string;
    className?: string;
}

export default function ErrorMessage({ message, className = "" }: ErrorMessageProps) {
    if (!message) return null;

    return (
        <p className={`text-warning-500 text-xs ml-2 mt-1 -mb-3 ${className}`}>
            {message}
        </p>
    );
}
