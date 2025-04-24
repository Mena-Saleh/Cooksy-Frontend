import "./App.css";
import NewPasswordForm from "./components/forms/NewPasswordForm";
import { useTranslation } from "react-i18next";

function App() {
	const { i18n } = useTranslation();

	i18n.changeLanguage("en");

	return (
		<div className="sm:mx-10 my-10">
			<NewPasswordForm />
		</div>
	);
}

export default App;
