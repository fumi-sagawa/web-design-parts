<script>
</script>

<template lang="pug">
.navOuter
  .nav
    a.nav__text(href=".") Home
    a.nav__text(href="button") Button
    a.nav__text(href="header") Header
    a.nav__text(href="hero") Hero
    a.nav__text(href="footer") Footer
</template>

<style>
	.navOuter {
		width: 100vw;
		height: calc(var(--vh, 1vh) * 100);
		display: grid;
		align-content: center;
		justify-content: center;
	}
	.nav {
		display: grid;
		grid-row-gap: 20px;
	}
	.nav__text {
		font-size: 34px;
		text-align: center;
		font-weight: 100;
	}
</style>
