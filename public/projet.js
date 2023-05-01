//let ul=document.querySelector('ul');
//let more=document.querySelector('.link-more');
//let exit=document.querySelector(".e")
//more.addEventListener(click,function() {
 //   if( ul.style.display="none") {
   //     ul.style.display = "inline";
   // }else if ( ul.style.display="inline"){
   //     ul.style.display = "none";
   // }
//})
const swiper = new Swiper(".swiper", {
	// Optional parameters

	// If we need pagination
	// Default parameters
	slidesPerView: 3,

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
		},
		// when window width is >= 480px
		700: {
			slidesPerView: 2,
		},
		// when window width is >= 640px
		900: {
			slidesPerView: 3,
		},
		1200: {
			slidesPerView:4,
		}
	},

	// And if we need scrollbar
});
let nullo=document.querySelector(".null");
let empty=document.querySelector(".empty");
let donate=document.querySelector(".donate");
let igno=document.querySelector(".x");
console.log(nullo)
console.log(igno);
console.log(donate)
console.log(empty);

	donate.onclick = function () {
		empty.style.display = "block";
		nullo.style.display = "none";
	};

igno.onclick=function() {
	empty.style.display = "none";
	nullo.style.display = "block";

}