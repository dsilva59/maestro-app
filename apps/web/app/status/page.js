export default async function Status() {
  const apiBase = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';
  let result = null, ok = false;
  try {
    const res = await fetch(`${apiBase}/health`);
    ok = res.ok;
    result = await res.json();
  } catch (e) {
    result = { error: e.message };
  }
  return (
    <main style={{fontFamily:'system-ui',padding:'2rem',maxWidth:900,margin:'0 auto'}}>
      <h1>Statut API</h1>
      <p>API_BASE: {process.env.NEXT_PUBLIC_API_BASE_URL || '(non défini)'} </p>
      <pre>{JSON.stringify(result, null, 2)}</pre>
      <p>OK: {String(ok)}</p>
    </main>
  );
}
