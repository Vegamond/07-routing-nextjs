import NotesClient from '@/app/notes/filter/[...slug]/Notes.client';

export default function NotesDefault() {
  return <NotesClient initialTag='all' />;
}

