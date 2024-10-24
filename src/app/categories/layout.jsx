import Article from '@/components/layouts/Article';
import Nav from '@/components/layouts/Nav';
import Sort from '@/components/nav/Sort';

export default function Layout({ children }) {
  return (
    <>
      <Article>{children}</Article>
      <Nav>
        <Sort />
      </Nav>
    </>
  );
}
