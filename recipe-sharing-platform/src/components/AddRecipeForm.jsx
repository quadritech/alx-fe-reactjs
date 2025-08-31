import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !steps) {
      setError("⚠️ Please fill in all fields before submitting.");
      return;
    }

    const ingredientsList = ingredients.split("\n").filter((item) => item.trim() !== "");
    if (ingredientsList.length < 2) {
      setError("⚠️ Please enter at least 2 ingredients.");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      description: steps.substring(0, 60) + "...",
      image: "https://source.unsplash.com/400x300/?food",
      ingredients: ingredientsList,
      steps: steps.split("\n").filter((step) => step.trim() !== ""),
    };

    console.log("✅ New Recipe Added:", newRecipe);

    setTitle("");
    setIngredients("");
    setSteps("");
    setError("");
    alert("🎉 Recipe submitted successfully!");
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex justify-center">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter recipe title"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ingredients (one per line)
            </label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter ingredients, one per line"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Instructions (one step per line)
            </label>
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter cooking steps, one per line"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;