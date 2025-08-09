import React from 'react';

export default function Home() {
  return (
    <main style={{fontFamily:'system-ui',padding:'2rem',maxWidth:900,margin:'0 auto'}}>
      <h1>MAESTRO</h1>
      <p>Plateforme de gestion des emplois du temps – version starter.</p>
      <ul>
        <li>Front : Next.js (export statique)</li>
        <li>API : configurable via NEXT_PUBLIC_API_BASE_URL</li>
      </ul>
      <p><a href="/status">Tester l’API</a></p>
    </main>
  );
}
