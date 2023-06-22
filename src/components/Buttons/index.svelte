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

  const isReportEnaibled = typeof item.importedAmount === 'number' && (item.importedAmount !== 0 || item.importedIgnoredAmount !== 0)
</script>


<div class="buttons-column">
  {#if state === STATES.fullyImported}
    <Button name={BUTTONS.Import.name} onClick={() => handleButtonClick(BUTTONS.Import.name)} color={BUTTONS.Import.color} disabled={true} /> 
  {:else if state === STATES.notImported}
    <Button name={BUTTONS.Import.name} onClick={() => handleButtonClick(BUTTONS.Import.name)} color={BUTTONS.Import.color} /> 
  {:else if state === STATES.fetchingEvents}
    <Button name={BUTTONS.Import.name} onClick={() => handleButtonClick(BUTTONS.Import.name)} color={BUTTONS.Import.color} disabled={true} /> 
  {:else if state === STATES.upgrade}
    <Button name={BUTTONS.Upgrade.name} onClick={() => handleButtonClick(BUTTONS.Upgrade.name)} color={BUTTONS.Upgrade.color} /> 
  {:else if state === STATES.buy}
    <Button name={BUTTONS.Buy.name} onClick={() => handleButtonClick(BUTTONS.Buy.name)} color={BUTTONS.Buy.color} /> 
  {:else if state === STATES.incompleteImport}
    <Button name={BUTTONS.Import.name} onClick={() => handleButtonClick(BUTTONS.Import.name)} color={BUTTONS.Import.color} /> 
  {/if}

  <Button name={BUTTONS.Report.name} onClick={() => handleButtonClick(BUTTONS.Report.name)} color={BUTTONS.Report.color} disabled={!isReportEnaibled} /> 
</div>