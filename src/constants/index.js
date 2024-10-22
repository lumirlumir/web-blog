import { join } from 'path';

// GitHub Repository, Ref: https://docs.github.com/en/rest/repos/repos
export const GITHUB_REPO_OWNER = 'lumirlumir';
export const GITHUB_REPO_NAME = 'web-blog.lumir.page';
export const GITHUB_REPO_FULL_NAME = `${GITHUB_REPO_OWNER}/${GITHUB_REPO_NAME}`;

// Path
export const PATH_DOCS = join(process.cwd(), 'src', 'posts', 'docs');

// Extension
export const EXT_MD = '.md';
export const EXT_MD_REGEXP = new RegExp(`${EXT_MD}$`, 'i');
