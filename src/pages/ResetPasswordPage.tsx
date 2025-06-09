import Hero from "../components/home/Hero";
import AuthFormContainer from "../components/forms/auth/AuthFormContainer";
import { FormType } from "../types/FormType";
import { useState } from "react";

export default function ResetPasswordPage() {
    const [formType, setFormType] = useState<FormType>("newPassword");

    return (
        <div className="my-30">
            <Hero />

            <AuthFormContainer
                isOpen={formType != null}
                formType={formType}
                onClose={() => setFormType(null)}
                setFormType={setFormType}
                showCloseButton={false}
            />
        </div>
    );
}
