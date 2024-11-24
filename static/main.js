"use strict";

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

// Light/Dark theme
var themeToggle = document.getElementById("theme-toggle");
var THEME_COLOR_BY_NAME = {
	light: "#ffbf66",
	dark: "#1e224c",
};

function detectTheme() {
	if (localStorage.getItem("theme")) {
		if (localStorage.getItem("theme") == "dark") {
			return "dark";
		} else if (localStorage.getItem("theme") == "light") {
			return "light";
		} else {
			// Remove invalid value.
			localStorage.removeItem("theme");
		}
	}
	if (!window.matchMedia) {
		return "light";
	}
	if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		return "dark";
	}

	return "light";
}

function applyTheme(theme, isSaved) {
	document.documentElement.setAttribute("data-theme", theme);

	const icon = document.getElementById("theme-toggle-icon");

	if (theme == "light") {
		icon.classList.remove("fa-sun");
		icon.classList.add("fa-moon");
		themeToggle.setAttribute("title", "Donker thema");
	} else if (theme == "dark") {
		icon.classList.remove("fa-moon");
		icon.classList.add("fa-sun");
		themeToggle.setAttribute("title", "Licht thema");
	}

	document
		.querySelectorAll('meta[name="theme-color"]')
		.forEach(function (meta) {
			meta.setAttribute("content", THEME_COLOR_BY_NAME[theme]);
		});

	if (isSaved) {
		localStorage.setItem("theme", theme);
	}
}

function toggleTheme() {
	var theme = detectTheme();

	if (theme === "light") {
		applyTheme("dark", true);
	} else if (theme === "dark") {
		applyTheme("light", true);
	}
}

themeToggle.addEventListener("click", toggleTheme, { passive: true });
applyTheme(detectTheme());
