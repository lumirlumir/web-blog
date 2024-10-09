import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Aside from '@/components/layouts/Aside';
import Body from '@/components/layouts/Body';
import Header from '@/components/layouts/Header';
import Main from '@/components/layouts/Main';

import Categories from '@/components/aside/Categories';
import Home from '@/components/aside/Home';

import Title from '@/components/header/Title';

import { USER } from '@/constants/github';

// TODO: import '@/styles/global.scss';

export const metadata = {
  title: {
    template: `%s | ${USER.name}`,
    default: USER.name,
  },
  description: USER.bio,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <Body>
        <Header>
          <Title />
        </Header>
        <Aside>
          <Home />
          <Categories />
        </Aside>
        <Main>{children}</Main>

        <Analytics />
        <SpeedInsights />
      </Body>
    </html>
  );
}
