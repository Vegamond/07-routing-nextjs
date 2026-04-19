import NotePreview from '@/components/NotePreview/NotePreview';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function FilterNoteModalPage({ params }: Props) {
  const { id } = (await params);
  return <NotePreview id={id} />;
}