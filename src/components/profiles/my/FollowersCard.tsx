import { useState } from "react";
import Button from "../../common/buttons/Button";
import XButton from "../../common/buttons/XButton";

interface Follower {
	name: string;
	avatarUrl: string;
	recipeCount: number;
}

interface FollowersCardProps {
	title?: string;
	followers: Follower[];
}

export default function FollowersCard({ followers }: FollowersCardProps) {
	const [open, setOpen] = useState(false);
	const [search, setSearch] = useState("");

	const filteredFollowers = followers.filter((follower) =>
		follower.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className="rounded-xl p-6 w-full shadow-sm space-y-3 max-w-6xl relative">
			<h3 className="font-semibold mb-4">Following</h3>

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 place-items-center">
				{followers.slice(0, 6).map((follower, index) => (
					<div
						key={index}
						className="flex flex-col items-center text-center space-y-2"
					>
						<img
							src={follower.avatarUrl}
							alt={follower.name}
							className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover shadow"
						/>
						<span className="text-sm font-medium">
							{follower.name}
						</span>
						<span className="text-xs text-gray-500">
							{follower.recipeCount} recipes
						</span>
					</div>
				))}
			</div>

			{/* View All Button */}
			<div className="flex justify-end mt-4">
				<Button variant="ghost" onClick={() => setOpen(true)}>
					View all
				</Button>
			</div>

			{/* Modal */}
			{open && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
					<div className="bg-white rounded-xl max-w-md w-full p-6 space-y-4 shadow-lg">
						<div className="flex justify-between items-center mb-2">
							<h4 className="text-lg font-semibold">Following</h4>
							<XButton onClick={() => setOpen(false)} />
						</div>

						{/* Search input */}
						<input
							type="text"
							placeholder="Search followers..."
							value={search}
							onChange={(e) => setSearch(e.target.value)}
							className="input w-full"
						/>

						{/* List */}
						<div className="space-y-3 max-h-[400px] overflow-y-auto">
							{filteredFollowers.map((follower, index) => (
								<div
									key={index}
									className="flex items-center justify-between gap-4 border border-basic-100 rounded-lg px-4 py-2 cursor-pointer"
								>
									<div className="flex items-center gap-3">
										<img
											src={follower.avatarUrl}
											alt={follower.name}
											className="w-10 h-10 rounded-full object-cover"
										/>
										<div>
											<div className="text-sm font-medium">
												{follower.name}
											</div>
											<div className="text-xs text-gray-500">
												{follower.recipeCount} recipes
											</div>
										</div>
									</div>

									<Button
										variant="ghost"
										className="text-xs!"
									>
										Unfollow
									</Button>
								</div>
							))}

							{filteredFollowers.length === 0 && (
								<div className="text-sm text-center text-gray-500 pt-4">
									No matching followers found.
								</div>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
