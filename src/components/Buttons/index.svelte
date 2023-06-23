<script>
  import { BUTTONS } from "../../helpers/constants"
  import { STATES } from "../../helpers/utils"
  import Button from "./Button.svelte"

  export let item
  export let state

  // Function to handle button clicks
  const handleButtonClick = (buttonName) => {
console.log(`Button clicked: ${buttonName}`);
  };

  const isReportEnabled = typeof item.importedAmount === 'number' && (item.importedAmount !== 0 || item.importedIgnoredAmount !== 0)
</script>

<style>
  .buttons-column {
    width: 18%;
    display: flex;
    align-items: center;
    justify-content: end;
  }
</style>


<div class="buttons-column">
  {#if state === STATES.fullyImported || state === STATES.fetchingEvents}
    <Button name={BUTTONS.Import.name} onClick={() => handleButtonClick(BUTTONS.Import.name)}  disabled={true} /> 
  {:else if state === STATES.notImported || state === STATES.incompleteImport}
    <Button name={BUTTONS.Import.name} onClick={() => handleButtonClick(BUTTONS.Import.name)}/> 
  {:else if state === STATES.upgrade}
    <Button name={BUTTONS.Upgrade.name} onClick={() => handleButtonClick(BUTTONS.Upgrade.name)} /> 
  {:else if state === STATES.buy}
    <Button name={BUTTONS.Buy.name} onClick={() => handleButtonClick(BUTTONS.Buy.name)}/> 
  {/if}

  <Button name={BUTTONS.Report.name} onClick={() => handleButtonClick(BUTTONS.Report.name)} disabled={!isReportEnabled} /> 
</div>