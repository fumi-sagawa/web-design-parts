<script>
	import Button1 from '$lib/button/Button1.svelte';
</script>

<template lang="pug">
header.header
  img.header__logo(src="/img/logo.png", alt="alt")
  nav.header__nav
    ul.nav__list
      li: a(href="header", title="title") Home
      li: a(href="header", title="title") News
      li: a(href="header", title="title") Blog
      li: a(href="header", title="title") About
      li: a(href="header", title="title") Contact
    .header__buttons
      Button1
      Button1

</template>

<style>
	.header {
		/* 高さ */
		height: 70px;
		display: grid;
		grid-auto-flow: column;
		justify-content: space-between;
		padding: 10px 20px;
		border: 1px solid rgb(167, 167, 167);
	}
	.header__logo {
		width: 40px;
		object-fit: contain;
	}
	.header__nav {
		display: grid;

		grid-auto-flow: column;
		column-gap: 20px;
	}
	.nav__list {
		display: grid;
		grid-auto-columns: 80px;
		align-items: center;
		grid-auto-flow: column;
		li {
			height: 100%;
		}
		a {
			height: 100%;
			display: grid;
			justify-items: center;
			align-items: center;
			background-color: #fff;
			transition: 0.3s;
			&:hover {
				background-color: rgb(237, 237, 237);
			}
		}
	}
	.header__buttons {
		display: grid;
		grid-auto-flow: column;
		column-gap: 10px;
	}
</style>
