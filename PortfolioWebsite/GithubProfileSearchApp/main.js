import * as v from "./js/variables.js";
import * as f from "./js/functions.js";

v.form.addEventListener("submit", (e) => {
    e.preventDefault();
    // let user = v.search.value;
    // let user = v.search.value.replace(/\s+/g, "");
    let user = v.search.value.split(" ").join("");

    if(user == "") {
        f.errorMessage("Input cannot be blank");
    } else {
        f.getUser(user);
        v.search.value = "";
    }
});