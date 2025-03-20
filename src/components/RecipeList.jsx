import RecipeCard from "./RecipeCard";

function RecipeList({data}) {
    return (
        <div className="mt-7">
          {
            data.map(meal => (
                <RecipeCard key={meal.idMeal} src={meal.strMealThumb} name={meal.strMeal} area={meal.strArea} />
            ))
          }
        </div>
    )
}

export default RecipeList;