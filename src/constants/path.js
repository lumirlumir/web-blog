import { join } from 'path';

export const DOCS = join(process.cwd(), 'src', 'posts', 'docs');

export const EXTENSION = Object.freeze({
  md: '.md',
  get mdRegExp() {
    return new RegExp(`${this.md}$`, 'i');
  },
});
