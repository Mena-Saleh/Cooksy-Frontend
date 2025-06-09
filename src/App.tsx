import "./App.css";
import NavBarWrapper from "./components/navigation/NavBarWrapper";
import HomePage from "./pages/HomePage";
import Footer from "./components/common/Footer";
import CreateRecipePage from "./pages/CreateRecipePage";
import RecipesPage from "./pages/RecipesPage";
import ConfirmEmailPage from "./pages/ConfirmEmailPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import AuthInitializer from "./components/auth/AuthInitializer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<AuthInitializer />
			<NavBarWrapper />

			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/add-recipe" element={<CreateRecipePage />} />
					<Route path="/recipes" element={<RecipesPage />} />
					<Route path="/confirm-email" element={<ConfirmEmailPage />} />
					<Route path="/reset-password" element={<ResetPasswordPage />} />
				</Routes>
			</main>

			<Footer />
		</Router>
	);
}

export default App;
