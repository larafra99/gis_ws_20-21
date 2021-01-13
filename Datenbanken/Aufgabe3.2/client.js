"use strict";
let form = document.getElementById("form");
let button = document.getElementById("send");
button.addEventListener("click", sendToServer);
let url = "https://gisws2021.herokuapp.com/";
async function sendToServer(_event) {
    let formData = new FormData(document.forms[0]);
    let query = new URLSearchParams(formData);
    url = url + "?" + query.toString();
    let response = await fetch(url);
    let responseText = await response.text();
    console.log(response);
    console.log("Response Text: " + responseText);
}
//# sourceMappingURL=client.js.map