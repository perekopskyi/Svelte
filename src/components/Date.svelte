<script>
  export let item;
  import {formatDateRange} from '../helpers/utils'

  const formattedRange = formatDateRange(item.startDate, item.endDate)

  const link = item.financialEventGroupId ? `https://sellercentral.amazon.com/gp/payments-account/view-transactions.html?subview=groups&groupId=${item.financialEventGroupId}` : null
</script>

<style>
  .date-column {
    width: 20%;
  }
</style>

<div class="date-column">
  {#if link}
    <a href={link}>{formattedRange}</a>
  {:else}
    {formattedRange}
  {/if}
</div>