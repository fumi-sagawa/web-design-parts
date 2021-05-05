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
		padding: 0.25em 1em;
		border: 1px solid #000;
		transition: 0.3s;
		position: relative;
		border-radius: 100vh;
		&:after {
			font-family: 'Material icons';
			content: 'arrow_right';
			position: absolute;
			right: rem(10px);
			transition: 0.3s;
		}
		&:hover {
			background-color: rgb(235, 235, 235);
			&:after {
				right: rem(5px);
			}
		}
	}
</style>
