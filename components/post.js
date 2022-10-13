const Post = ({ username, profile_picture, badges, desc, image }) => {
	let profileBadges = [];

	badges.forEach((badge) => {
		let data = null;

		switch (badge) {
			case "VERIFIED":
				data = {
					title: "Verified",
					badge: "fas fa-certificate",
					cursor: "pointer",
				};
				break;
		}

		if (data) profileBadges.push(data);
	});

	return (
		<div className="rounded overflow-hidden shadow-xl dark:bg-gray-600">
			<div className="px-6 py-4">
				<div className="flex items-center">
					{/* Profile Picture */}
					{profile_picture && (
						<img
							alt="Profile Picture"
							src={profile_picture}
							className="w-10 h-10 rounded-full mr-2 cursor-not-allowed"
						/>
					)}

					{/* Username */}
					<h1 className="font-bold text-xl text-base cursor-pointer">
						{username}
					</h1>
					<div className="pr-1"></div>

					{/* Badges */}
					<div
						id="badges"
						className="grid grid-cols-2 md:grid-cols-3 gap-2 relative"
					>
						{profileBadges.map((badge) => {
							<span
								className={`text-xl text-blue-600 cursor-${badge.cursor}`}
								title={badge.title}
							>
								<i class={badge.badge}></i>
							</span>;
						})}
					</div>
				</div>

				<div className="p-2"></div>

				{/* Post Description */}
				<p className="text-gray-700 dark:text-white text-base">
					{desc}
				</p>

				{/* Post Image */}
				{image && (
					<>
						<div className="p-2"></div>
						<img
							alt="Post Image"
							className="rounded object-contain lg:h-60 cursor-pointer"
							src={image}
						/>
					</>
				)}
			</div>
		</div>
	);
};

export default Post;
