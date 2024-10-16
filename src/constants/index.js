import { join } from 'path';

// GitHub User, Ref: https://docs.github.com/en/rest/users/users
export const GITHUB_USER_LOGIN = 'lumirlumir';
export const GITHUB_USER_NAME = '루밀LuMir';
export const GITHUB_USER_BIO = 'PLAY KEYBOARD, STRIKE A CODE🎨';
export const GITHUB_USER_HTML_URL = `https://github.com/${GITHUB_USER_LOGIN}`;

// GitHub Repository, Ref: https://docs.github.com/en/rest/repos/repos
export const GITHUB_REPO_NAME = 'web-blog';
export const GITHUB_REPO_FULL_NAME = `${GITHUB_USER_LOGIN}/${GITHUB_REPO_NAME}`;

// Path
export const PATH_DOCS = join(process.cwd(), 'src', 'posts', 'docs');

// Extension
export const EXT_MD = '.md';
export const EXT_MD_REGEXP = new RegExp(`${EXT_MD}$`, 'i');
