const numberFormatter = new Intl.NumberFormat('en-US')

/** 23004 → "23,004" (formato del diseño). */
export function formatNumber(value: number): string {
  return numberFormatter.format(value)
}
