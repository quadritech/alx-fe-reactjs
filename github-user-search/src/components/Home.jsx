import { Link } from "react-router-dom";
import Footer from "./Footer";
function Home() {
  return (
    <div className="p-[1rem]">
      <div className="text-[1.5rem]  mb-[8rem] place-content-center ">
        <img
          src="/public/images/backdrop.png"
          alt="GitHub Octocat"
          className="octocat w-[600px]"
        />
        <div className="space-x">
          <h1 className="text-[#24292E] font-bold my-[4rem]">
            Discover GitHub Profiles Effortlessly
          </h1>

          <p className="max-w-[600px] m-auto">
            Github Profile Explorer – your gateway to discovering users and
            repositories on GitHub with ease and precision. Whether you're
            looking for a quick user lookup or a detailed repository hunt, we've
            got you covered.
          </p>
        </div>
      </div>

      <div>
        <h2 className="mb-[2rem] text-3xl font-extrabold">
          Choose Your Search Type
        </h2>

        <div className="row-flex">
          <div className="search-card">
            <h3 className="card-title">Basic Search</h3>
            <p id="basic" className="text-justify py-7 text-lg/7">
              Effortlessly retrieve essential details for any GitHub user.
              Simply enter a username to access their profile name, avatar
              image, and direct links to their repositories. Ideal for quick
              checks and individual explorations.
            </p>
            <Link to="/search">
              <button className="basic-btn">Basic Search</button>
            </Link>
          </div>

          <div className="search-card">
            <h3 className="card-title">Advanced Search</h3>
            <p id="advanced" className="text-justify py-4 text-lg/7">
              Unlock powerful querying capabilities beyond single users. Specify
              parameters like languages, topics, stars, or keywords to generate
              a curated list of matching repositories from across GitHub.
              Perfect for in-depth research and bulk discoveries.
            </p>
            <Link to="/advanced">
              <button className="advanced-btn">Advanced Search</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;