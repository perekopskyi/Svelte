<script>
  import Row from './Row.svelte'
  import Skeleton from './Skeleton.svelte'
  export let dataset
</script>

<style>
  .table {
    margin: 16px auto;
  }
</style>


<div class="table">
  {#if dataset.length === 0}
  <!-- Skeleton loading blocks -->
  {#each Array(6).fill(0) as _, i}
    <Skeleton />
  {/each}
{:else}
  {#each Array(6).fill(0) as _, i}
  {#if i < dataset.length}
    <Row item={dataset[i]} />
  {:else}
    <Skeleton />
  {/if}
  {/each}
{/if}
</div>
