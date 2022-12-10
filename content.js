// <----- GENERAL JS STARTS ----->

// load Spectral font from Google Fonts API
let link1 = document.createElement("link");
link1.rel = "preconnect";
link1.href = "https://fonts.googleapis.com";
document.head.appendChild(link1);

let link2 = document.createElement("link");
link2.rel = "preconnect";
link2.href = "https://fonts.gstatic.com";
document.head.appendChild(link2);

let link3 = document.createElement("link");
link3.rel = "stylesheet";
link3.href =
	"https://fonts.googleapis.com/css2?family=Spectral:ital,wght@1,700&display=swap";
document.head.appendChild(link3);

let style = document.createElement("style");
style.textContent =
	"@import url('https://fonts.googleapis.com/css2?family=Spectral:ital,wght@1,700&display=swap');";
document.head.appendChild(style);

// <----- GENERAL JS ENDS ----->

// <----- COURSE PAGE STARTS ----->

// get all sections from page
let sections = document.querySelectorAll("li.section");

if (sections.length != 0) {
	// add table of contents to sidebar
	let headingsSectionHtml =
		'<section class="block card mb-3" role="complementary"><div class="card-body p-3"><h5 class="card-title d-inline">Table of Contents</h5><div class="card-text content mt-3"><ul id="headings-section-list" class="unlist"></ul><div class="footer"></div></div></div></section>';
	sidebar = document.getElementById("block-region-side-pre");
	sidebar.insertAdjacentHTML("afterbegin", headingsSectionHtml);

	let headingsSection = document.getElementById("headings-section-list");
	for (let i = 0; i < sections.length; i++) {
		if (sections[i].classList.contains("hidden")) {
			// hide sections with 'Not Available' badge
			sections[i].style.display = "none";
		} else {
			// add heading for every section to table of contents
			let heading = sections[i].getElementsByTagName("a")[0];
			let headingText = heading.textContent;
			let headingLink = heading.href;
			let headingLinkHtml =
				'<li><div class="head clearfix"><a href="' +
				headingLink +
				'">' +
				headingText +
				"</a></div></li>";
			headingsSection.insertAdjacentHTML("beforeend", headingLinkHtml);
		}
	}
}

// add scroll to top button
let scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "&uArr;";
scrollBtn.setAttribute("id", "scroll-btn");
let page = document.getElementById("page-wrapper");
if (page) page.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
	window.scrollY > window.innerHeight
		? scrollBtn.classList.add("show")
		: scrollBtn.classList.remove("show");
});

let scrollWindow = function () {
	if (window.scrollY != 0) {
		setTimeout(function () {
			window.scrollTo(0, window.scrollY - 50);
			scrollWindow();
		}, 10);
	}
};
scrollBtn.addEventListener("click", scrollWindow);

// <----- COURSE PAGE ENDS ----->
