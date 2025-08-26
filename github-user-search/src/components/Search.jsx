import { useState, useEffect } from "react";
import fetchUserData from "../services/githubService";
import { Link } from "react-router-dom";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});
  const [displayError, setDisplayError] = useState(false);
  const [providedUsername, setProvidedUsername] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.length == 0) {
      setDisplayError(true);
      return;
    }
    setProvidedUsername(true);
    setUserData(await fetchUserData(username));
    setUsername("");
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayError(false);
      return () => clearTimeout(timer);
    }, 3000);
  }, [displayError]);

  return (
    <div className="form">
      <img
        src="/public/images/backdrop.png"
        alt="GitHub Octocat"
        className="octocat w-[600px]"
      />

      <div>
        {!providedUsername ? (
          <div>
            <form onSubmit={(e) => handleSubmit(e)} className="form">
              <label htmlFor="username" className="font-extrabold text-3xl">
                Github Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter a valid github Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className="p-2 border-2"
              />
              {displayError ? (
                <div>
                  <p className="text-gray-400 p-4 rounded-md bg-red-800 font-bold mb-1.5">
                    Username can't be blank
                  </p>
                </div>
              ) : (
                <></>
              )}
              <div className="flex gap-2 justify-center">
                <Link className="button" to="/#basic">
                  Back
                </Link>
                <button type="submit" className="advanced-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        ) : userData.status === 200 ? (
          <div>
            <p className="text-4xl font-extrabold">
              {userData.data.login.slice(0, 1).toUpperCase() +
                userData.data.login.slice(1)}
            </p>
            <img src={userData.data.avatar_url} alt="" />
            <a href={userData.data.html_url} target="blank">
              Link to github profile
            </a>
            <br />
            <button className="mt-4" onClick={() => setProvidedUsername(false)}>
              Basic Search
            </button>
          </div>
        ) : userData.status === 404 ? (
          <div>
            <p className="bg-gray-400 p-4 rounded-md text-red-800 font-bold mb-1.5">
              Looks like we cant find the user
            </p>
            <button onClick={() => setProvidedUsername(false)}>
              Basic Search
            </button>
          </div>
        ) : (
          <div>
            <p>Loading ...</p>
            <button onClick={() => setProvidedUsername(false)}>
              Basic Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;