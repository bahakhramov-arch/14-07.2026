'use client';

import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      gap: '1rem',
      fontFamily: 'sans-serif',
    }}>
      <h1>Добро пожаловать в Next.js 👋</h1>
      <p>Счётчик: {count}</p>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </main>
  );
}