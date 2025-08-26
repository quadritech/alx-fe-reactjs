import useRecipeStore from "./recipeStore";
import {  useState } from "react";
import { Link } from "react-router-dom";

function AllRecipe() {
  const recipes = useRecipeStore((state) => state.recipes);
  const recipePerPage = 3;
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const [nextIndex, setNextIndex] = useState(3);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [slicedRecipe, setSlicedRecipe] = useState([...recipes].slice(0, recipePerPage));
  function handlePrevious() {
      setSlicedRecipe(recipes.slice(previousIndex, previousIndex + recipePerPage));
    setNextIndex(previousIndex);
    setPreviousIndex(() =>
      previousIndex - recipePerPage <= 0 ? 0 : previousIndex - recipePerPage
    );
    console.log( previousIndex, nextIndex);
  }

  function handleNext() {
      setSlicedRecipe(recipes.slice(nextIndex, nextIndex + recipePerPage));
    setPreviousIndex(nextIndex);
    setNextIndex(() =>
      nextIndex + recipePerPage >= recipes.length
        ? recipes.length
        : nextIndex + recipePerPage
    );
    console.log(previousIndex, nextIndex);
    
  }



  return (
    <div className="main-content">
      <h2>All Recipes List</h2>
      {slicedRecipe.length ? (
        slicedRecipe.map((recipe) => (
          <div className="flex-2 recipe" key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description.slice(0, 30) + " ..."}</p>
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
        <p>kindly Added Recipes first</p>
      )}
      <div className="flex-2 ">
        <button className="primary-btn" onClick={handlePrevious} 
        disabled={slicedRecipe[0].id == recipes[0].id}
         >
          Previous
        </button>
        <button className="primary-btn"
          onClick={handleNext}
          disabled={slicedRecipe.length < recipePerPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AllRecipe;