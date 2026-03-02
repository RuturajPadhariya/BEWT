import Link from 'next/link';

export const metadata = { title: 'Lab 25 - Students' };

export default function Lab25Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body style={{ fontFamily: 'system-ui, Arial', margin: 24 }}>
        <nav style={{ marginBottom: 18 }}>
          <Link href="/">Home</Link>
          {' '}|{' '}
          <Link href="/LAB_25">Students (getAll)</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
