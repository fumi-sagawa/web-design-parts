<script>
	import ButtonPad from '$lib/button/ButtonPad.svelte';
	import Button1 from '$lib/button/Button1.svelte';
	import Button2 from '$lib/button/Button2.svelte';
	import Button3 from '$lib/button/Button3.svelte';
	import Button4 from '$lib/button/Button4.svelte';
</script>

<template lang="pug">
  .partsGrid.margintb20
    .ContainerGrid
      h1 ButtonPad
      ButtonPad
      h1 Button1
      Button1
      h1 Button2
      Button2
      h1 Button3
      Button3
      h1 Button4
      Button4
</template>

<style>
	.margintb20 {
		margin: 100px 0;
	}
	h1 {
		font-size: 20px;
		text-align: end;
	}
	.ContainerGrid {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		column-gap: 50px;
		row-gap: 20px;
		/* grid-auto-rows: 70px; */
	}
</style>
