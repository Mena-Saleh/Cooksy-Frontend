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
// import RecipeCard from "./components/recipes/RecipeCard";
// import Hero from "./components/home/Hero";
// import HomePage from "./pages/HomePage";
import Footer from "./components/common/Footer";
import CreateRecipePage from "./pages/CreateRecipePage";

// import {
// 	BrowserRouter as Router,
// 	Routes,
// 	Route,
// 	Navigate,
// } from "react-router-dom";

function App() {
	return (
		//  <Router>
		// 		<main>
		// 			<Routes>
		// 				<Route path="/" element={<HomePage />} />
		// 				<Route path="add-recipe" element={<CreateRecipePage />} />
		// 			</Routes>
		// 		</main>
		// </Router>

		<div>
			<NavBarWrapper />
			{/* <ForgotPasswordForm />
			<NewPasswordForm />
			<ResetLinkSentForm />
			<VerifyEmailForm />
			<EmailVerifiedForm />
			<LoginForm />
			<RegisterForm />
			<InfoForm /> */}

			<CreateRecipePage />
			{/* <HomePage /> */}
			{/* <div className="flex justify-center mt-10  ">
				<RecipeCard
					imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy4zLy1vwGVqeoDOiaOHkndS_t0rO53nmKCw&s"
					title="Shishkebab med baba ganoush"
					categories={["Meat", "Dessert"]}
					time="60 min"
					rating={3}
					reviews={25}
					comments={1}
					author={{
						name: "Maximillian Arthur",
						avatarUrl:
							"https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg",
					}}
				/>
			</div> */}
			<Footer />
		</div>
	);
}

export default App;



















// import "./App.css";
// import NavBarWrapper from "./components/navigation/NavBarWrapper";
// import HomePage from "./pages/HomePage";
// import Footer from "./components/common/Footer";
// import CreateRecipePage from "./pages/CreateRecipePage";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
// 	return (
// 		<Router>
// 			<NavBarWrapper />

// 			<main>
// 				<Routes>
// 					<Route path="/" element={<HomePage />} />
// 					<Route path="/add-recipe" element={<CreateRecipePage />} />
// 				</Routes>
// 			</main>

// 			<Footer />
// 		</Router>
// 	);
// }

// export default App;

