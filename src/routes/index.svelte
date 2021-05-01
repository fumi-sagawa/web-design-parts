<script>
</script>

<template lang="pug">
  h1 tes
    div.test
      div.test2 111
      div.test3 111
</template>

<style>
	h1 {
		font-style: italic;
		font-weight: 700;
		display: flex;
		align-content: center;
		justify-content: center;
	}
	.test2 {
		color: #000;
		font-size: 30px;
	}
	.test3 {
		min-height: calc(var(--vh, 1vh) * 10);
		font-weight: 700;
		color: $color-main;
		font-size: rem(30px);
	}
</style>
