import Section from '@/components/layouts/Section/Section';
import Giscus from '@/components/section/Giscus';

export default function Layout({ children }) {
  return (
    <>
      {children}
      <Section>
        <Giscus />
      </Section>
    </>
  );
}
