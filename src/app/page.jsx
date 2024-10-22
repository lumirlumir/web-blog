import Article from '@/components/layouts/Article';

import { getGithubUsers } from '@/utils/fetch';

export default async function Page() {
  const { name } = await getGithubUsers();

  return <Article>{`Hello, It's ${name}'s blog!`}</Article>;
}
