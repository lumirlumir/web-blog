import { markdownToText } from './markup';

/**
 * @typedef {import('@/types').MarkdownDocument} MarkdownDocument
 */

/**
 * Use with an array of {@link MarkdownDocument} type.
 *
 * @param {'title' | 'date-created' | 'date-updated'} sort `'title'`, `'date-created'` or `'date-updated'` can be used.
 * @param {'asc' | 'desc'} order `'asc'` or `'desc'` can be used.
 * @returns {function} A comparison function for use with `Array.prototype.sort`.
 */
export function compareMarkdownDocument(sort, order) {
  switch (sort) {
    case 'title': {
      return function (a, b) {
        const titleA = markdownToText(a.data.title.toLowerCase()); // Case insensitive.
        const titleB = markdownToText(b.data.title.toLowerCase()); // Case insensitive.

        return order === 'asc'
          ? titleA.localeCompare(titleB, 'ko') // Ascending.
          : titleB.localeCompare(titleA, 'ko'); // Descending.
      };
    }
    case 'date-created':
    case 'date-updated': {
      return function (a, b) {
        const dateA = new Date(
          a.data.date[sort === 'date-created' ? 'created' : 'updated'],
        );
        const dateB = new Date(
          b.data.date[sort === 'date-created' ? 'created' : 'updated'],
        );

        // NaN check for invalid dates
        if (isNaN(dateA) || isNaN(dateB)) {
          throw new TypeError('Invalid date format.');
        }

        return order === 'asc'
          ? dateA - dateB // Ascending.
          : dateB - dateA; // Descending.
      };
    }
    default: {
      throw new TypeError(
        'Invalid sort. Use "title", "date-created", or "date-updated".',
      );
    }
  }
}
