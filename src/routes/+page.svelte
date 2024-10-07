<script lang="ts">
	import type { PageData } from './$types';
	
	export let data: PageData;
</script>

{#each data.d as dma}
	<h1>{{dma}}</h1>
{/each}