const getUsers = async () => {
  const userContainer = document.getElementById("user-container");
  url = "https://api.github.com/users";
  try {
    userContainer.textContent = "Loading...";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("No data found");
    }
    const data = await response.json();
    console.log(data);
    const users = data;
    userContainer.innerHTML = users
      .map(
        (user) =>
          `<div class='info'><p class='user'>Username: ${user.login}</p><p class='repo'>Repos: ${user.repos_url}</p></div>`
      )
      .join(`\n`);
  } catch (error) {
    userContainer.textContent = `Could not fetch users: ${error.message}`;
  }
};
