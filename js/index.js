//HTML Partials
const container = document.getElementById("dynamic-content");
const errorContainer = document.querySelector(".error");
let url = "./partials/home.html";
const links = document.querySelectorAll("nav a");
//------------------------------------------------------------------------------------
//checks the reason for error
//Pre-load home page
window.onload =  function(){
    ajaxHandle(url);
}


//------------------------------------------------------------------------------------
//change the active id according to the selected navigation button
function handleEvent(ev) {

    for (let i = 0; i < links.length; i++) {
        if (links[i].hasAttribute("id")) {
            links[i].removeAttribute("id");
            console.log(links[i]);
        }
    }

    let currentItem = ev.currentTarget;

    currentItem.setAttribute("id", "active");
}

for (let link of links) {
    link.addEventListener("click", handleEvent);
}
//----------------------------------------------------------------------------------------
//get clicked link in html
function handleLinkClick(ev) {
    ev.preventDefault();

    //check which link is clicked
    // let currentLink = ev.target;
    let url = this.href;

    ajaxHandle(url);

}

for (let link of links) {
    link.addEventListener("click", handleLinkClick);
}
// get data according to the selected link and pass it to index.html
function ajaxHandle(urlParam) {

    fetch(urlParam)
        .then(response => {

            // if (response.statusText === "OK") {
            //     return response.text();
            // }

            return response.text();
        })
        .then(function (data) {
            //use your partial files
            container.innerHTML = data;
        })
        .catch(function (err) {
            errorContainer.textContent = `${err.name}: ${err.message}`;
        });
}
