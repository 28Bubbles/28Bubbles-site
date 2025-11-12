import Head from 'next/head'

export default function Home() {
  const siteName = '28Bubbles'
  const description = 'Licensed and Insured — Guaranteed Clean. Professional residential and commercial cleaning services.'
  const phone = '706-428-4238'
  const canonical = 'https://28bubbles.com/'
  return (
    <>
      <Head>
        <title>28Bubbles — The Clean Company</title>
        <meta name="description" content={description} />
        <meta property="og:image" content={canonical + 'og-image.png'} />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-[#07122a] via-[#0d3358] to-[#0b2240] text-white flex items-center justify-center">
        <div className="text-center max-w-2xl">
          <img src="/header-logo.png" alt="28Bubbles logo" className="mx-auto h-20" />
          <h1 className="text-4xl font-extrabold mt-4">28Bubbles — Guaranteed Clean</h1>
          <p className="mt-4">Call us: <a href="tel:+17064284238" className="underline">{phone}</a></p>
          <p className="mt-2">support@28bubbles.com • sales@28bubbles.com</p>
        </div>
      </main>
    </>
  )
}