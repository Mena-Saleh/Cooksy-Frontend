export const uiIcons = {
	actions: {
		add: "material-symbols:add-rounded",
		cancel: "iconoir:cancel",
		check: "lucide:check",
		magnify: "mdi:magnify",
	},
	auth: {
		google: "flat-color-icons:google",
		facebook: "logos:facebook",
	},
	profile: {
		account: "mdi-light:account",
		bell: "mdi-light:bell",
		upload: "mdi-light:upload",
		settings: "mdi-light:settings",
		logout: "mdi-light:logout",
	},
	content: {
		heartFilled: "mdi:heart",
		heartOutline: "mdi-light:heart",
		calendar: "mdi-light:calendar",
		clock: "mdi:clock-outline",
		bookOutline: "mdi:book-open-variant-outline",
		bookFilled: "mdi:book-open",
		folder: "mdi:folder",
		comment: "iconamoon:comment-light",
		chefHat: "hugeicons:chef-hat",
		usersGroup: "flowbite:users-group-outline",
	},
	star: {
		filled: "material-symbols-light:star-rounded",
		outline: "material-symbols-light:star-outline-rounded",
	},
	nav: {
		hamburger: "charm:menu-hamburger",
		globe: "material-symbols:globe",
		chevronDown: "tabler:chevron-down",
		chevronRight: "tabler:chevron-right",
	},
	visibility: {
		eyeOpen: "lucide:eye",
		eyeClosed: "lucide:eye-off",
	},
} as const;

export type UiIconKeys = keyof typeof uiIcons;
