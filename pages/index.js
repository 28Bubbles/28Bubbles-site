// pages/index.js
import Link from "next/link";

export default function Home() {
  return (
    <main style={{ fontFamily: "Inter, system-ui, Arial, sans-serif", color: "#022436", minHeight: "100vh", background: "linear-gradient(180deg,#07122a 0%, #05273a 100%)" }}>
      {/* Bubble banner */}
      <section style={{ position: "relative", overflow: "hidden", padding: "48px 20px 24px" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          {[...Array(14)].map((_, i) => {
            const size = 24 + (i % 6) * 12;
            const left = (i * 73) % 100;
            const delay = (i % 7) * 0.6;
            const duration = 8 + (i % 5) * 2;
            return (
              <span
                key={i}
                style={{
                  position: "absolute",
                  left: `${left}%`,
                  bottom: "-20%",
                  width: size,
                  height: size,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.06)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.25) inset",
                  transform: "translateY(0)",
                  animation: `rise ${duration}s linear ${delay}s infinite`
                }}
              />
            );
          })}
        </div>

        {/* header area */}
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <img src="/logo-192.png" alt="28Bubbles Logo" style={{ width: 88, height: 88, objectFit: "contain", background: "transparent", borderRadius: 12 }} />
            <div>
              <div style={{ color: "#9fe8ff", fontWeight: 700, fontSize: 18 }}>28BUBBLES</div>
              <div style={{ color: "rgba(255,255,255,0.85)", fontSize: 13 }}>The Clean Company — Licensed & Insured</div>
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <div style={{ color: "#e6f9ff", fontWeight: 700 }}>Call Now</div>
            <a href="tel:+17064284238" style={{ display: "inline-block", marginTop: 6, color: "#fff", background: "#00bcd4", padding: "10px 14px", borderRadius: 8, textDecoration: "none", fontWeight: 600 }}>
              706-428-4238
            </a>
          </div>
        </div>

        {/* hero content */}
        <div style={{ maxWidth: 1100, margin: "28px auto 0", textAlign: "center", padding: "12px 20px" }}>
          <h1 style={{ color: "#ffffff", fontSize: "clamp(26px, 4vw, 44px)", margin: 0, lineHeight: 1.05 }}>Professional Commercial & Residential Cleaning — Guaranteed Clean</h1>
          <p style={{ color: "rgba(255,255,255,0.85)", marginTop: 12, fontSize: "clamp(14px, 1.6vw, 18px)" }}>
            Licensed & Insured teams with flexible scheduling for offices, homes, move-ins, move-outs and more.
          </p>

          <div style={{ marginTop: 22, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/quote"><a style={{ background: "#00bcd4", color: "#002b33", padding: "12px 20px", borderRadius: 10, textDecoration: "none", fontWeight: 700 }}>Get a Free Quote</a></Link>
            <a href="#services" style={{ border: "2px solid rgba(255,255,255,0.12)", color: "#fff", padding: "10px 18px", borderRadius: 10, textDecoration: "none", fontWeight: 600 }}>Our Services</a>
          </div>
        </div>
      </section>

      {/* Services preview (modeled after example) */}
      <section id="services" style={{ maxWidth: 1100, margin: "48px auto", padding: "0 20px" }}>
        <h2 style={{ color: "#bff1ff", fontSize: 20, textAlign: "center", marginBottom: 18 }}>Our Commercial & Residential Cleaning Services</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18 }}>
          <div style={{ background: "linear-gradient(180deg,#06232a,#03202a)", padding: 18, borderRadius: 12, color: "#dffcff" }}>
            <div style={{ fontSize: 28 }}>🏢</div>
            <h3 style={{ marginTop: 8 }}>Office & Commercial</h3>
            <p style={{ opacity: 0.9 }}>Daily/weekly/bi-weekly schedules tailored to your business — insured & bonded teams.</p>
          </div>

          <div style={{ background: "linear-gradient(180deg,#06232a,#03202a)", padding: 18, borderRadius: 12, color: "#dffcff" }}>
            <div style={{ fontSize: 28 }}>🏠</div>
            <h3 style={{ marginTop: 8 }}>Residential Cleaning</h3>
            <p style={{ opacity: 0.9 }}>Recurring and deep clean options with eco-friendly supplies available.</p>
          </div>

          <div style={{ background: "linear-gradient(180deg,#06232a,#03202a)", padding: 18, borderRadius: 12, color: "#dffcff" }}>
            <div style={{ fontSize: 28 }}>🚚</div>
            <h3 style={{ marginTop: 8 }}>Move-in / Move-out</h3>
            <p style={{ opacity: 0.9 }}>Detailed cleaning to help smooth your move — one-time or bundled services.</p>
          </div>
        </div>
      </section>

      {/* Contact / CTA footer */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.04)", padding: "28px 20px", marginTop: 44 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", gap: 20, flexWrap: "wrap", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ color: "#bff1ff", fontWeight: 700 }}>Contact</div>
            <div style={{ marginTop: 8 }}>📞 <a href="tel:+17064284238" style={{ color: "#fff", textDecoration: "none" }}>706-428-4238</a></div>
            <div style={{ marginTop: 6 }}>✉️ <a href="mailto:support@28bubbles.com" style={{ color: "#fff", textDecoration: "none" }}>support@28bubbles.com</a></div>
          </div>

          <div style={{ textAlign: "right" }}>
            <div style={{ color: "rgba(255,255,255,0.6)" }}>Licensed & Insured • Guaranteed Clean</div>
            <div style={{ marginTop: 8, fontSize: 13, color: "rgba(255,255,255,0.4)" }}>© {new Date().getFullYear()} 28Bubbles</div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes rise {
          0% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { opacity: 0.55; }
          100% { transform: translateY(-420px) translateX(10px); opacity: 0; }
        }
        @media (max-width: 720px) {
          h1 { font-size: 22px; }
          section { padding-left: 12px; padding-right: 12px; }
        }
      `}</style>
    </main>
  );
}



