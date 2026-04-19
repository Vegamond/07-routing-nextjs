import Link from 'next/link';
import css from './Home.module.css';

export default function HomePage() {
  return (
    <main className={css.main}>
      <h1 className={css.title}>Welcome to NoteHub</h1>
      <p className={css.description}>
        NoteHub is a simple and efficient application designed for managing
        personal notes.
      </p>
      <Link href="/notes/filter/all" className={css.link}>
        Go to Notes
      </Link>
    </main>
  );
}