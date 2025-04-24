export default function NavProfile() {
	return (
		<div className="relative w-8 h-8 rounded-full">
			{/* Avatar Image */}
			<img
				src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
				alt="User avatar"
				className="w-full h-full rounded-full object-cover cursor-pointer"
			/>

			{/* Notification Badge */}
			<div className="absolute -top-1 -right-2 border border-basic-100 bg-secondary-500 text-basic-100 text-xs w-5 h-5 rounded-full flex items-center justify-center font-pacifico">
				10
			</div>
		</div>
	);
}
