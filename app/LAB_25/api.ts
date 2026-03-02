export const MOCKAPI_BASE = process.env.MOCKAPI_BASE || 'https://63f-example.mockapi.io';

export async function fetchStudents() {
  const res = await fetch(`${MOCKAPI_BASE}/students`);
  if (!res.ok) throw new Error('Failed to fetch students');
  return res.json();
}

export async function fetchStudentById(id: string) {
  const res = await fetch(`${MOCKAPI_BASE}/students/${id}`);
  if (!res.ok) throw new Error('Failed to fetch student');
  return res.json();
}
