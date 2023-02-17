const ineuronLogo = document.querySelector("header img");
const price = document.querySelector(".app_price span");
const socialParent = document.querySelector(".footer_social");
const div = document.createElement("div");
const i = document.createElement("i");

ineuronLogo.src = "./assets/ineuron-logo.png";

price.innerText = "$10";

i.className = "fa-brands fa-linkedin";
div.className = "footer_social_ico";
div.append(i);
socialParent.append(div);
