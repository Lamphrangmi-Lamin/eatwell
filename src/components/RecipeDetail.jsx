import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeDetail() {
    const [recipeDetail, setRecipeDetail] = useState({
          "idMeal": "52795",
          "strMeal": "Chicken Handi",
          "strMealAlternate": null,
          "strCategory": "Chicken",
          "strArea": "Indian",
          "strInstructions": "Take a large pot or wok, big enough to cook all the chicken, and heat the oil in it. Once the oil is hot, add sliced onion and fry them until deep golden brown. Then take them out on a plate and set aside.\r\nTo the same pot, add the chopped garlic and sauté for a minute. Then add the chopped tomatoes and cook until tomatoes turn soft. This would take about 5 minutes.\r\nThen return the fried onion to the pot and stir. Add ginger paste and sauté well.\r\nNow add the cumin seeds, half of the coriander seeds and chopped green chillies. Give them a quick stir.\r\nNext goes in the spices – turmeric powder and red chilli powder. Sauté the spices well for couple of minutes.\r\nAdd the chicken pieces to the wok, season it with salt to taste and cook the chicken covered on medium-low heat until the chicken is almost cooked through. This would take about 15 minutes. Slowly sautéing the chicken will enhance the flavor, so do not expedite this step by putting it on high heat.\r\nWhen the oil separates from the spices, add the beaten yogurt keeping the heat on lowest so that the yogurt doesn’t split. Sprinkle the remaining coriander seeds and add half of the dried fenugreek leaves. Mix well.\r\nFinally add the cream and give a final mix to combine everything well.\r\nSprinkle the remaining kasuri methi and garam masala and serve the chicken handi hot with naan or rotis. Enjoy!",
          "strMealThumb": "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
          "strTags": null,
          "strYoutube": "https://www.youtube.com/watch?v=IO0issT0Rmc",
          "strIngredient1": "Chicken",
          "strIngredient2": "Onion",
          "strIngredient3": "Tomatoes",
          "strIngredient4": "Garlic",
          "strIngredient5": "Ginger paste",
          "strIngredient6": "Vegetable oil",
          "strIngredient7": "Cumin seeds",
          "strIngredient8": "Coriander seeds",
          "strIngredient9": "Turmeric powder",
          "strIngredient10": "Chilli powder",
          "strIngredient11": "Green chilli",
          "strIngredient12": "Yogurt",
          "strIngredient13": "Cream",
          "strIngredient14": "fenugreek",
          "strIngredient15": "Garam masala",
          "strIngredient16": "Salt",
          "strIngredient17": "",
          "strIngredient18": "",
          "strIngredient19": "",
          "strIngredient20": "",
          "strMeasure1": "1.2 kg",
          "strMeasure2": "5 thinly sliced",
          "strMeasure3": "2 finely chopped",
          "strMeasure4": "8 cloves chopped",
          "strMeasure5": "1 tbsp",
          "strMeasure6": "¼ cup",
          "strMeasure7": "2 tsp",
          "strMeasure8": "3 tsp",
          "strMeasure9": "1 tsp",
          "strMeasure10": "1 tsp",
          "strMeasure11": "2",
          "strMeasure12": "1 cup",
          "strMeasure13": "¾ cup",
          "strMeasure14": "3 tsp Dried",
          "strMeasure15": "1 tsp",
          "strMeasure16": "To taste",
          "strMeasure17": "",
          "strMeasure18": "",
          "strMeasure19": "",
          "strMeasure20": "",
          "strSource": "",
          "strImageSource": null,
          "strCreativeCommonsConfirmed": null,
          "dateModified": null
        });

    console.log(recipeDetail)

    const getIngredientsList = (recipe) => {
        const entries = Object.entries(recipe);
        // entries become an array of key, value pair arrays
        const ingredients = entries.filter(([key, value]) => {
            return key.startsWith('strIngredient') && value && value.trim() !== "";
        })
        // console.log(ingredients);
        const combinedList = ingredients.map(([key, ingredientValue]) => {
            const number = key.replace("strIngredient", ""); //get number
            const measureKey = `strMeasure${number}`;
            const measureValue = recipe[measureKey]; //{{access measure from recipe
            return measureValue ? `${measureValue} ${ingredientValue}` : ingredientValue
        })
        console.log(combinedList);
        return combinedList;
    }

    const ingredientsList = getIngredientsList(recipeDetail);

    const {id} = useParams();

    const endpoint = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                const response = (await fetch(`${endpoint}${id}`));
                const data = await response.json();
                setRecipeDetail(data.meals[0]);
                console.log(data.meals);
            } catch (error) {
                console.error("Failed to fetch recipe details", error);
            }
        }
        if (id) fetchDetail();
    }, [id])

    // console.log(recipeDetail ? recipeDetail : false);

    return (
        <div className="max-w-md mx-auto mt-8 px-5">
            <div className="overflow-hidden h-75 w-75 m-auto">
                <img className="h-full w-full object-cover rounded-full" src={recipeDetail.strMealThumb} alt="recipe image" />
            </div>

            <h1 className="font-semibold text-2xl text-center m-8">{recipeDetail.strMeal}</h1>

            <div className="p-6 bg-white shadow-lg rounded-2xl mb-6">
                <h2 className="text-2xl font-bold mb-4 text-center text-green-600">Ingredients</h2>

                <ul className="list-disc list-inside space-y-2">
                    {ingredientsList.map((item, index) => (
                        <li key={index} className="text-gray-700">{item}</li>
                    ))}
                </ul>
            </div>

            <div className="p-6 bg-white shadow-lg rounded-2xl mb-6">
                <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Instructions</h2>

                <ol className="text-gray-700 list-decimal list-inside space-y-4">
                    {recipeDetail.strInstructions
                    .split('\r\n')
                    .filter(instruction => instruction.trim() !== "")
                    .map((step, index) => (
                        <li key={index} className="leading-relaxed">{step}</li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default RecipeDetail;