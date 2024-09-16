import { USER } from '@/constants/github';

import Article from '@/components/layouts/Article';

export default function Page() {
  return <Article>{`Hello, It's ${USER.name}'s blog!`}</Article>;
}
