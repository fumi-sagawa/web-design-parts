<script>
	import Footer1 from '$lib/footer/Footer1.svelte';
	import Footer2 from '$lib/footer/Footer2.svelte';
	import Footer3 from '$lib/footer/Footer3.svelte';
	import Footer4 from '$lib/footer/Footer4.svelte';
</script>

<template lang="pug">
  .ContainerGrid.margintb100
    .partsGrid.space
      h1 Footer1
      Footer1
    .partsGrid.space
      h1 Footer2
      Footer2
    .partsGrid.space
      h1 Footer3
      Footer3
    .partsGrid.space
      h1 Footer4
      Footer4



</template>

<style>
	.margintb100 {
		margin: 100px 0;
	}
	h1 {
		font-size: 20px;
		margin-bottom: 8px;
	}
	.ContainerGrid {
		display: grid;
		row-gap: 20px;
	}
	.space {
		margin: 20px 0;
	}
</style>
