import { Icon } from "@iconify/react";
import { uiIcons } from "../../../constants/uiIcons";
import { useTranslation } from "react-i18next";

interface Badge {
	key: keyof typeof uiIcons.badges;
	// label: string;
}

interface BadgesProps {
	badges: Badge[];
}

export default function Badges({ badges }: BadgesProps) {
    const { t: tBadges } = useTranslation("badges");
	return (
		<div className="rounded-xl p-6 w-fit shadow-sm space-y-3">
			<h3 className="font-semibold mb-4">{tBadges("title")}</h3>
			<div className="flex flex-wrap gap-3 mx-auto w-full max-w-fit sm:max-w-screen-sm">
				{badges.map((badge) => (
					<div
						key={badge.key}
						className="flex items-center gap-1 text-xs bg-info-yellow-100 text-info-brown-900 px-3 py-1 rounded-full whitespace-nowrap"
					>
						<Icon
							icon={
								uiIcons.badges[
									badge.key as keyof typeof uiIcons.badges
								]
							}
							className="text-sm"
						/>
						{tBadges(badge.key)}
					</div>
				))}
			</div>
		</div>
	);
}
