import type { ReactNode } from 'react';
import css from './FilterLayout.module.css';

interface NotesFilterLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
  modal: ReactNode;
}

export default function NotesFilterLayout({
  children,
  sidebar,
  modal,
}: NotesFilterLayoutProps) {
  return (
    <div className={css.wrapper}>
      <aside className={css.sidebar}>{sidebar}</aside>
      <section className={css.content}>{children}</section>
      {modal}
    </div>
  );
}