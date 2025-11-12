export default function Home() {
  return (
    <main style={{
      background: 'linear-gradient(135deg, #0a0a0a, #1a1a1a)',
      color: 'white',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif'
    }}>
      <img src="/28BUBBLES_The_Clean_Company_Logo.png" alt="28Bubbles Logo" style={{ width: '200px', marginBottom: '20px' }} />
      <h1>Welcome to 28Bubbles</h1>
      <p>Licensed & Insured | Guaranteed Clean</p>
      <p>📞 706-428-4238</p>
      <p>✉️ support@28bubbles.com | sales@28bubbles.com</p>
    </main>
  );
}
