<script>
</script>

<template lang="pug">
  a.btn(href="button") button
</template>

<style>
	/* 高さ、幅はラッパーで設定 */
	.btn {
		display: inline-grid;
		justify-items: center;
		align-items: center;
		padding: 0 1em;
		border: 1px solid #000;
		transition: 0.3s;
		border-radius: 100vh;
		&:hover {
			background-color: rgb(235, 235, 235);
		}
	}
</style>
