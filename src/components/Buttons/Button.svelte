<script>
  import img from '../../assets/report-svgrepo-com.svg'
  import { BUTTONS } from '../../helpers/constants'
  export let disabled = false, onClick, name

  const isReportButton = name === BUTTONS.Report.name
  const backgroundColor = BUTTONS[name].color || 'white'
</script>

<style>
  /* Контейнер кнопки */
.button {
  height: 40px;
  width: 100px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 8px;

  &[disabled] {
    color: rgba(0, 0, 0, 0.38);
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.38);
  }
}

  .report {
    width: 40px;
    padding: 8px;
    & img {
      display:block;
      width: 100%;
      height: 100%;
    }
  }
</style>

<button class={`button ${isReportButton && 'report'}`} on:click={onClick} disabled={disabled} style={`background-color: ${disabled ? '#e0e0e0' : backgroundColor};`}>
  {#if isReportButton}
    <img src={img} alt=""/>
  {:else}
    {name}
  {/if}
</button>
