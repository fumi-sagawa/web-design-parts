<script>
	import { onMount } from 'svelte';
	import { getStores } from '$app/stores';
	import { vpFixed } from '$lib/useful.js';
	import { setFillHeight } from '$lib/useful.js';
	import objectFitImages from 'object-fit-images';

	export function onNavigate(fn) {
		let mounted = false;
		const unsubscribe = getStores().page.subscribe(() => {
			if (mounted) fn();
		});
		onMount(() => {
			mounted = true;
			fn();
			return () => {
				unsubscribe();
				mounted = false;
			};
		});
	}

	onMount(() => {});
	onNavigate(() => {
		let vw = window.innerWidth;

		window.addEventListener('resize', () => {
			if (vw === window.innerWidth) {
				// 画面の横幅にサイズ変動がないので処理を終える
				return;
			}

			// 画面の横幅のサイズ変動があった時のみ高さを再計算する
			vw = window.innerWidth;
			setFillHeight();
		});
		vpFixed();
		objectFitImages();
		console.log(document);
	});
	import Nav from '$lib/Nav.svelte';
</script>

<div class="navWrapper">
	<Nav />
</div>
<slot />

<!-- <Footer /> -->
<style global>
	@import '../scss/reset.scss';
	@import '../scss/base.scss';

	.navWrapper {
		position: fixed;
		top: 50px;
		left: 50px;
	}
</style>
