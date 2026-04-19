import type { ReactNode } from 'react';
import css from './FilterLayout.module.css';

interface NotesFilterLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
  modal: ReactNode;
  notes: ReactNode;
}

export default function NotesFilterLayout({
  sidebar,
  modal,
  notes,
}: NotesFilterLayoutProps) {
  return (
    <div className={css.wrapper}>
      <aside className={css.sidebar}>{sidebar}</aside>
      <section className={css.content}>{notes}</section>
      {modal}
    </div>
  );
}