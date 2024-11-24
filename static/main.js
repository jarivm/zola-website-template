// Main navigation menu for mobile devices
var navToggle = document.getElementById("nav-toggle");
var nav = document.getElementById("nav");

function applyNavigation() {
	if (nav.style.maxHeight == "0px") {
		nav.setAttribute("data-is-open", "false");
		navToggle.setAttribute("data-is-open", "false");
		navToggle.setAttribute("aria-label", "Open navigatie menu");
	} else {
		nav.setAttribute("data-is-open", "true");
		navToggle.setAttribute("data-is-open", "true");
		navToggle.setAttribute("aria-label", "Sluit navigatie menu");
	}
}

function toggleNavigation() {
	if (nav.style.maxHeight !== "0px") {
		nav.style.maxHeight = 0;
	} else {
		nav.style.maxHeight = nav.scrollHeight + "px";
	}

	applyNavigation();
}

navToggle.addEventListener("click", toggleNavigation, { passive: true });
applyNavigation();
