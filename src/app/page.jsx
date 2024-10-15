import Article from '@/components/layouts/Article';
import { USER } from '@/constants/github';

export default function Page() {
  return <Article>{`Hello, It's ${USER.name}'s blog!`}</Article>;
}
