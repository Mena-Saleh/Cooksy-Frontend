import BaseForm from "../BaseForm";
import Button from "../../common/buttons/Button";
import OAuthButton from "../../common/buttons/OAuthButton";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { uiIcons } from "../../../constants/uiIcons";
import { useState } from "react";
import { register as registerAPI } from "../../../services/CooksyAPI/auth";
import { useAppDispatch } from '../../../redux/hooks';
import { login } from "../../../redux/slices/authSlice";
import { Register as RegisterModel } from "../../../models/auth/Register";

interface RegisterFormProps {
	onClose: () => void;
	onLoginClick: () => void;
	onRegisterDone: () => void;
}
export default function RegisterForm({ onClose, onLoginClick, onRegisterDone }: RegisterFormProps) {
	const { t: tForms } = useTranslation("forms");
	const dispatch = useAppDispatch();

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			setError("Passwords do not match");
			return;
		}

		setError(null);

		const payload: RegisterModel = {
			email,
			password,
			confirmPassword,
			firstName,
			lastName,
		};

		const response = await registerAPI(payload);

		if (response.success) {
			onRegisterDone();
		} else {
			console.log(response);
			setError(response.message ?? "Registration failed");
		}
	};

	return (
		<BaseForm onClose={onClose}>
			<div>
				<h3 className="text-center text-primary-500 mb-6">
					{tForms("register.title")}
				</h3>

				<form className="space-y-4" onSubmit={handleSubmit}>
					<div className="flex flex-col sm:flex-row gap-4">
						<input
							type="text"
							placeholder={tForms("register.fields.firstName")}
							className="w-full input"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
							required
						/>
						<input
							type="text"
							placeholder={tForms("register.fields.lastName")}
							className="w-full input"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							required
						/>
					</div>

					<input
						type="email"
						placeholder={tForms("register.fields.email")}
						className="w-full input"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<div className="relative">
						<input
							type="password"
							placeholder={tForms("register.fields.password")}
							className="w-full input pr-10"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<div className="relative mb-2">
						<input
							type="password"
							placeholder={tForms(
								"register.fields.confirmPassword"
							)}
							className="w-full input pr-10"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
					</div>

					{error && <p className="text-red-500 text-sm text-center mt-2 mb-0">{error}</p>}

					<div className="flex justify-center align-center mt-4">
						<Button type="submit">
							{tForms("buttons.createAccount")}
						</Button>
					</div>
				</form>

				<p className="text-center mt-4">
					{tForms("register.loginText")}
					<Button onClick={onLoginClick} variant="ghost" className="mx-1">
						{tForms("buttons.login")}
					</Button>
				</p>

				<div className="flex items-center gap-4 mt-6">
					<hr className="flex-1 border-basic-300 rounded-full" />
					<span className="text-sm text-basic-400">
						{tForms("register.alternative")}
					</span>
					<hr className="flex-1 border-basic-300 rounded-full" />
				</div>

				<div className="flex flex-col sm:flex-row gap-4 my-4 justify-center align-center">
					<OAuthButton provider="google">Google</OAuthButton>
					<OAuthButton provider="facebook">Facebook</OAuthButton>
				</div>
			</div>
		</BaseForm>
	);
}
