import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPasswordForm from "./ForgotPasswordForm";
import ResetLinkSentForm from "./ResetLinkSentForm";
import NewPasswordForm from "./NewPasswordForm";
import ConfirmEmailForm from "./ConfirmEmailForm";
import EmailVerifiedForm from "./EmailVerifiedForm";
import InfoForm from "./InfoForm";
import { FormType } from "../../../types/FormType";


export default function AuthFormRouter({ formType, onClose, setFormType }: {
    formType: FormType;
    onClose: () => void;
    setFormType: (type: FormType) => void;
}) {
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
                />);
        case "register":
            return (
                <RegisterForm
                    onLoginClick={() => setFormType("login")}
                    onClose={onClose}
                    onRegisterDone={() => setFormType("verifyEmail")}
                />
            );
        case "forgot":
            return <ForgotPasswordForm onClose={onClose} />;
        case "resetSent":
            return <ResetLinkSentForm onClose={onClose} />;
        case "newPassword":
            return <NewPasswordForm onClose={onClose} />;
        case "verifyEmail":
            return <ConfirmEmailForm onClose={onClose} />;
        case "emailVerified":
            return <EmailVerifiedForm onClose={onClose} />;
        default:
            return null;
    }
}
