import Article from '@/components/layouts/Article';
import { GITHUB_USER_NAME } from '@/constants';

export default function Page() {
  return <Article>{`Hello, It's ${GITHUB_USER_NAME}'s blog!`}</Article>;
}
