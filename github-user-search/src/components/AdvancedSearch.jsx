import { useState } from "react";
import { Link } from "react-router-dom";
import fetchUserData from "../services/githubService";

function AdvancedSearch() {
  const [location, setLocation] = useState("");
  const [repoNumber, setRepoNumber] = useState("");
  const [userData, setUserData] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();
    setUserData(
      await fetchUserData({ location: location }, { repo: `>${repoNumber}` })
    );
    setLocation("");
    setRepoNumber("");
  }

  return (
    <div>
      <img
        src="/public/images/backdrop.png"
        alt="GitHub Octocat"
        className="octocat w-[600px]"
      />
      {Object.keys(userData).length == 0 ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3 className="text-4xl font-extrabold">Search Criteria</h3>
          <div>
            <div className="flex flex-col pt-8">
              <label
                htmlFor="location"
                className="font-extrabold text-3xl text-left"
              >
                Location:
              </label>
              <input
                className="p-2 border-2"
                type="text"
                id="location"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                placeholder="Enter a country or city (e.g., Nigeria, New York)"
              />
            </div>

            <div className="flex flex-col pt-4 pb-8">
              <label htmlFor="repoNumber" className="font-extrabold text-3xl">
                Number of Repositories:
              </label>
              <input
                className="p-2 border-2"
                type="text"
                id="repoNumber"
                onChange={(e) => setRepoNumber(`${e.target.value}`)}
                value={repoNumber}
                placeholder="Minimum number of repositories (e.g., 10)"
              />
            </div>
          </div>
          <div className="flex justify-center gap-4 ">
            <Link className="button" to="/#advanced">
              Back
            </Link>
            <button className="advanced-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      ) : userData.status === 200 ? (
        <div className="request-page">
          <button
            onClick={() => setUserData({})}
            className="sticky top-0 w-full nav-btn"
          >
            Advanced Search
          </button>
          <table className="m-auto mt-4 max-w-[200px]">
            <thead>
              <tr>
                <th className=" rounded-tl-[0.7rem] rounded-bl-[0.7rem]">SN</th>
                <th>USERNAME</th>
                <th>IMAGE</th>
                <th className="rounded-tr-[0.7rem] rounded-br-[0.7rem]">URL</th>
              </tr>
            </thead>
            <tbody>
              {userData.data.items.map((user, index) => (
                <tr key={user.login}>
                  <td>{index + 1}</td>
                  <td>
                    <p>{user.login}</p>
                  </td>
                  <td>
                    <img className="table-img" src={user.avatar_url} alt="" />
                  </td>
                  <td>
                    <a href={user.html_url} target="blank">
                      {user.html_url}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : userData.status === 404 ? (
        <div>
          <p className="bg-gray-400 p-4 rounded-md text-red-800 font-bold mb-1.5">
            {" "}
            Looks like we cant find the user
          </p>
          <button onClick={() => setUserData({})}>Advanced Search</button>
        </div>
      ) : (
        <div>
          <p className="pb-4">Loading ...</p>
          <button onClick={() => setUserData({})}>Advanced Search</button>
        </div>
      )}
    </div>
  );
}

export default AdvancedSearch;