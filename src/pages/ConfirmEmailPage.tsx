import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { confirmEmail } from "../services/CooksyAPI/auth";
import UnderlinedHeading from "../components/common/UnderlinedHeading";

export default function ConfirmEmailPage() {
	const [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const { t: tAuth } = useTranslation("auth");

	const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
	const [message, setMessage] = useState<string | null>(null);
	const [redirectCountdown, setRedirectCountdown] = useState(5);

	useEffect(() => {
		const userId = searchParams.get("userId");
		const token = searchParams.get("token");

		if (!userId || !token) {
			setStatus("error");
			setMessage(tAuth("confirmEmailPage.invalidParams"));
			return;
		}

		setStatus("loading");

		confirmEmail(userId, token).then((response) => {
			if (response.success) {
				setStatus("success");
				setMessage(tAuth("confirmEmailPage.success"));
			} else {
				setStatus("error");
				setMessage(tAuth(response.message ?? "confirmEmailPage.failure"));
			}
		});
	}, [searchParams, navigate, tAuth]);

	// Countdown and redirect logic
	useEffect(() => {
		if (status !== "success") return;

		const interval = setInterval(() => {
			setRedirectCountdown((prev) => prev - 1);
		}, 1000);

		return () => clearInterval(interval);
	}, [status]);

	useEffect(() => {
		if (redirectCountdown === 0 && status === "success") {
			navigate("/");
		}
	}, [redirectCountdown, navigate, status]);

	return (
		<div className="relative mx-auto w-full mt-24 mb-10 sm:mt-[10%] h-[50vh] flex items-center justify-center">
			<div className="flex items-center justify-center">
				<div className="p-6 flex flex-col">
					<div className="mb-5">
						<UnderlinedHeading text={tAuth("confirmEmailPage.title")} variant="medium1"></UnderlinedHeading>
					</div>
					{status === "loading" && <p>{tAuth("confirmEmailPage.loading")}</p>}
					{message && (
						<p className={status === "error" ? "text-warning-500" : "text-primary-500"}>
							{message}
						</p>
					)}
					{status === "success" && (
						<p className="mt-2 text-sm text-basic-900">
							{tAuth("confirmEmailPage.redirecting", { seconds: redirectCountdown })}
						</p>
					)}
				</div>
				<img src="./svg/Mascot/MascotWaving.svg" alt="Mascot Waving" className="w-80" />
			</div>
		</div >
	);
}
