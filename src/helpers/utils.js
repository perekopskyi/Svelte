export function formatDateRange(startDate, endDate) {
  const options = { month: 'short', day: 'numeric' }
  const start = new Date(startDate).toLocaleDateString('en-US', options)
  const end = new Date(endDate).toLocaleDateString('en-US', options)
  return `${start} - ${end}`
}

export const STATES = {
  fullyImported: 'fully imported',
  fetchingEvents: 'fetching events',
  upgrade: 'upgrade',
  buy: 'buy',
  notImported: 'not imported',
  incompleteImport: 'incomplete import',
}

export const getState = item => {
  const {
    covered,
    importedAmount,
    importedIgnoredAmount,
    isGettingRefunds,
    isGettingAddresses,
    planUpgradeNeeded,
    totalAmount,
  } = item

  if (typeof totalAmount === 'number' && typeof importedAmount === 'number') {
    // * fully imported state (priority 1)
    // totalAmount === importedAmount (and if totalAmount is 0, check if importedIgnoredAmount is not 0)
    if (totalAmount === importedAmount) {
      if (totalAmount === 0) {
        if (importedIgnoredAmount !== 0) {
          return STATES.incompleteImport
        }
        return STATES.notImported
      }

      return STATES.fullyImported
    }

    // * not imported state (priority 4)
    if (importedAmount === 0 && importedIgnoredAmount === 0) {
      return STATES.notImported
    }

    // * incomplete import state (priority 4)
    if (
      totalAmount !== importedAmount &&
      (totalAmount !== 0 || importedIgnoredAmount !== 0)
    ) {
      return STATES.incompleteImport
    }
  }

  // * fetching events state (priority 2)
  if (!!isGettingRefunds || !!isGettingAddresses) {
    return STATES.fetchingEvents
  }

  // * upgrade state (priority 3)
  if (planUpgradeNeeded) {
    return STATES.upgrade
  }

  // * buy state (priority 3)
  if (!covered) {
    return STATES.buy
  }

  return STATES.notImported
}
