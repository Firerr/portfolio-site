import Image from 'next/image';
import styles from './page.module.css';
import Main from '@/components/Main';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/styles.css'

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
