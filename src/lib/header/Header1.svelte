<script>
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
	}
	.nav__list {
		display: grid;
		align-items: center;
		grid-auto-flow: column;
		column-gap: 20px;
	}
</style>
