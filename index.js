require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;
const githubData = {
  login: "bhanu567",
  id: 116056012,
  node_id: "U_kgDOBurfzA",
  avatar_url: "https://avatars.githubusercontent.com/u/116056012?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/bhanu567",
  html_url: "https://github.com/bhanu567",
  followers_url: "https://api.github.com/users/bhanu567/followers",
  following_url: "https://api.github.com/users/bhanu567/following{/other_user}",
  gists_url: "https://api.github.com/users/bhanu567/gists{/gist_id}",
  starred_url: "https://api.github.com/users/bhanu567/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/bhanu567/subscriptions",
  organizations_url: "https://api.github.com/users/bhanu567/orgs",
  repos_url: "https://api.github.com/users/bhanu567/repos",
  events_url: "https://api.github.com/users/bhanu567/events{/privacy}",
  received_events_url: "https://api.github.com/users/bhanu567/received_events",
  type: "User",
  site_admin: false,
  name: "BHANU PRAKASH JHA",
  company: "BHAGALPPUR COLLEGE OF ENGINEERING, BHAGALPUR",
  blog: "",
  location: "BHAGALPUR",
  email: null,
  hireable: true,
  bio: "I am a mathematician and a programmer who always eager to learn new technology and wanted to explore human potential.",
  twitter_username: null,
  public_repos: 37,
  public_gists: 0,
  followers: 0,
  following: 1,
  created_at: "2022-10-18T05:15:15Z",
  updated_at: "2024-04-12T04:00:41Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("My name is Bhanu Prakash Jha");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login to this Website</h1>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`This app is listening on port ${port}`);
});
