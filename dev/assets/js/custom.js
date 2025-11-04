let button = {
	content: "2025-30-01",
	className: "custom-button-classname",
	onClick: (dp) => {
		let date = new Date();
		dp.selectDate(date);
		dp.setViewDate(date);
	},
};

const date = document.querySelectorAll('.date-input')

date.forEach(item => {
	new AirDatepicker(item, {
		buttons: [button, "clear"],
		position: "top center",
	});
})

if (document.querySelector("select")) {
	NiceSelect.bind(document.getElementById("locations-select"), {
		searchable: true,
		placeholder: "Локация для тура",
		searchtext: "zoek",
		selectedtext: "geselecteerd",
	});
	NiceSelect.bind(document.getElementById("members-select"), {
		searchable: false,
		placeholder: "Участники",
		searchtext: "zoek",
		selectedtext: "geselecteerd",
	});
	NiceSelect.bind(document.getElementById("modal-locations-select"), {
		searchable: false,
		placeholder: "Локация для тура",
		searchtext: "zoek",
		selectedtext: "geselecteerd",
	});
	NiceSelect.bind(document.getElementById("modal-members-select"), {
		searchable: false,
		placeholder: "Участники",
		searchtext: "zoek",
		selectedtext: "geselecteerd",
	});
}



const forEach = function (t, o, r) {
	if ("[object Object]" === Object.prototype.toString.call(t))
		for (var c in t)
			Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
	else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
};

const hamburgers = document.querySelectorAll(".hamburger");
const burgerMenu = document.querySelector('.header__mobile-container');
const body = document.querySelector('body');

if (hamburgers.length > 0) {
	forEach(hamburgers, function (hamburger) {
		hamburger.addEventListener("click", function () {
			this.classList.toggle("is-active");
			burgerMenu.classList.toggle("show");
			body.classList.toggle('overflow-hidden');
		},
			false
		);
	});
}

const inputTel = document.querySelectorAll('[type="tel"]')

inputTel.forEach(item => {
	const inputId = item.id

	IMask(
		document.getElementById(inputId),
		{
			mask: '+{38}(000)000-00-00'
		}
	)
})


const swiperPopular = new Swiper('.swiper-popular', {
	direction: 'horizontal',
	loop: true,
	slidesPerView: 1,
	spaceBetween: 20,
	speed: 3000,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 0,
		disableOnInteraction: true,
	},

	breakpoints: {
		576: {
			slidesPerView: 2,
		},
		1025: {
			slidesPerView: 3,
		},
	},

});

// swiperPopular.init()

swiperPopular.on("slideChange afterInit slidesLengthChange", function () {
	let currentSlide = this.activeIndex + 1;
	document.querySelector('.swiper-counter__current').innerHTML = `${currentSlide}&nbsp/`;
	document.querySelector('.swiper-counter__total').innerHTML = `&nbsp${this.slides.length}`;
});




// 1. custom
// 2. plagin
// 3. libary