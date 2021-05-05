<script>
	import { onMount } from 'svelte';

	let el;
	onMount(() => {
		(async () => {
			const { gsap } = await import('gsap');
			const { ScrollTrigger } = await import('gsap/ScrollTrigger');
			gsap.registerPlugin(ScrollTrigger);
			gsap.to('.target', {
				// 動かしたい要素は".a"
				x: 200, // 右方向に500動く
				duration: 1, // アニメーションは1秒間
				scrollTrigger: {
					trigger: '.target', // 要素".a"がビューポートに入ったときにアニメーション開始
					start: 'center center', // アニメーション開始位置
					markers: true // マーカー表示
				}
			});
		})();
	});
</script>

<template lang="pug">
footer.footer.target
  img.footer__logo(src='img/logo.png' alt='BOTA')
  nav.footer__nav
    div.nav__inner
      h4.nav__title About
      ul.nav__list
        li: a(href='.') ホーム
        li: a(href='.') サービス紹介
        li: a(href='.') 特徴
        li: a(href='.') 料金
        li: a(href='.') 事例
        li: a(href='.') よくある質問
    div.nav__inner
      h4.nav__title Company
      ul.nav__list
        li: a(href='.') 会社概要
        li: a(href='.') お知らせ
        li: a(href='.') ブログ
        li: a(href='.') facebook
        li: a(href='.') twitter
    div.nav__inner
      h4.nav__title Contact
      ul.nav__list
        li: a(href='.') お問い合わせ
        li: a(href='.') 資料請求
</template>

<style>
	.footer {
		display: grid;
		grid-auto-flow: column;
		/* 両端揃え */
		justify-content: space-between;
	}
	.footer__logo {
		height: 40px;
		width: 40px;
		object-fit: contain;
	}
	.footer__nav {
		display: grid;
		grid-auto-flow: column;
		column-gap: 50px;
	}
	.nav__inner {
		display: grid;
		align-content: start;
		row-gap: 20px;
	}
	.nav__title {
		font-weight: 700;
	}
	.nav__list {
		display: grid;
		row-gap: 10px;
		a {
			transition: 0.3s;
			&:hover {
				color: #777;
			}
		}
	}
</style>
