import Link from 'next/link';

export default async function Home() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
    </ul>
  );
}
