import NotesClient from '@/app/notes/Notes.client';
import type { NoteFilterTag } from '@/types/note';

interface Props {
  params: Promise<{ slug: string[] }>;
}

export default async function FilteredNotesPage({ params }: Props) {
  const { slug } = await params;
  const tag = (slug?.[0] ?? 'all') as NoteFilterTag;

  return <NotesClient initialTag={tag} />;
}