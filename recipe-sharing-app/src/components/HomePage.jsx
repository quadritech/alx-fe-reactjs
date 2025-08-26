import { Link } from "react-router-dom";
import FavouritesList from "./FavoritesList";
import RecommendationsList from "./RecommendationsList";

function HomePage() {

    
  return (
    <div className="pad-y center">
      <h1>Welcome to Recipe Haven</h1>
      <img src="/images/bgImg.jpeg" alt="" style={{width:'400px', marginTop:'1rem'}}/>
      <p className="description">
        Discover, share, and create delicious recipes with food lovers around
        the world. Join our community and spice up your kitchen!
      </p>


      <Link to="/all">
        <button className="primary-btn">Explore Recipes</button>
      </Link>

      <FavouritesList />
      <RecommendationsList /> 
    </div>
  );
}

export default HomePage;