export const uiIcons = {
	profileLight: "mdi-light:account",
	bellLight: "mdi-light:bell",
	uploadLight: "mdi-light:upload",
	heartOutline: "mdi:heart-outline",
	heartLight: "mdi-light:heart",
	calendarLight: "mdi-light:calendar",
	addRounded: "material-symbols:add-rounded",
	clockOutline: "mdi:clock-outline",
	bookOutline: "mdi:book-open-variant-outline",
	settingsLight: "mdi-light:settings",
	commentLight: "iconamoon:comment-light",
	logoutLight: "mdi-light:logout",
} as const;

export type UiIconKeys = keyof typeof uiIcons;
