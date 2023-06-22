<script>
  import img from '../../assets/report-svgrepo-com.svg'
  import { BUTTONS } from '../../helpers/constants'
  export let color = 'white', disabled = false, onClick, name
</script>

<style>
  .btn {
    padding: 8px 16px ;
    border-radius: 8px;
  }
</style>

<button class="btn" on:click={onClick} disabled={disabled} style={`background-color: ${disabled ? 'white' : color};`}>
  {#if name === BUTTONS.Report.name}
    <img width="12" src={img} alt=""/>
  {:else}
    {name}
  {/if}
</button>
