import Article from '@/components/layouts/Article';
import Nav from '@/components/layouts/Nav';
import SortContainer from '@/components/nav/SortContainer';

export default function Layout({ children }) {
  return (
    <>
      <Article>{children}</Article>
      <Nav>
        <SortContainer />
      </Nav>
    </>
  );
}
