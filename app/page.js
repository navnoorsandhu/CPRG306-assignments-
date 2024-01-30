
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2">
          <span style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
            Week 2
          </span>
        </Link>
      </p>
    </main>
  );
}
