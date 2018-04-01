$(document).ready(function(){
	$(".mobile-nav").click(function(){
		$("nav ul").toggleClass("toggle-mobile");
		$("#hamburger-top").toggleClass("hamburger-top-active");
		$("#hamburger-middle").toggleClass("hamburger-middle-active");
		$("#hamburger-bottom").toggleClass("hamburger-bottom-active");
	});

	console.log("Welcome to my site!");
});