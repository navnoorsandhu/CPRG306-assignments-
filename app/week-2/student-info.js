
import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <p>Navnoor Singh</p>
      <p>
        GitHub repository:{' '}
        <Link href="https://github.com/navnoorsandhu/CPRG306-assignments-.git">
          <span style={{ cursor: 'pointer', color: 'blue', textDecoration: 'underline' }}>
            Github repository link
          </span>
        </Link>
      </p>
    </div>
  );
}
