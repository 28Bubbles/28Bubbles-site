export default function Home() {
  return (
    <main
      style={{
        background: "linear-gradient(135deg, #0a0a0a, #1a1a1a)",
        color: "white",
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "sans-serif",
      }}
    >
      {/* HERO SECTION */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <img
          src="/28BUBBLES_The_Clean_Company_Logo.png"
          alt="28Bubbles Logo"
          style={{ width: "200px", marginBottom: "20px" }}
        />

        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
          Welcome to 28Bubbles
        </h1>
        <p style={{ fontSize: "18px", opacity: 0.8 }}>
          Licensed & Insured • Guaranteed Clean
        </p>

        <div style={{ marginTop: "30px" }}>
          <a
            href="#services"
            style={{
              background: "#00bcd4",
              padding: "12px 22px",
              borderRadius: "8px",
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
              marginRight: "10px",
            }}
          >
            Book Now
          </a>

          <a
            href="#contact"
            style={{
              border: "2px solid #00bcd4",
              padding: "12px 22px",
              borderRadius: "8px",
              textDecoration: "none",
              color: "#00bcd4",
              fontWeight: "bold",
            }}
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <section id="services" style={{ marginTop: "60px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Our Cleaning Services
        </h2>

        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          {/* Service Card 1 */}
          <div
            style={{
              background: "#111",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "40px" }}>🏠</div>
            <h3>Standard Cleaning</h3>
            <p style={{ opacity: 0.7 }}>
              Perfect for routine weekly or bi-weekly cleaning.
            </p>
          </div>

          {/* Service Card 2 */}
          <div
            style={{
              background: "#111",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "40px" }}>🧼</div>
            <h3>Deep Cleaning</h3>
            <p style={{ opacity: 0.7 }}>
              Thorough top-to-bottom detailed cleaning for any home.
            </p>
          </div>

          {/* Service Card 3 */}
          <div
            style={{
              background: "#111",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "40px" }}>🚚</div>
            <h3>Move-In / Move-Out</h3>
            <p style={{ opacity: 0.7 }}>
              Get your space spotless before moving in or handing over keys.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        style={{
          marginTop: "80px",
          paddingTop: "30px",
          borderTop: "1px solid #333",
          textAlign: "center",
        }}
      >
        <p>📞 706-428-4238</p>
        <p>✉️ support@28bubbles.com | sales@28bubbles.com</p>
        <p style={{ opacity: 0.7, marginTop: "10px" }}>
          Licensed & Insured • Guaranteed Clean
        </p>
        <p style={{ opacity: 0.4, marginTop: "10px", fontSize: "12px" }}>
          © {new Date().getFullYear()} 28Bubbles — All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
