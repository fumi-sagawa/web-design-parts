<script>
</script>

<template lang="pug">
  a.btn(href="button") button
</template>

<style>
	/* 高さ、幅はラッパーで設定 */
	/* パディングを使った高さ調整ボタン */
	.btn {
		text-align: center;
		padding: 0.25em 1em;
		border: 1px solid #000;
		transition: 0.3s;
		&:hover {
			background-color: rgb(235, 235, 235);
		}
	}
</style>
