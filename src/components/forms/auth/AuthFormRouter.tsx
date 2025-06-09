import {
    AnimatePresence,
    motion
} from "framer-motion";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import ResetLinkSentForm from "./ResetLinkSentForm";
import ResetPasswordForm from "./ResetPasswordForm";
import ConfirmEmailForm from "./ConfirmEmailForm";
import EmailVerifiedForm from "./EmailVerifiedForm";
import PasswordResetSuccessfullyForm from "./PasswordResetSuccessfullyForm";
import InfoForm from "./InfoForm";
import { FormType } from "../../../types/FormType";


interface AuthFormRouterProps {
    formType: FormType;
    onClose: () => void;
    setFormType: (type: FormType) => void;
    showCloseButton?: boolean;
}

export default function AuthFormRouter({ formType, onClose, setFormType, showCloseButton = true }: AuthFormRouterProps) {
    const getFormComponent = () => {
        switch (formType) {
            case "info":
                return (
                    <InfoForm
                        onClose={onClose}
                        onLoginClick={() => setFormType("login")}
                        onRegisterClick={() => setFormType("register")}
                    />
                );
            case "login":
                return (
                    <LoginForm
                        onClose={onClose}
                        onRegisterClick={() => setFormType("register")}
                        onForgetPasswordClick={() => setFormType("forgot")}
                    />
                );
            case "register":
                return (
                    <RegisterForm
                        onLoginClick={() => setFormType("login")}
                        onClose={onClose}
                        onRegisterDone={() => setFormType("verifyEmail")}
                    />
                );
            case "forgot":
                return <ForgotPasswordForm onClose={onClose} onResetLinkSent={() => setFormType("resetSent")} />;
            case "resetSent":
                return <ResetLinkSentForm onClose={onClose} />;
            case "newPassword":
                return <ResetPasswordForm onClose={onClose} showCloseButton={showCloseButton} onResetPasswordDone={() => setFormType("passwordResetSuccessfully")} />;
            case "verifyEmail":
                return <ConfirmEmailForm onClose={onClose} />;
            case "emailVerified":
                return <EmailVerifiedForm onClose={onClose} />;
            case "passwordResetSuccessfully":
                return <PasswordResetSuccessfullyForm onClose={onClose} showCloseButton={showCloseButton} />;
            default:
                return null;
        }
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={formType}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -40, scale: 0.9 }}
                transition={{ duration: 0.2 }}
            >
                {getFormComponent()}
            </motion.div>
        </AnimatePresence>
    );
}
