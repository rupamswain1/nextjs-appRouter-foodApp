import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      hello World
      <div>
        <Link href="/meals">Meals</Link>
      </div>
      <div>
        <Link href="/community">Community</Link>
      </div>
      <div>
        <Link href="/meals/share">Meals/share</Link>
      </div>
      <div>
        <Link href="/meals/helloSlug">Meals/Slug</Link>
      </div>
    </main>
  );
}
