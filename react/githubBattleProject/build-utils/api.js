var id = "OUR CLIENT ID";
var secret = "OUR SECRET ID";
var params = `?client_id=${id}&client_secret=${secret}`;

function getErrorMessage(message, username) {
  if (message == "Not Found") {
    return `${username} doesn't exist`;
  }

  return message;
}

function getProfile(username) {
  return fetch(`https://api.github.com/users/${username}${params}`)
    .then((response) => {
      return response.json();
    })
    .then((profile) => {
      if (profile.message) {
        throw new Error(getErrorMessage(profile.message, username));
      }
      return profile;
    });
}

function getRepos(username) {
  return fetch(
    `https://api.github.com/users/${username}/repos${params}&per_page=100`
  )
    .then((response) => {
      return response.json();
    })
    .then((repos) => {
      if (repos.message) {
        throw new Error(repos.message, username);
      }

      return repos;
    });
}

function getStarCount(repos) {
  //repos is an array. it is an array of repos(obj maybe), each repos has a specific property called stargazers_count
  return repos.reduce(function addStarCount(buildingUp, currentValue) {
    var { stargazers_count } = currentValue;
    return buildingUp + stargazers_count;
  }, 0);
}

function calculateScore(followers, repos) {
  return followers * 3 + getStarCount(repos);
}

function getUserData(player) {
  return Promise.all([
    getProfile(player),
    getRepos(player),
    // the information passed to .then from Promise.all will be an array with the resolved promise of getProfile at the first item in the array and getRepos at the second item
  ]).then(([profile, repos]) => ({
    profile,
    score: calculateScore(profile.followers, repos),
  }));
}

function sortPlayers(players) {
  return players.sort(function sortAscending(a, b) {
    return b.score - a.score;
  });
}

export function battle(players) {
  return Promise.all([getUserData(players[0]), getUserData(players[1])]).then(
    (results) => {
      return sortPlayers(results);
    }
  );
}

export function fetchPopularRepos(language) {
  var endpoint = window.encodeURI(
    `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
  );

  return (
    fetch(endpoint)
      //use arrow functions so we have lexical this
      .then((response) => {
        console.log("response", response);
        return response.json();
      })
      .then((data) => {
        console.log("data", data);
        if (!data.items) {
          throw new Error(data.message);
        }

        return data.items;
      })
  );
}
