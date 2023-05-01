let nullo = document.querySelector(".null");
let empty = document.querySelector(".empty");
let donate = document.querySelector(".donate");
let igno = document.querySelector(".x");
console.log(nullo);
console.log(igno);
console.log(donate);
console.log(empty);

donate.onclick = function () {
	empty.style.display = "block";
	nullo.style.display = "none";
};

igno.onclick = function () {
	empty.style.display = "none";
	nullo.style.display = "block";
};
