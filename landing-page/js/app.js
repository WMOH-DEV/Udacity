/* -- Define My variables -- */

// variables may change after assignment
let sections = document.querySelectorAll('section'),
	topBtn = document.getElementById('up-icon'),
	Topsection = document.querySelector('.landing__container');
// constant variables
const navUl = document.getElementById('navbar__list'),
	navItems = document.getElementsByClassName('nav-item'),
	defaultTopSpace = Topsection.offsetHeight;

// navbar functions
let navbar = {
	// create menu
	items: function () {
		for (const section of sections) {
			const ulName = section.getAttribute('data-nav');
			const ulLink = section.id;
			navUl.innerHTML += `<li class="nav-item" data-li="${ulName}"><a href="#${ulLink}">${ulName}</a></li>`;
		}
	},
	// Set nav item active after click
	itemActive: function () {
		for (const navItem of navItems) {
			navItem.addEventListener('click', function () {
				let current = document.getElementsByClassName('active');
				if (current.length > 0) {
					current[0].classList.remove('active');
				}
				navItem.classList.add('active');
			});
		}
	},
};

// sections functions
let sectionInView = {
	// is section in viewpot (true or false)
	isSectionInViewPort: function (e) {
		let x = e.getBoundingClientRect().left;
		let y = e.getBoundingClientRect().top;
		let ww = Math.max(
			document.documentElement.clientWidth,
			window.innerWidth || 0
		);
		let hw = Math.max(
			document.documentElement.clientHeight,
			window.innerHeight || 0
		);
		let w = e.clientWidth;
		let h = e.clientHeight;
		return y < hw && y + h > 0 && x < ww && x + w > 0;
	},
	// add active class to the section in view port
	selectSection: function () {
		for (let el of sections) {
			if (this.isSectionInViewPort(el)) {
				// store the active section attribute
				let elDataNav = el.getAttribute('data-nav');
				el.classList.add('active-class');
				return elDataNav;
			} else {
				el.classList.remove('active-class');
			}
		}
	},
	// add active class to the li element according to viewport
	changeNavActive: function () {
		for (const navItem of navItems) {
			let DataLi = navItem.getAttribute('data-li');
			if (DataLi == this.selectSection()) {
				navItem.classList.add('active');
			} else {
				navItem.classList.remove('active');
			}
		}
	},
};

// button to top
let fromDownToTop = {
	// hide button
	hideBtn: function () {
		topBtn.classList.add('hide');
	},
	// show button
	showBtn: function () {
		topBtn.classList.remove('hide');
	},
	// show and hide the button
	showHide: function () {
		window.onscroll = function () {
			if (window.scrollY <= defaultTopSpace) {
				topBtn.classList.add('hide');
			} else {
				topBtn.classList.remove('hide');
			}
		};
	},
};

// All Actions after full load
window.addEventListener('DOMContentLoaded', function () {
	// hide the scroll to top button
	fromDownToTop.hideBtn();
	// create navbar elements
	navbar.items();
	// invoke hide/show scroll to top function
	fromDownToTop.showHide();
	// click event --> go to top
	topBtn.onclick = function () {
		window.scrollTo(0, 0);
	};
	// invoke active nav element
	navbar.itemActive();
});

// All Actions while scroll
window.addEventListener('scroll', () => {
	// select section
	sectionInView.selectSection();
	// change navbar active class
	sectionInView.changeNavActive();
});
