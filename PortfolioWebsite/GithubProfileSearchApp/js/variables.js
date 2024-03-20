// url: https://api.github.com/users/

const apiURL = "https://api.github.com/users/",
    form = document.querySelector("form"),
    search = document.querySelector(".search"),
    profile = document.querySelector(".profile"),
    repos = document.querySelector(".repos"),
    errorMsg = document.querySelector(".alert");

export { apiURL, form, search, profile, repos, errorMsg };