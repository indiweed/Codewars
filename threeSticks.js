function maxlen(l1, l2) {
    let long = Math.max(l1, l2)
    let short = Math.min(l1, l2)
    if (long > 3 * short) return long / 3
    if (long > 2 * short) return short
    return long / 2
  }