import useRecipeStore from "./recipeStore";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function RecommendationsList() {
  let recommendations = useRecipeStore((state) => state.recommendations);
  let getRecommendations = useRecipeStore(
    (state) => state.generateRecommendations
  );

  useEffect(() => getRecommendations(), []);

  return (
    <div className="pad-y">
      <h2>Recommendations For You</h2>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {recommendations.length ? (
          recommendations.map((recommended) => (
            <div className="flex-col recipe" key={recommended.id}>
              <h3>{recommended.title}</h3>
              <p>{recommended.description.slice(0, 30) + " ..."}</p>
              <Link to="/details" state={recommended.id}>
                <button>Details</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No recommendations now</p>
        )}
      </div>
    </div>
  );
}

export default RecommendationsList;