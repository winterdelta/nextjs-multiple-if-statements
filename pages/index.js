import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [speed, setSpeed] = useState(1);

  const [test, setTest] = useState('string');

  function incrementSpeed() {
    if (speed === 0.75) {
      setSpeed(1);
      setTest('new string');
    }
    if (speed === 1) {
      setSpeed(1.25);
      setTest('string');
    }
    if (speed === 1.25) {
      setSpeed(1.5);
    }
    if (speed === 1.5) {
      setSpeed(1.75);
    }
    if (speed === 1.75) {
      setSpeed(2);
    }
    if (speed === 2) {
      setSpeed(0.75);
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <div>Content</div>
        <button onClick={incrementSpeed}>{speed}</button>
        <div>{test}</div>
      </main>
    </div>
  );
}
