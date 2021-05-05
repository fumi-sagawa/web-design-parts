<script>
</script>

<template lang="pug">
nav.nav
	a.nav__text(href=".") Home
	a.nav__text(href="button") Button
	a.nav__text(href="header") Header
	a.nav__text(href="hero") Hero
	a.nav__text(href="footer") Footer
</template>

<style>
	.nav {
		display: grid;
		grid-row-gap: 14px;
		padding: 26px;
		border-radius: 10px;
		background: #ffffff;
		box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
	}
	.nav__text {
		font-size: rem(18px);
		font-weight: 300;
		color: rgb(67, 67, 67);
	}
</style>
