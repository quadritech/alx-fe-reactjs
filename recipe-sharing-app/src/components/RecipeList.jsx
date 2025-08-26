import useRecipeStore from "./recipeStore";
import { Link } from "react-router-dom";

function RecipeList() {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);

  return (
    <div className="main-content">
      <h2>List of Recipes</h2>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id} className="flex-2 recipe">
            <div>
              <h3>{recipe.title}</h3>
              <p>{recipe.description.slice(0, 30) + "..."}</p>
            </div>

            <div className="flex-2">
              <Link to="/details" state={recipe.id}>
                <button>Details</button>
              </Link>
              <button onClick={() => addFavorite(recipe.id)}>
                Add Favorite
              </button>
            </div>
          </div>
        ))
      ) : (
        <p style={{ textAlign: "center", padding: "2rem" }}>
          No Recipe found ...
        </p>
      )}
    </div>
  );
}

export default RecipeList;