<script>
  import { getState } from '../helpers/utils'
  import Buttons from './Buttons/index.svelte'
  import Date from './Date.svelte'
  import Status from './Status.svelte'
  export let item;
  
  const state = getState(item)
</script>

<style>
  .list-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    padding: 8px;
    margin-top: 16px;
  }
</style>

<div class="list-row">
  <Date item={item} />
  <Status item={item} state={state} />
  <Buttons item={item} state={state} />
</div>