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
