import "./App.css";
import RegisterForm from "./components/forms/RegisterForm";
import { useTranslation } from "react-i18next";

function App() {
	const { i18n } = useTranslation();

	i18n.changeLanguage("en");

	return (
		<div className="sm:mx-10 my-10">
			<RegisterForm />
		</div>
	);
}

export default App;
