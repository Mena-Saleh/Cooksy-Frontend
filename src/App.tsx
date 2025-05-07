import "./App.css";
import NavBarWrapper from "./components/navigation/NavBarWrapper";
import HomePage from "./pages/HomePage";
import Footer from "./components/common/Footer";
import CreateRecipePage from "./pages/CreateRecipePage";
import RecipesPage from "./pages/RecipesPage";
import ConfirmEmailPage from "./pages/ConfirmEmailPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
	return (
		<Router basename="/Cooksy-Frontend/">
			<NavBarWrapper />



			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/add-recipe" element={<CreateRecipePage />} />
					<Route path="/recipes" element={<RecipesPage />} />
					<Route path="/confirm-email" element={<ConfirmEmailPage />} />
				</Routes>
			</main>

			<Footer />
		</Router>
	);
}

export default App;
