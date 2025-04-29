export const categoryIcons = {
	Appetizer: { icon: "mdi:food-outline", label: "Appetizer" },
	BBQ: { icon: "mdi:grill-outline", label: "BBQ" },
	Beverage: { icon: "mdi:glass-cocktail", label: "Beverage" },
	Breakfast: { icon: "mdi:weather-sunset", label: "Breakfast" },
	Chicken: { icon: "mdi:food-drumstick-outline", label: "Chicken" },
	Dessert: { icon: "mdi:cupcake", label: "Dessert" },
	FastFood: { icon: "mdi:hamburger", label: "Fast food" },
	GlutenFree: { icon: "mdi:alpha-g-circle-outline", label: "Gluten-free" },
	Healthy: { icon: "mdi:heart-outline", label: "Healthy" },
	Meat: { icon: "hugeicons:steak", label: "Meat" },
	Pasta: { icon: "mdi:food-variant", label: "Pasta" },
	Salad: { icon: "mdi:leaf", label: "Salad" },
	Seafood: { icon: "mdi:fish", label: "Seafood" },
	Snack: { icon: "mdi:food-apple", label: "Snack" },
	Soup: { icon: "mdi:pot-mix", label: "Soup" },
	Vegan: { icon: "iconoir:plant", label: "Vegan" },
	Vegetarian: { icon: "mdi:food-apple-outline", label: "Vegetarian" },
	Wraps: { icon: "mdi:wrap", label: "Wraps" },
};

export type Category = keyof typeof categoryIcons;
