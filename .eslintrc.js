module.exports = {
  root: true,
  extends: [
    // extends has priority. Last index has the highest priority.
    'eslint:recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  env: {
    es2024: true,
  },
  parserOptions: {
    ecmaVersion: 15,
  },
};
