import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import ThemeProvider from '@/components/common/ThemeProvider';
import ThemeScript from '@/components/common/ThemeScript';

import Aside from '@/components/layouts/Aside';
import Body from '@/components/layouts/Body';
import Header from '@/components/layouts/Header';
import Main from '@/components/layouts/Main';

import Categories from '@/components/aside/Categories';
import Links from '@/components/aside/Links';
import Profile from '@/components/aside/Profile/Profile';

import DarkModeToggle from '@/components/header/DarkModeToggle';
import Title from '@/components/header/Title';

import { GITHUB_USER_NAME, GITHUB_USER_BIO } from '@/constants';

import '@/styles/global.scss';

export const metadata = {
  title: {
    template: `%s | ${GITHUB_USER_NAME}`,
    default: GITHUB_USER_NAME,
  },
  description: GITHUB_USER_BIO,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" data-theme="dark">
      <ThemeProvider>
        <Body>
          <ThemeScript />

          <Header>
            <Title />
            <DarkModeToggle />
          </Header>
          <Aside>
            <Profile />
            <Links />
            <Categories />
          </Aside>
          <Main>{children}</Main>

          <Analytics />
          <SpeedInsights />
        </Body>
      </ThemeProvider>
    </html>
  );
}
