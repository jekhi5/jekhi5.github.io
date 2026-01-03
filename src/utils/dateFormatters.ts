/**
 * Create a date from YYYY-MM-DD string in local timezone (not UTC)
 * Prevents timezone issues where dates shift by a day
 *
 * @param dateString - Date string in YYYY-MM-DD format (e.g., '2025-01-15')
 * @returns Date object in local timezone
 */
export function createLocalDate(dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(Number);
    // Month is 0-indexed in JavaScript Date
    return new Date(year, month - 1, day);
}

/**
 * Format a date for display in blog posts
 */
export function formatBlogDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
}

/**
 * Format a date as a short string (e.g., "Dec 1, 2025")
 */
export function formatShortDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

/**
 * Format a date as month and year only (e.g., "10/2025")
 */
export function formatMonthYear(date: Date): string {
    const month = date.getMonth() + 1; // getMonth() is 0-indexed
    const year = date.getFullYear();
    return `${month}/${year}`;
}

/**
 * Format a date for ISO string (e.g., for meta tags, APIs)
 */
export function formatISODate(date: Date): string {
    return date.toISOString();
}
