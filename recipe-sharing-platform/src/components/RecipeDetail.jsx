import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // find recipe by ID
    const foundRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-600 mt-10">Recipe not found</p>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full">
        {/* Title */}
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          {recipe.title}
        </h1>

        {/* Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        {/* Ingredients */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          🥗 Ingredients
        </h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">
              {ingredient}
            </li>
          ))}
        </ul>

        {/* Steps */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          👩‍🍳 Preparation Steps
        </h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.steps.map((step, index) => (
            <li key={index} className="text-gray-700">
              {step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;