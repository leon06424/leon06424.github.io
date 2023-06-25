const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// const link = document.querySelector("a");

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // greeting.innerText = "Hello " + username;
    // greeting.innerText = `Hello ${username}`;
    // greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreetings();
}

// function handleLinkClick(event){
//     event.preventDefault();
//     console.dir(event);
// }

// loginForm.addEventListener("submit", onLoginSubmit);

// link.addEventListener("click", handleLinkClick)

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greetings
    paintGreetings();
}
