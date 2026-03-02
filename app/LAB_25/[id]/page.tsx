import Link from 'next/link';
import { fetchStudentById } from '../api';

type Props = { params: { id: string } };

export default async function StudentPage({ params }: Props) {
  const { id } = params;
  let student: any = null;
  try {
    student = await fetchStudentById(id);
  } catch (e) {
    return (
      <div>
        <p>Unable to load student with id {id}.</p>
        <Link href="/LAB_25">Back to list</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Student details</h1>
      <p><strong>ID:</strong> {student.id}</p>
      <p><strong>Name:</strong> {student.name || student.fullName || '—'}</p>
      <p><strong>Email:</strong> {student.email || '—'}</p>
      <p><strong>Notes:</strong> {student.notes || 'No notes'}</p>
      <Link href="/LAB_25">Back to list</Link>
    </div>
  );
}
