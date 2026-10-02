/**
 * Utility formatters for currency, dates, and strings.
 */

/**
 * Format a number as Indonesian Rupiah.
 * formatRupiah(85000) → "Rp 85.000"
 */
export function formatRupiah(amount: number): string {
  return `Rp ${amount.toLocaleString('id-ID')}`;
}

/**
 * Format a date string to Indonesian locale.
 * formatDate('2026-10-15') → "15 Oktober 2026"
 */
export function formatDate(dateStr: string, lang: 'id' | 'en' = 'id'): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/**
 * Generate a random ticket code.
 * generateTicketCode() → "JTS-A3X9K2"
 */
export function generateTicketCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `JTS-${code}`;
}

/**
 * Generate a random coupon code.
 * generateCouponCode('FSN') → "FSN-7K3M"
 */
export function generateCouponCode(prefix: string): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = '';
  for (let i = 0; i < 4; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `${prefix}-${code}`;
}

/**
 * Get a localized field value.
 * getLocalized({ name_id: 'Halo', name_en: 'Hello' }, 'name', 'en') → "Hello"
 */
export function getLocalized(
  obj: Record<string, unknown>,
  field: string,
  lang: 'id' | 'en'
): string {
  const key = `${field}_${lang}`;
  const fallback = `${field}_id`;
  return (obj[key] as string) || (obj[fallback] as string) || '';
}

/**
 * Truncate text to a maximum length.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}
