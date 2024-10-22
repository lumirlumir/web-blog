import { GITHUB_USER_LOGIN } from '@/constants';

/**
 * Fetches GitHub user data.
 *
 * @async
 * @returns {Promise<Object>} A promise that resolves to a GitHub user data object.
 */
export async function getGithubUsers() {
  const response = await fetch(`https://api.github.com/users/${GITHUB_USER_LOGIN}`, {
    headers: {
      Authorization: `Bearer ${process.env.GH_PAT}`,
    },
  });

  return response.json();
}
