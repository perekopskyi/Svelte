<script>
  import { onMount } from 'svelte';
  import Table from '../components/Table.svelte';
  import {dataset1 as MOCK_DATASET_1, dataset2 as MOCK_DATASET_2} from '../helpers/constants'

  let dataset1 = []
  let dataset2 = []

  const loadDataset = async () => {
    // Simulating API fetch delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    dataset1 = MOCK_DATASET_1.settlements;
    dataset2 = MOCK_DATASET_2.settlements;
  };

  onMount(loadDataset);
</script>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 32px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .header {
    margin-left: 24px;
  }
</style>

<div class="container">
  <h2 class="header">Test 1</h2>
  <Table dataset={dataset1} />
  <hr />
  <h2 class="header">Test 2</h2>
  <Table dataset={dataset2}/>
</div>