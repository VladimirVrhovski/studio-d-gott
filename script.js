function observerCallback(entries) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add("animation-visible");
		}
	});
}

const fadeInObserver = new IntersectionObserver(observerCallback, {
	threshold: 0.6,
});
let hidden = Array.from(document.querySelectorAll(".animation-hidden"));
console.log("nesto");

const isReduced =
	window.matchMedia(`(prefers-reduced-motion: reduce)`) === true ||
	window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

if (!!isReduced == false) {
	hidden.forEach((element) => fadeInObserver.observe(element));
}
