const greeting = document.querySelector(".greetings");
const todaysdate = new Date();
let lastvisited = window.localStorage.getItem("lastvisited-ls");

if (lastvisited < todaysdate) {
    // figuring out how to add variable in string
    greeting.textContent = "Welcome! Let us know if you have any questions.";
} else if (lastvisited = todaysdate) {
    greeting.textContent = "Back so soon! Awesome!";
} else {
    greeting.textContent = "You last visited days ago";
}

localStorage.setItem("lastvisited-ls", lastvisited);

