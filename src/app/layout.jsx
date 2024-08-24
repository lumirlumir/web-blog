import { SpeedInsights } from '@vercel/speed-insights/next';

import Aside from '@/layouts/Aside';
import Body from '@/layouts/Body';
import Header from '@/layouts/Header';
import Main from '@/layouts/Main';

export default function Layout({ children }) {
  return (
    <html lang="ko">
      <Body>
        <Header />
        <Aside />
        <Main>{children}</Main>
        <SpeedInsights />
      </Body>
    </html>
  );
}
