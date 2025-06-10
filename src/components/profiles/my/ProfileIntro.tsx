import { uiIcons } from "../../../constants/uiIcons";
import { Icon } from "@iconify/react";

export default function ProfileIntro() {
	return (
		<>
			<section className="rounded-xl p-6 w-fit shadow-sm flex flex-col md:flex-row items-start md:items-center gap-6">
				{/* Profile Picture */}
				<div className="w-64 h-64 rounded-full overflow-hidden">
					<img
						src="https://img.freepik.com/free-photo/lifestyle-people-emotions-casual-concept-confident-nice-smiling-asian-woman-cross-arms-chest-confident-ready-help-listening-coworkers-taking-part-conversation_1258-59335.jpg?semt=ais_hybrid&w=740"
						alt="Lisa Karlsson"
						className="w-full h-full object-cover"
					/>
				</div>

				{/* Info */}
				<div className="space-y-2">
					<div className="flex flex-wrap items-center gap-4">
						<h1 className="text-4xl font-bold">Lisa Karlsson</h1>
						<span className="flex items-center gap-1 px-2 py-1 text-xs bg-info-yellow-200 text-info-brown-900 rounded-full">
							<Icon
								icon={uiIcons.badges.topContributor}
								className="text-sm"
							/>
							Top Contributor
						</span>
					</div>

					<div className="flex gap-6 text-sm">
						<div>
							<strong className="block text-black">13</strong>{" "}
							Recipes
						</div>
						<div>
							<strong className="block text-black">182</strong>{" "}
							Followers
						</div>
						<div>
							<strong className="block text-black">58</strong>{" "}
							Following
						</div>
					</div>

					<p className="text-sm max-w-2xl pt-2 text-gray-700">
						Hi, I’m Lisa Karlsson! Cooking has always been my
						greatest passion, and I love experimenting in the
						kitchen to create delicious and unique recipes. I enjoy
						blending traditional flavors with modern twists to make
						dishes that are both comforting and exciting.
					</p>
				</div>

				<button className="border border-basic-900 rounded-full px-4 py-1 text-sm hover:bg-gray-100 transition-300 text-nowrap">
					Edit Profile
				</button>
			</section>
		</>
	);
}
