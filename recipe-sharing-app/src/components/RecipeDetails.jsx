import useRecipeStore from "./recipeStore";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import EditRecipe from "./EditRecipeForm";
import DeleteRecipe from "./DeleteRecipeButton";

function RecipeDetails() {
  const recipeDetail = useLocation();
  const recipeId = recipeDetail.state;
  const recipeToDisplay = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipeId === recipe.id)
  );

  const [displayUpdate, setDisplayUpdate] = useState(false);

  return (
    <div className="main-content center">
      <h2>{recipeToDisplay.title}</h2>
      <p className="details">{recipeToDisplay.description}</p>
      {displayUpdate ? <EditRecipe recipe={recipeToDisplay} /> : null}
      <div className="flex-2" style={{ justifyContent: "center" }}>
        <button
          className="update-btn"
          onClick={() => setDisplayUpdate(!displayUpdate)}
        >
          {displayUpdate ? "Don't Update" : "Update Recipe"}
        </button>
        <DeleteRecipe recipeId={recipeToDisplay.id} />
        
      </div>
      <Link to="/list">
        <button>Back to List</button>
      </Link>
    </div>
  );
}

export default RecipeDetails;