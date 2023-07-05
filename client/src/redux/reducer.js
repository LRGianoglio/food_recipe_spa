import { GET_RECIPES, GET_DIETS, SEARCH_BY_NAME, FILTER_BY, ORDER_BY,} from "./types";

const initialState = {
    recipes: [],
    filteredRecipes: [],
    doubleFilteredRecipes: [
        {
            "id": "12242272-0353-4ca3-a877-b277ac326d2a",
            "name": "Bizcochitos",
            "img": "https://cdn0.recetasgratis.net/es/posts/3/6/1/bizcochitos_de_crema_y_harina_57163_orig.jpg",
            "health_score": 37,
            "diets": [
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 782585,
            "name": "Cannellini Bean and Asparagus Salad with Mushrooms",
            "img": "https://spoonacular.com/recipeImages/782585-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 716426,
            "name": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
            "img": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
            "health_score": 75,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 715497,
            "name": "Berry Banana Breakfast Smoothie",
            "img": "https://spoonacular.com/recipeImages/715497-312x231.jpg",
            "health_score": 64,
            "diets": [
                "lacto ovo vegetarian"
            ]
        },
        {
            "id": 715415,
            "name": "Red Lentil Soup with Chicken and Turnips",
            "img": "https://spoonacular.com/recipeImages/715415-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free"
            ]
        },
        {
            "id": 716406,
            "name": "Asparagus and Pea Soup: Real Convenience Food",
            "img": "https://spoonacular.com/recipeImages/716406-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "lacto ovo vegetarian",
                "primal",
                "vegan"
            ]
        },
        {
            "id": 644387,
            "name": "Garlicky Kale",
            "img": "https://spoonacular.com/recipeImages/644387-312x231.jpg",
            "health_score": 83,
            "diets": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "lacto ovo vegetarian",
                "primal",
                "whole 30",
                "vegan"
            ]
        },
        {
            "id": 715446,
            "name": "Slow Cooker Beef Stew",
            "img": "https://spoonacular.com/recipeImages/715446-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free"
            ]
        },
        {
            "id": 782601,
            "name": "Red Kidney Bean Jambalaya",
            "img": "https://spoonacular.com/recipeImages/782601-312x231.jpg",
            "health_score": 96,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 795751,
            "name": "Chicken Fajita Stuffed Bell Pepper",
            "img": "https://spoonacular.com/recipeImages/795751-312x231.jpg",
            "health_score": 85,
            "diets": [
                "gluten free"
            ]
        },
        {
            "id": 766453,
            "name": "Hummus and Za'atar",
            "img": "https://spoonacular.com/recipeImages/766453-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 716627,
            "name": "Easy Homemade Rice and Beans",
            "img": "https://spoonacular.com/recipeImages/716627-312x231.jpg",
            "health_score": 60,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 664147,
            "name": "Tuscan White Bean Soup with Olive Oil and Rosemary",
            "img": "https://spoonacular.com/recipeImages/664147-312x231.jpg",
            "health_score": 94,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 640941,
            "name": "Crunchy Brussels Sprouts Side Dish",
            "img": "https://spoonacular.com/recipeImages/640941-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "lacto ovo vegetarian",
                "primal"
            ]
        },
        {
            "id": 715495,
            "name": "Turkey Tomato Cheese Pizza",
            "img": "https://spoonacular.com/recipeImages/715495-312x231.jpg",
            "health_score": 39,
            "diets": []
        },
        {
            "id": 794349,
            "name": "Broccoli and Chickpea Rice Salad",
            "img": "https://spoonacular.com/recipeImages/794349-312x231.jpg",
            "health_score": 83,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 716381,
            "name": "Nigerian Snail Stew",
            "img": "https://spoonacular.com/recipeImages/716381-312x231.jpg",
            "health_score": 66,
            "diets": [
                "gluten free",
                "dairy free",
                "whole 30"
            ]
        },
        {
            "id": 660306,
            "name": "Slow Cooker: Pork and Garbanzo Beans",
            "img": "https://spoonacular.com/recipeImages/660306-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free"
            ]
        },
        {
            "id": 756814,
            "name": "Powerhouse Almond Matcha Superfood Smoothie",
            "img": "https://spoonacular.com/recipeImages/756814-312x231.jpg",
            "health_score": 52,
            "diets": [
                "gluten free",
                "dairy free"
            ]
        },
        {
            "id": 715769,
            "name": "Broccolini Quinoa Pilaf",
            "img": "https://spoonacular.com/recipeImages/715769-312x231.jpg",
            "health_score": 74,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 642129,
            "name": "Easy To Make Spring Rolls",
            "img": "https://spoonacular.com/recipeImages/642129-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free",
                "pescatarian"
            ]
        },
        {
            "id": 642605,
            "name": "Farro With Mushrooms and Asparagus",
            "img": "https://spoonacular.com/recipeImages/642605-312x231.jpg",
            "health_score": 80,
            "diets": [
                "dairy free",
                "lacto ovo vegetarian"
            ]
        },
        {
            "id": 636589,
            "name": "Butternut Squash Frittata",
            "img": "https://spoonacular.com/recipeImages/636589-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free"
            ]
        },
        {
            "id": 646738,
            "name": "Herbivoracious' White Bean and Kale Soup",
            "img": "https://spoonacular.com/recipeImages/646738-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 715540,
            "name": "Summer Berry Salad",
            "img": "https://spoonacular.com/recipeImages/715540-312x231.jpg",
            "health_score": 95,
            "diets": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "lacto ovo vegetarian",
                "primal",
                "vegan"
            ]
        },
        {
            "id": 663559,
            "name": "Tomato and lentil soup",
            "img": "https://spoonacular.com/recipeImages/663559-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 662670,
            "name": "Swiss Chard Wraps",
            "img": "https://spoonacular.com/recipeImages/662670-312x231.jpg",
            "health_score": 90,
            "diets": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "lacto ovo vegetarian",
                "primal",
                "vegan"
            ]
        },
        {
            "id": 640062,
            "name": "Corn Avocado Salsa",
            "img": "https://spoonacular.com/recipeImages/640062-312x231.jpg",
            "health_score": 71,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 715421,
            "name": "Cheesy Chicken Enchilada Quinoa Casserole",
            "img": "https://spoonacular.com/recipeImages/715421-312x231.jpg",
            "health_score": 38,
            "diets": [
                "gluten free"
            ]
        },
        {
            "id": 648320,
            "name": "Jade Buddha Salmon Tartare",
            "img": "https://spoonacular.com/recipeImages/648320-312x231.jpg",
            "health_score": 89,
            "diets": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "primal",
                "pescatarian"
            ]
        },
        {
            "id": 716432,
            "name": "Finger Foods: Frittata Muffins",
            "img": "https://spoonacular.com/recipeImages/716432-312x231.jpg",
            "health_score": 49,
            "diets": [
                "gluten free",
                "lacto ovo vegetarian",
                "primal",
                "ketogenic"
            ]
        },
        {
            "id": 798400,
            "name": "Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant",
            "img": "https://spoonacular.com/recipeImages/798400-312x231.jpg",
            "health_score": 71,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 782600,
            "name": "Quinoa Salad with Vegetables and Cashews",
            "img": "https://spoonacular.com/recipeImages/782600-312x231.jpg",
            "health_score": 60,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 652417,
            "name": "Moroccan chickpea and lentil stew",
            "img": "https://spoonacular.com/recipeImages/652417-312x231.jpg",
            "health_score": 96,
            "diets": [
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 639535,
            "name": "Citrusy Pecan Garbanzo Couscous: A Salad For Cold Weather",
            "img": "https://spoonacular.com/recipeImages/639535-312x231.jpg",
            "health_score": 72,
            "diets": [
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 729366,
            "name": "Plantain Salad",
            "img": "https://spoonacular.com/recipeImages/729366-312x231.jpg",
            "health_score": 61,
            "diets": [
                "gluten free",
                "pescatarian"
            ]
        },
        {
            "id": 661925,
            "name": "Strawberry-Mango Quinoa Salad",
            "img": "https://spoonacular.com/recipeImages/661925-312x231.jpg",
            "health_score": 66,
            "diets": [
                "gluten free",
                "lacto ovo vegetarian"
            ]
        },
        {
            "id": 794538,
            "name": "Almond Joy Protein Shake",
            "img": "https://spoonacular.com/recipeImages/794538-312x231.jpg",
            "health_score": 78,
            "diets": [
                "gluten free",
                "dairy free",
                "fodmap friendly",
                "ketogenic"
            ]
        },
        {
            "id": 649931,
            "name": "Lentil Salad With Vegetables",
            "img": "https://spoonacular.com/recipeImages/649931-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 636787,
            "name": "Caldo Verde - Portuguese Kale Soup",
            "img": "https://spoonacular.com/recipeImages/636787-312x231.jpg",
            "health_score": 89,
            "diets": [
                "gluten free",
                "dairy free",
                "whole 30"
            ]
        },
        {
            "id": 641975,
            "name": "Easy Ginger Beef Broccoli",
            "img": "https://spoonacular.com/recipeImages/641975-312x231.jpg",
            "health_score": 75,
            "diets": [
                "dairy free"
            ]
        },
        {
            "id": 652423,
            "name": "Moroccan Couscous and Chickpea Salad",
            "img": "https://spoonacular.com/recipeImages/652423-312x231.jpg",
            "health_score": 56,
            "diets": [
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 715447,
            "name": "Easy Vegetable Beef Soup",
            "img": "https://spoonacular.com/recipeImages/715447-312x231.jpg",
            "health_score": 65,
            "diets": [
                "dairy free"
            ]
        },
        {
            "id": 716311,
            "name": "Mango Fried Rice",
            "img": "https://spoonacular.com/recipeImages/716311-312x231.jpg",
            "health_score": 45,
            "diets": [
                "gluten free",
                "dairy free"
            ]
        },
        {
            "id": 715543,
            "name": "Homemade Guacamole",
            "img": "https://spoonacular.com/recipeImages/715543-312x231.jpg",
            "health_score": 34,
            "diets": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "lacto ovo vegetarian",
                "primal",
                "whole 30",
                "vegan"
            ]
        },
        {
            "id": 157344,
            "name": "Spicy Salad with Kidney Beans, Cheddar, and Nuts",
            "img": "https://spoonacular.com/recipeImages/157344-312x231.jpg",
            "health_score": 78,
            "diets": [
                "gluten free",
                "lacto ovo vegetarian"
            ]
        },
        {
            "id": 658509,
            "name": "Roasted Broccoli with Lemon and Garlic",
            "img": "https://spoonacular.com/recipeImages/658509-312x231.jpg",
            "health_score": 70,
            "diets": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "lacto ovo vegetarian",
                "primal",
                "whole 30",
                "vegan"
            ]
        },
        {
            "id": 716195,
            "name": "Spicy Indian-Style Hummus",
            "img": "https://spoonacular.com/recipeImages/716195-312x231.jpg",
            "health_score": 40,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 716361,
            "name": "Stir Fried Quinoa, Brown Rice and Chicken Breast",
            "img": "https://spoonacular.com/recipeImages/716361-312x231.jpg",
            "health_score": 66,
            "diets": [
                "gluten free"
            ]
        },
        {
            "id": 765011,
            "name": "Snap Pea and Green Bean Salad with Arugula Pesto",
            "img": "https://spoonacular.com/recipeImages/765011-312x231.jpg",
            "health_score": 49,
            "diets": [
                "gluten free",
                "lacto ovo vegetarian",
                "primal"
            ]
        },
        {
            "id": 660228,
            "name": "Skinny Kale Basil Pesto",
            "img": "https://spoonacular.com/recipeImages/660228-312x231.jpg",
            "health_score": 81,
            "diets": [
                "gluten free"
            ]
        },
        {
            "id": 716408,
            "name": "Greek-Style Baked Fish: Fresh, Simple, and Delicious",
            "img": "https://spoonacular.com/recipeImages/716408-312x231.jpg",
            "health_score": 42,
            "diets": [
                "gluten free",
                "pescatarian"
            ]
        },
        {
            "id": 661340,
            "name": "Spinach Salad with Strawberry Vinaigrette",
            "img": "https://spoonacular.com/recipeImages/661340-312x231.jpg",
            "health_score": 79,
            "diets": [
                "gluten free",
                "primal"
            ]
        },
        {
            "id": 782622,
            "name": "Chocolate Peanut Butter Cinnamon Smoothie",
            "img": "https://spoonacular.com/recipeImages/782622-312x231.png",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free",
                "fodmap friendly"
            ]
        },
        {
            "id": 715424,
            "name": "The Best Chili",
            "img": "https://spoonacular.com/recipeImages/715424-312x231.jpg",
            "health_score": 33,
            "diets": [
                "gluten free",
                "dairy free"
            ]
        },
        {
            "id": 659135,
            "name": "Salmon with roasted vegetables",
            "img": "https://spoonacular.com/recipeImages/659135-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free",
                "whole 30",
                "pescatarian"
            ]
        },
        {
            "id": 639851,
            "name": "Cod with Tomato-Olive-Chorizo Sauce and Mashed Potatoes",
            "img": "https://spoonacular.com/recipeImages/639851-312x231.jpg",
            "health_score": 83,
            "diets": [
                "gluten free",
                "dairy free",
                "whole 30"
            ]
        },
        {
            "id": 664547,
            "name": "Vegetable Dip",
            "img": "https://spoonacular.com/recipeImages/664547-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "lacto ovo vegetarian",
                "primal"
            ]
        },
        {
            "id": 633921,
            "name": "Balsamic & Honey Glazed Salmon with Lemony Asparagus",
            "img": "https://spoonacular.com/recipeImages/633921-312x231.jpg",
            "health_score": 82,
            "diets": [
                "gluten free",
                "dairy free",
                "pescatarian"
            ]
        },
        {
            "id": 658579,
            "name": "Roasted Endive Salad With Prosciutto, Figs and Pistachios",
            "img": "https://spoonacular.com/recipeImages/658579-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "primal"
            ]
        },
        {
            "id": 715385,
            "name": "Slow Cooker Baked Potato Soup",
            "img": "https://spoonacular.com/recipeImages/715385-312x231.jpg",
            "health_score": 45,
            "diets": []
        },
        {
            "id": 641057,
            "name": "Curried Butternut Squash and Apple Soup",
            "img": "https://spoonacular.com/recipeImages/641057-312x231.jpg",
            "health_score": 81,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 655575,
            "name": "Penne Pasta with Broccoli and Cheese",
            "img": "https://spoonacular.com/recipeImages/655575-312x231.jpg",
            "health_score": 100,
            "diets": []
        },
        {
            "id": 632269,
            "name": "Amaranth and Roast Veggie Salad",
            "img": "https://spoonacular.com/recipeImages/632269-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 637162,
            "name": "Carrot and Cabbage Salad With Coriander+cumin Dry Rub",
            "img": "https://spoonacular.com/recipeImages/637162-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "lacto ovo vegetarian",
                "primal",
                "fodmap friendly",
                "whole 30",
                "vegan"
            ]
        },
        {
            "id": 982371,
            "name": "Instant Pot Quinoa Grain Bowl",
            "img": "https://spoonacular.com/recipeImages/982371-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 1095753,
            "name": "Roasted Cauliflower Detox Bowl with Tahini Sauce",
            "img": "https://spoonacular.com/recipeImages/1095753-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 660405,
            "name": "Smoky Black Bean Soup With Sweet Potato & Kale",
            "img": "https://spoonacular.com/recipeImages/660405-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian"
            ]
        },
        {
            "id": 715523,
            "name": "Chorizo and Beef Quinoa Stuffed Pepper",
            "img": "https://spoonacular.com/recipeImages/715523-312x231.jpg",
            "health_score": 34,
            "diets": [
                "gluten free"
            ]
        },
        {
            "id": 632252,
            "name": "Alouette® Stuffed Mushroom Caps",
            "img": "https://spoonacular.com/recipeImages/632252-312x231.jpg",
            "health_score": 52,
            "diets": [
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 639891,
            "name": "Coffee-braised Short Ribs",
            "img": "https://spoonacular.com/recipeImages/639891-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free"
            ]
        },
        {
            "id": 646651,
            "name": "Herb chicken with sweet potato mash and sautéed broccoli",
            "img": "https://spoonacular.com/recipeImages/646651-312x231.jpg",
            "health_score": 81,
            "diets": [
                "gluten free"
            ]
        },
        {
            "id": 716330,
            "name": "Chicken and Mango Skewer",
            "img": "https://spoonacular.com/recipeImages/716330-312x231.jpg",
            "health_score": 68,
            "diets": [
                "gluten free",
                "dairy free",
                "whole 30"
            ]
        },
        {
            "id": 640318,
            "name": "Crab Salad Stuffed Pita Pockets",
            "img": "https://spoonacular.com/recipeImages/640318-312x231.jpg",
            "health_score": 88,
            "diets": [
                "dairy free",
                "pescatarian"
            ]
        },
        {
            "id": 642085,
            "name": "Easy Roasted Vegetables",
            "img": "https://spoonacular.com/recipeImages/642085-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "whole 30",
                "vegan"
            ]
        },
        {
            "id": 716437,
            "name": "Chilled Cucumber Avocado Soup with Yogurt and Kefir",
            "img": "https://spoonacular.com/recipeImages/716437-312x231.jpg",
            "health_score": 40,
            "diets": [
                "gluten free",
                "lacto ovo vegetarian",
                "primal"
            ]
        },
        {
            "id": 664090,
            "name": "Turkish Chicken Salad with Home-made Cacik Yogurt Sauce",
            "img": "https://spoonacular.com/recipeImages/664090-312x231.jpg",
            "health_score": 82,
            "diets": [
                "gluten free"
            ]
        },
        {
            "id": 636602,
            "name": "Butternut Squash Soup (In Half An Hour!)",
            "img": "https://spoonacular.com/recipeImages/636602-312x231.jpg",
            "health_score": 86,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 716276,
            "name": "Doughnuts",
            "img": "https://spoonacular.com/recipeImages/716276-312x231.jpg",
            "health_score": 35,
            "diets": [
                "lacto ovo vegetarian"
            ]
        },
        {
            "id": 649944,
            "name": "Lentil Mango Salad",
            "img": "https://spoonacular.com/recipeImages/649944-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 646043,
            "name": "Gujarati Dry Mung Bean Curry",
            "img": "https://spoonacular.com/recipeImages/646043-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 634437,
            "name": "Basil Tagliatelle with Roasted Red Bell Pepper Salad",
            "img": "https://spoonacular.com/recipeImages/634437-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "lacto ovo vegetarian",
                "primal",
                "whole 30",
                "vegan"
            ]
        },
        {
            "id": 655235,
            "name": "Peanut Butter and Jelly Smoothie",
            "img": "https://spoonacular.com/recipeImages/655235-312x231.jpg",
            "health_score": 33,
            "diets": [
                "gluten free",
                "dairy free",
                "fodmap friendly"
            ]
        },
        {
            "id": 652393,
            "name": "Moosewood Lentil Soup",
            "img": "https://spoonacular.com/recipeImages/652393-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 640828,
            "name": "Crispy Panko and Herb Crusted Salmon",
            "img": "https://spoonacular.com/recipeImages/640828-312x231.jpg",
            "health_score": 100,
            "diets": [
                "dairy free",
                "pescatarian"
            ]
        },
        {
            "id": 769774,
            "name": "Shredded Roast Beef Stuffed Sweet Potatoes (Whole 30 & PALEO)",
            "img": "https://spoonacular.com/recipeImages/769774-312x231.jpg",
            "health_score": 76,
            "diets": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "primal",
                "whole 30"
            ]
        },
        {
            "id": 715533,
            "name": "Filet Mignon Soft Tacos",
            "img": "https://spoonacular.com/recipeImages/715533-312x231.jpg",
            "health_score": 37,
            "diets": [
                "gluten free",
                "pescatarian"
            ]
        },
        {
            "id": 639411,
            "name": "Cilantro Lime Halibut",
            "img": "https://spoonacular.com/recipeImages/639411-312x231.jpg",
            "health_score": 68,
            "diets": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "primal",
                "pescatarian"
            ]
        },
        {
            "id": 636228,
            "name": "Broccoli Tartar",
            "img": "https://spoonacular.com/recipeImages/636228-312x231.jpg",
            "health_score": 89,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 661259,
            "name": "Spinach and Gorgonzola Stuffed Flank Steak",
            "img": "https://spoonacular.com/recipeImages/661259-312x231.jpg",
            "health_score": 79,
            "diets": []
        },
        {
            "id": 664680,
            "name": "Vegetarian Mushroom Shepherd's Pie",
            "img": "https://spoonacular.com/recipeImages/664680-312x231.jpg",
            "health_score": 66,
            "diets": [
                "gluten free",
                "dairy free"
            ]
        },
        {
            "id": 715391,
            "name": "Slow Cooker Chicken Taco Soup",
            "img": "https://spoonacular.com/recipeImages/715391-312x231.jpg",
            "health_score": 28,
            "diets": [
                "gluten free",
                "dairy free"
            ]
        },
        {
            "id": 636230,
            "name": "Broccoli with cheese soup",
            "img": "https://spoonacular.com/recipeImages/636230-312x231.jpg",
            "health_score": 54,
            "diets": [
                "lacto ovo vegetarian"
            ]
        },
        {
            "id": 632812,
            "name": "Asian Chicken and Broccoli With Chili Garlic Sauce",
            "img": "https://spoonacular.com/recipeImages/632812-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free"
            ]
        },
        {
            "id": 633942,
            "name": "Balsamic Roasted Vegetables",
            "img": "https://spoonacular.com/recipeImages/633942-312x231.jpg",
            "health_score": 51,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "whole 30",
                "vegan"
            ]
        },
        {
            "id": 632347,
            "name": "Ancient Grains Bread",
            "img": "https://spoonacular.com/recipeImages/632347-312x231.jpg",
            "health_score": 74,
            "diets": [
                "lacto ovo vegetarian"
            ]
        },
        {
            "id": 975070,
            "name": "Instant Pot Chicken Taco Soup",
            "img": "https://spoonacular.com/recipeImages/975070-312x231.jpg",
            "health_score": 83,
            "diets": [
                "gluten free",
                "dairy free"
            ]
        },
        {
            "id": 649886,
            "name": "Lemony Greek Lentil Soup",
            "img": "https://spoonacular.com/recipeImages/649886-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian",
                "vegan"
            ]
        },
        {
            "id": 659927,
            "name": "Shrimp and Avocado Salad",
            "img": "https://spoonacular.com/recipeImages/659927-312x231.jpg",
            "health_score": 100,
            "diets": [
                "gluten free",
                "dairy free",
                "pescatarian"
            ]
        },
        {
            "id": 716217,
            "name": "Vietnamese Pancakes with Vegetables, Herbs and a Fragrant Dipping Sauce (Bánh Xèo)",
            "img": "https://spoonacular.com/recipeImages/716217-312x231.jpg",
            "health_score": 35,
            "diets": [
                "gluten free",
                "dairy free",
                "lacto ovo vegetarian"
            ]
        },
        {
            "id": 636608,
            "name": "Butternut Squash, Arugula and Goat Cheese Quinoa",
            "img": "https://spoonacular.com/recipeImages/636608-312x231.jpg",
            "health_score": 97,
            "diets": [
                "gluten free",
                "lacto ovo vegetarian"
            ]
        }
    ],
    diets: []
}

const rootReducer = (state=initialState, action) =>{
    switch(action.type){
        case GET_RECIPES:
            return {...state, recipes: action.payload, filteredRecipes: action.payload};
        case GET_DIETS:
            return {...state, diets: action.payload};
        case SEARCH_BY_NAME:
            return {...state, filteredRecipes: action.payload, doubleFilteredRecipes:action.payload}
        case FILTER_BY:
            const {source, diets} = action.payload;
            const filtered = state.filteredRecipes
                .filter(recipe=> {
                    if (
                        (
                            source === "any" || 
                            (source === "api" && !isNaN(recipe.id)) || 
                            (source === "ddbb" && isNaN(recipe.id))) 
                        && diets.every(diet => recipe.diets && recipe.diets.includes(diet))
                      ) return recipe})
            return {...state, doubleFilteredRecipes: filtered}
        case ORDER_BY:
            const { by, form } = action.payload;
            let orderedRecipes = [...state.doubleFilteredRecipes];
            
             console.log (action.payload)

            if (by === "alpha") {
                if (form === "az") {
                    orderedRecipes.sort((a, b) => (a.name < b.name ? -1 : 1));
                } else if (form === "za"){
                    orderedRecipes.sort((a, b) => (a.name < b.name ? 1 : -1));
                }
            } else {
                if (form === "higher"){
                    orderedRecipes.sort((a, b) => (b.health_score - a.health_score));
                } else if (form === "lower"){
                    orderedRecipes.sort((a, b) => (a.health_score - b.health_score));
                }
            }
            return {...state, doubleFilteredRecipes: orderedRecipes}
        default:
            return{...state};
    }
}

export default rootReducer;