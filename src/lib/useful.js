//https:czenn.dev/tak_dcxi/articles/bbdb6cd9305ba4
const backfaceFixed = (fixed) => {
	const scrollbarWidth = window.innerWidth - document.body.clientWidth;
	document.body.style.paddingRight = fixed ? `${scrollbarWidth}px` : '';
	const scrollingElement = () => {
		const browser = window.navigator.userAgent.toLowerCase();
		if ('scrollingElement' in document) return document.scrollingElement;
		if (browser.indexOf('webkit') > 0) return document.body;
		return document.documentElement;
	};
	const scrollY = fixed ? scrollingElement().scrollTop : parseInt(document.body.style.top || '0');
	const styles = {
		height: '100vh',
		left: '0',
		overflow: 'hidden',
		position: 'fixed',
		top: `${scrollY * -1}px`,
		width: '100vw'
	};
	Object.keys(styles).forEach((key) => {
		document.body.style[key] = fixed ? styles[key] : '';
	});
	if (!fixed) window.scrollTo(0, scrollY * -1);
};

const vpFixed = () => {
	const viewport = document.querySelector('meta[name="viewport"]');
	function switchViewport() {
		const value = window.outerWidth > 360 ? 'width=device-width,initial-scale=1' : 'width=360';
		if (viewport.getAttribute('content') !== value) {
			viewport.setAttribute('content', value);
		}
	}
	addEventListener('resize', switchViewport, false);
	switchViewport();
};

const setFillHeight = () => {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
};

export { backfaceFixed };
export { vpFixed };
export { setFillHeight };
