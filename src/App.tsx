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
import RecipeCard from "./components/recipes/RecipeCard";

function App() {
	return (
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

			<div className="flex justify-center mt-10  ">
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
			</div>
		</div>
	);
}

export default App;
