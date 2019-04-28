var recipeOne = 
{
	recipe_name: "Crockpot Chili",
	url: "images/chili.jpg",
	serving_size: "6",
	prep_time: "25 Minutes",
	cooking_time: "6 Hours",
	difficulty: "Medium",
	ingredients: ["2 tbsp. cooking oil","1 cup onion","1 cup chopped peppers","4 tbsp. Chili powder","1 tsp. Hot chili powder (optional)","1 lb ground beef or chicken",
					"2 cans Red Beans","2 cans Kidney Beans","2 cans Tomato Puree","2 cans Tomato Sauce","1 cup shredded cheese (optional)","1/2 cup sour cream (optional)"],
	instructions: ["Heat cooking oil in 2 quart skillet","Saute onions and peppers for 5 minutes","Add spices and stir for 30 seconds",
					"Add meat and cook until browned Approximately 15 minutes","Pour contents of skillet into 3 quart crock pot","Rinse beans and place in crockpot",
					"Open and pour Tomato puree and sauce into crock pot","Cover crockpot and cook on low for 6 hours","Serve into individual bowls and top with sour cream and cheese"]
};

var recipeTwo = 
{
	recipe_name: "Tilapia with Olives, Mushrooms, and Tomatoes",
	url: "images/fish.jpg",
	serving_size: "4",
	prep_time: "10 Minutes",
	cooking_time: "25 MInutes",
	difficulty: "High",
	ingredients:["1 tablespoon extra virgin olive oil", "1 small onion, 1/4 inch slices, sliced lengthwise",
				 "1 clove garlic, minced (1 teaspoon)","1 14-ounce can crushed tomatoes, undrained",
				 "1 cup sliced cremini or button mushrooms", "3/4 cup green pimento-stuffed olives, coarsely chopped", "1 Tbsp chopped fresh oregano or 1/2 teaspoon dried oregano, crushed",
				 "1/4 teaspoon salt","1/8 teaspoon freshly ground pepper","4 tilapia fillets (6 to 8 ounces each)"],
	instructions:["Cook the onions and garlic: Heat olive oil in a large skillet over medium heat. Add the 					sliced onions and cook until translucent, about 5 minutes. Add the garlic and cook a minute 				more.",
				"Make the sauce: Add the canned tomatoes and their juices. Add the sliced mushrooms, chopped olives, oregano, salt and pepper. Bring to a simmer.",
				 "Add the fish: Lay the fish fillets gently on top of the onion tomato olive mixture and spread a little sauce over the fish.",
				  "Serve: Use a wide spatula to lift the fillets from the pan to a serving plate. Spoon sauce over fish."
				 ]
};

var recipeThree =
{
	recipe_name: "Quick & Easy Hamburger Soup",
	url: "images/hamburger.jpg",
	serving_size: "6",
	prep_time: "10 mins",
	cooking_time: "30 mins",
	difficulty: "Low", 
	ingredients:["1 to 1 1/3 pound ground beef",
				 "1 cup diced yellow onion (from 1 small onion or 1/2 large onion)",
				 "2 stalks celery, diced",
				 "2 large carrots, diced",
				 "1 sweet bell pepper, seeded and diced",
				 "3 cloves garlic, minced",
				 "1 can (14.5 oz) diced tomatoes",
				 "2 tablespoons tomato paste",
				 "1 teaspoon dried oregano",
				 "1/2 teaspoon salt",
				 "1/2 teaspoon ground black pepper",
				 "2 cups beef broth",
				 "1/2 cup red wine, optional",
				 "1 cup elbow macaroni, optional"
	],
	instructions: ["Brown the beef: In a large Dutch oven  or stock pot over medium heat, brown the ground beef, 				breaking it apart with a wooden spoon into large chunks",
				   "Cook the vegetables: Pour off all but 1 tablespoon of the rendered fat from the ground beef (or add enough olive oil to make 1 tablespoon if there's not much fat).",
				   "Add the seasonings, tomatoes, and broth: Stir in the tomato paste and garlic, and cook about 30 seconds, until fragrant. Add in the oregano, salt, and pepper, and stir to combine.",
				   "Simmer the soup: Bring the soup to a rapid simmer. Reduce the heat to medium-low, cover the pot, and cook for about 20 minutes. If you are adding elbow macaroni, add it halfway through cooking, and cook until the pasta is tender.",
				   " Serve immediately. Leftovers will keep up to 5 days refrigerated, or up to 3 months frozen."
	]
};
	
var allRecipe = {
	recipes:[recipeOne, recipeTwo, recipeThree]
};

var allRecipeJSON = JSON.stringify(allRecipe);

localStorage.setItem("allRecipe",allRecipeJSON);