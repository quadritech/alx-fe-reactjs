import useRecipeStore from "./recipeStore";
import { useState } from "react";


function AddRecipeForm () {
    const addRecipe = useRecipeStore(state => state.addRecipe);
    const recipes = useRecipeStore(state => state.recipes)
    const [recipeTitle, setTitle] = useState('');
    const [recipeDescription, setRecipeDescription] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        addRecipe({id: Date.now(), title: recipeTitle, description: recipeDescription})
        setRecipeDescription('');
        setTitle('')
        console.log(recipes)
    }
    
    
    return (
    <div className="main-content">
        <h2>Share Your Recipe</h2>
        <form onSubmit={handleSubmit} className="flex-col recipe">
        <label htmlFor="title" >Recipe Title </label>
        <input
            id="title"
            type="text"
            value={recipeTitle}
            placeholder="Enter Recipe Title"
            onChange={(e) => {
            setTitle(e.target.value);
            }}
            className="input-field"
        /> 

        <label htmlFor="description">Recipe Description</label>
        <textarea
            id="description"
            name="description"
            value={recipeDescription}
            onChange={(e) => {
            setRecipeDescription(e.target.value);
            }}
            placeholder="Detailed description of Recipe"
            className="input-field"
            rows={10} cols={50}
        ></textarea>
        
            {/* add file input for image of food recipe */}
        <button onClick={handleSubmit}>Add Recipe</button>
        </form>
    </div>
    );
}

export default AddRecipeForm;