import "./App.css";
import NavBarWrapper from "./components/navigation/NavBarWrapper";
// import RegisterForm from "./components/forms/RegisterForm";
// import InfoForm from "./components/forms/InfoForm";
// import LoginForm from "./components/forms/LoginForm";
// import EmailVerifiedForm from "./components/forms/EmailVerifiedForm";
// import VerifyEmailForm from "./components/forms/VerifyEmailForm";
// import ResetLinkSentForm from "./components/forms/ResetLinkSentForm";
// import NewPasswordForm from "./components/forms/NewPasswordForm";
// import ForgotPasswordForm from "./components/forms/ForgotPasswordForm";
import XButton from "./components/common/buttons/XButton";

function App() {
	return (
		<div className="">
			<NavBarWrapper />
			{/* <ForgotPasswordForm />
			<NewPasswordForm />
			<ResetLinkSentForm />
			<VerifyEmailForm />
			<EmailVerifiedForm />
			<LoginForm />
			<RegisterForm />
			<InfoForm /> */}
			<XButton></XButton>
		</div>
	);
}

export default App;
