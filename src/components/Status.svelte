<script>
  import { STATES } from "../helpers/utils"

  export let item
  export let state

</script>

<style>
  .status-column {
    text-align: left;
    width: 50%;
  }
</style>


<div class="status-column">
  {#if state === STATES.fullyImported}
    {item.importedAmount?.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) || (item.open ? 'Open' : null)}
  {:else if state === STATES.notImported}
    {item.totalAmount?.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) || (item.open ? 'Open' : null)}
  {:else if state === STATES.fetchingEvents}
    Fetching refund events
  {:else if state === STATES.upgrade}
    Upgrade from Lite
  {:else if state === STATES.buy}
    No subscription
  {:else if state === STATES.incompleteImport}
    Incomplete
  {/if}
</div>