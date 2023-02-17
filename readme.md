# Project 6

## Original Output Image

![Original Output Image](./original%20output%20image.png)

## Task 1: Achieve the following Output using JavaScript DOM Manipulation

![Task 1 Image](./Output/DOM%20P3%20SS-1.png)

## JavaScript Code:

```js
const ineuronLogo = document.querySelector("header img");
ineuronLogo.src = "./assets/ineuron-logo.png";
```

---

## Task 2: Achieve the following Output using JavaScript DOM Manipulation

![Task 2 Image](./Output/DOM%20P3%20SS-2.png)

## JavaScript Code:

```js
const price = document.querySelector(".app_price span");
const socialParent = document.querySelector(".footer_social");
const div = document.createElement("div");
const i = document.createElement("i");

price.innerText = "$10";

i.className = "fa-brands fa-linkedin";
div.className = "footer_social_ico";
div.append(i);
socialParent.append(div);
```
