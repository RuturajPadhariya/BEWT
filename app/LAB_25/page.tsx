import Link from 'next/link';
import { fetchStudents } from './api';

export default async function Page() {
  let students: any[] = [];
  try {
    students = await fetchStudents();
  } catch (e) {
    return <div>Unable to load students. Check MOCKAPI_BASE and network.</div>;
  }

  return (
    <div>
      <h1>Students (getAll)</h1>
      <p>Simple list fetched from MockAPI.</p>
      <ul>
        {students.map((s) => (
          <li key={s.id} style={{ marginBottom: 8 }}>
            <strong>{s.name || s.fullName || `Student ${s.id}`}</strong>
            {' - '}
            <Link href={`/LAB_25/${s.id}`}>View details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
